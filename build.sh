#!/bin/sh

log_info() {
    BLUE='\033[0;34m'
    BOLD='\033[1m'
    NC='\033[0m'
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "${BLUE}${TIMESTAMP}${NC}: ${BOLD}$1${NC}"
}

BOARD=novum

if [ -f /.dockerenv ]; then
    DOCKER_CMD=""
else
    IMAGE=henkru/ergo-builder:latest
    DOCKER_CMD="docker run --rm -it --platform linux/amd64 -v $PWD:/kicad-project $IMAGE"
    # Build the builder if does not exist
    if [ -z "$(docker images -q $IMAGE 2> /dev/null)" ]; then
        log_info "Building the builder container"
        npm run build-builder
    fi
fi

# Step 0: Remove the old build, and install requirements
log_info "Installing dependencies..."
if [ ! -f "freerouting.jar" ]; then
    log_info "'freerouting.jar' does not exist. Downloading..."
    wget -O freerouting.jar https://github.com/freerouting/freerouting/releases/download/v1.9.0/freerouting-1.9.0.jar
fi

npm install

if [ -d "out" ]; then
    log_info "Removing the 'out' directory..."
    rm -r "out"
fi

# Step 1: Run ergogen to generate PCBs and outlines
log_info "Generating the PCBs..."
npm run generate

# Step 2: Inject desing rules
log_info "Adding JLCPCB design rules"
cp kicad/JLCPCB.kicad_dru "out/$BOARD/pcbs/left.kicad_dru"
cp kicad/JLCPCB.kicad_dru "out/$BOARD/pcbs/right.kicad_dru"
cp kicad/JLCPCB.kicad_dru "out/$BOARD/pcbs/switch_plate.kicad_dru"
cp kicad/JLCPCB.kicad_dru "out/$BOARD/pcbs/bottom_board.kicad_dru"
$DOCKER_CMD kibot -b out/novum/pcbs/left.kicad_pcb -c novum/kibot/nop.yml
$DOCKER_CMD kibot -b out/novum/pcbs/right.kicad_pcb -c novum/kibot/nop.yml
$DOCKER_CMD kibot -b out/novum/pcbs/switch_plate.kicad_pcb -c novum/kibot/nop.yml
$DOCKER_CMD kibot -b out/novum/pcbs/bottom_board.kicad_pcb -c novum/kibot/nop.yml
jq '.net_settings.classes[0].clearance |= 0.5' "out/$BOARD/pcbs/left.kicad_pro" > "out/$BOARD/pcbs/left.tmp" && mv "out/$BOARD/pcbs/left.tmp" "out/$BOARD/pcbs/left.kicad_pro"
jq '.net_settings.classes[0].track_witdh |= 0.3' "out/$BOARD/pcbs/left.kicad_pro" > "out/$BOARD/pcbs/left.tmp" && mv "out/$BOARD/pcbs/left.tmp" "out/$BOARD/pcbs/left.kicad_pro"
jq '.net_settings.classes[0].clearance |= 0.5' "out/$BOARD/pcbs/right.kicad_pro" > "out/$BOARD/pcbs/right.tmp" && mv "out/$BOARD/pcbs/right.tmp" "out/$BOARD/pcbs/right.kicad_pro"
jq '.net_settings.classes[0].track_width |= 0.3' "out/$BOARD/pcbs/right.kicad_pro" > "out/$BOARD/pcbs/right.tmp" && mv "out/$BOARD/pcbs/right.tmp" "out/$BOARD/pcbs/right.kicad_pro"

# Step 2: Autoroute the PCB
mkdir -p "out/$BOARD/freeroute"

log_info "Exporting the DSN files..."
$DOCKER_CMD ./kicad/export_dsn.py -b "out/$BOARD/pcbs/left.kicad_pcb" -o "out/$BOARD/freeroute/left.dsn"
$DOCKER_CMD ./kicad/export_dsn.py -b "out/$BOARD/pcbs/right.kicad_pcb" -o "out/$BOARD/freeroute/right.dsn"

log_info "Routing the left side..."
java -jar freerouting.jar -da -dct 0 -de "out/$BOARD/freeroute/left.dsn" -do "out/$BOARD/freeroute/left.ses"

log_info "Routing the right side..."
java -jar freerouting.jar -da -dct 0 -de "out/$BOARD/freeroute/right.dsn" -do "out/$BOARD/freeroute/right.ses"

log_info "Importing the SES files..."
$DOCKER_CMD ./kicad/import_ses.py -b "out/$BOARD/pcbs/left.kicad_pcb" -s "out/$BOARD/freeroute/left.ses" -o "out/$BOARD/pcbs/left.kicad_pcb"
$DOCKER_CMD ./kicad/import_ses.py -b "out/$BOARD/pcbs/right.kicad_pcb" -s "out/$BOARD/freeroute/right.ses" -o "out/$BOARD/pcbs/right.kicad_pcb"

# Step 4: Generate gerbers and images
log_info "Generating gerbers and images..."
$DOCKER_CMD kibot -b out/novum/pcbs/left.kicad_pcb -c novum/kibot/board.yml
$DOCKER_CMD kibot -b out/novum/pcbs/right.kicad_pcb -c novum/kibot/board.yml
$DOCKER_CMD kibot -b out/novum/pcbs/switch_plate.kicad_pcb -c novum/kibot/board.yml
$DOCKER_CMD kibot -b out/novum/pcbs/bottom_board.kicad_pcb -c novum/kibot/board.yml

log_info "\033[0;32m --- All Done ---\033[0m"


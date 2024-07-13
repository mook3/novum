#!/bin/sh
set -e

log_info() {
    BLUE='\033[0;34m'
    BOLD='\033[1m'
    NC='\033[0m'
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "${BLUE}[autoroute]${NC}: ${BOLD}$1${NC}"
}

mkdir -p "out/novum/freeroute"

set -- left right

for BOARD in "$@"; do
    log_info "Exporting the DSN: $BOARD"
    $DOCKER_CMD ./kicad/export_dsn.py -b "out/novum/pcbs/$BOARD.kicad_pcb" -o "out/novum/freeroute/$BOARD.dsn"

    log_info "Routing: $BOARD"
    java -jar "$FREEROUTING_PATH" -da -dct 0 -de "out/novum/freeroute/$BOARD.dsn" -do "out/novum/freeroute/$BOARD.ses"

    log_info "Importing the SES: $BOARD"
    $DOCKER_CMD ./kicad/import_ses.py -b "out/novum/pcbs/$BOARD.kicad_pcb" -s "out/novum/freeroute/$BOARD.ses" -o "out/novum/pcbs/$BOARD.kicad_pcb"
done

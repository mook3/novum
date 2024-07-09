#!/bin/sh

BOARD=novum

# Step 0: Remove the old build, and install requirements
if [ ! -f "freerouting.jar" ]; then
  echo "'freerouting.jar' does not exist. Downloading..."
  wget -O freerouting.jar https://github.com/freerouting/freerouting/releases/download/v1.9.0/freerouting-1.9.0.jar
fi

npm install

if [ -d "out" ]; then
    echo "Removing the 'out' directory..."
    rm -r "out"
fi

# Step 1: Run ergogen to generate PCBs and outlines
echo "Generating the PCBs"
npm run generate

# Step 2: Autoroute the PCB
mkdir -p "out/$BOARD/freeroute"

echo "Exporting the DSN files"
./kicad/export_dsn.py -b "out/$BOARD/pcbs/left.kicad_pcb" -o "out/$BOARD/freeroute/left.dsn"
./kicad/export_dsn.py -b "out/$BOARD/pcbs/right.kicad_pcb" -o "out/$BOARD/freeroute/right.dsn"

echo "Routing the left side"
java -jar freerouting.jar -da -dct 0 -de "out/$BOARD/freeroute/left.dsn" -do "out/$BOARD/freeroute/left.ses"

echo "Routing the right side"
java -jar freerouting.jar -da -dct 0 -de "out/$BOARD/freeroute/right.dsn" -do "out/$BOARD/freeroute/right.ses"

echo "Importing the SES files"
./kicad/import_ses.py -b "out/$BOARD/pcbs/left.kicad_pcb" -s "out/$BOARD/freeroute/left.ses" -o "out/$BOARD/pcbs/left.kicad_pcb"
./kicad/import_ses.py -b "out/$BOARD/pcbs/right.kicad_pcb" -s "out/$BOARD/freeroute/right.ses" -o "out/$BOARD/pcbs/right.kicad_pcb"


#!/bin/sh
set -e

log_info() {
    BLUE='\033[0;34m'
    BOLD='\033[1m'
    NC='\033[0m'
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "${BLUE}[track]${NC}: ${BOLD}$1${NC}"
}

set -- left right

for BOARD in "$@"; do
    if [ -f "novum/kicad/$BOARD.json" ]; then
        log_info "Adding hand-created tracks: $BOARD"
        $DOCKER_CMD ./kicad/import_tracks.py "out/novum/pcbs/$BOARD.kicad_pcb" "novum/kicad/$BOARD.json"
    fi
done

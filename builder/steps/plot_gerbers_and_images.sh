#!/bin/sh
set -e

log_info() {
    BLUE='\033[0;34m'
    BOLD='\033[1m'
    NC='\033[0m'
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    echo "${BLUE}[plot]${NC}: ${BOLD}$1${NC}"
}

set -- left right switch_plate bottom_board

for BOARD in "$@"; do
    log_info "Generating gerbers and images: $BOARD"
    $DOCKER_CMD kibot -b "out/novum/pcbs/$BOARD.kicad_pcb" -c novum/kibot/board.yml
done

if [ "$SKIP_BOTTOM_WITH_ART" != "yes" ]; then
    log_info "Generating gerbers and images: bottom_board_with_art"
    $DOCKER_CMD kibot -b "out/novum/pcbs/bottom_board_with_art.kicad_pcb" -c novum/kibot/bottom.yml
fi

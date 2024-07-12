#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import pcbnew
import json
"""
Import tracks from a JSON file

Usage: import_tracks.py <board_file> <track_file>
"""


def vec(x, y):
    return pcbnew.VECTOR2I(x, y)


def main(argv):
    board_file = argv[0]
    track_file = argv[1]
    tracks = json.load(open(track_file, 'r'))
    board = pcbnew.LoadBoard(board_file)

    for info in tracks['tracks']:
        track = pcbnew.PCB_TRACK(board)
        track.SetNetCode(board.GetNetcodeFromNetname(info[0]))
        track.SetStart(vec(info[1], info[2]))
        track.SetEnd(vec(info[3], info[4]))
        track.SetWidth(info[5])
        track.SetLayer(info[6])
        board.Add(track)

    for info in tracks['vias']:
        pcb_via = pcbnew.PCB_VIA(board)
        pcb_via.SetNetCode(board.GetNetcodeFromNetname(info[0]))
        pcb_via.SetPosition(vec(info[1], info[2]))
        pcb_via.SetWidth(info[3])
        pcb_via.SetDrill(info[4])
        board.Add(pcb_via)

    board.Save(board_file)


if __name__ == "__main__":
    main(sys.argv[1:])

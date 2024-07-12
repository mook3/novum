#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import pcbnew
import json
"""
Dumps the tracks and VIAs as JSON

Usage: export_tracks.py <board_file>
"""


def main(argv):
    board_file = argv[0]
    board = pcbnew.LoadBoard(board_file)

    tracks = []
    vias = []

    for track in board.GetTracks():
        if type(track) is pcbnew.PCB_TRACK:
            start = track.GetStart()
            end = track.GetEnd()
            width = track.GetWidth()
            layer = track.GetLayer()
            netname = track.GetNetname()
            tracks.append([
                netname,
                start[0],
                start[1],
                end[0],
                end[1],
                width,
                layer,
            ])
        elif type(track) is pcbnew.PCB_VIA:
            position = track.GetPosition()
            width = track.GetWidth()
            drill = track.GetDrill()
            netname = track.GetNetname()
            vias.append([
                netname,
                position[0],
                position[1],
                width,
                drill,
            ])
        else:
            raise Exception(f"Unknown type: {type(track)}")

    print(json.dumps({
        "tracks": tracks,
        "vias": vias
    }))


if __name__ == "__main__":
    main(sys.argv[1:])

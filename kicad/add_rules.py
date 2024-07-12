#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
from pathlib import Path
import pcbnew
"""
Set clearance and track width for the Default net class
"""


def main(argv):
    board_file = argv[0]
    board = pcbnew.LoadBoard(board_file)

    default_net = board.GetAllNetClasses()['Default']
    default_net.SetClearance(500000)  # 0.5 mm
    default_net.SetTrackWidth(300000)  # 0.3 mm

    board.Save(board_file)


if __name__ == "__main__":
    main(sys.argv[1:])

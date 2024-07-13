#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import os.path
import getopt
import pcbnew
"""
This program runs pcbnew and exports a Specctra DSN file. 
"""


def main(argv):
    board_file = ''
    output_file = ''
    try:
        opts, args = getopt.getopt(argv, "hb:o:", ["board=", "output="])
    except getopt.GetoptError:
        print('export_dsn.py -b <board_file> -o <ouput_dsn_file>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('export_dsn.py -b <board_file> -o <ouput_dsn_file>')
            sys.exit()
        elif opt in ("-b", "--board"):
            board_file = arg
        elif opt in ("-o", "--output"):
            output_file = arg
    print('Exporting Specctra DSN for ', board_file, ' at ', output_file)
    board = pcbnew.LoadBoard(board_file)

    # Remove zones, freerouting doesn't like them
    for zone in board.Zones():
        board.Remove(zone)

    pcbnew.ExportSpecctraDSN(board, output_file)
    if not os.path.isfile(output_file):
        print(f"Error creating {output_file}")
        sys.exit(1)


if __name__ == "__main__":
    main(sys.argv[1:])

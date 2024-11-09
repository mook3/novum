#!/bin/sh

if true; then
    echo 'Skipping step'
    exit 0
fi

cp -r novum/qmk external/qmk_firmware/keyboards/novum
cd external/qmk_firmware || exit 1

make novum/rev1:default
make novum/rev1:debug

mkdir -p ../../out/novum/fw
cp  .build/novum_rev1_default.uf2 ../../out/novum/fw
cp  .build/novum_rev1_debug.uf2 ../../out/novum/fw

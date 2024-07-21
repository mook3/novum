#!/bin/sh

cp -r novum/qmk external/vial-qmk/keyboards/novum
cd external/vial-qmk || exit 1
make novum/rev1:vial

mkdir -p ../../out/novum/fw
cp  .build/novum_rev1_vial.uf2 ../../out/novum/fw

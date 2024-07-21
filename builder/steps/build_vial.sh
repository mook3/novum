#!/bin/sh

cp -r novum/qmk modules/vial-qmk/keyboards/novum
cd modules/vial-qmk || exit 1
make novum/rev1:vial

mkdir -p ../../out/novum/fw
cp  .build/novum_rev1_vial.uf2 ../../out/novum/fw

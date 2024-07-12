function generateUUID() {
  const array = new Uint8Array(16);
  for (let i = 0; i < 16; i++) {
    array[i] = Math.floor(Math.random() * 256);
  }
  array[6] = (array[6] & 0x0f) | 0x40;
  array[8] = (array[8] & 0x3f) | 0x80;

  const uuid = array.reduce((str, byte, i) => {
    const hex = byte.toString(16).padStart(2, '0');
    return str + (i === 4 || i === 6 || i === 8 || i === 10 ? '-' : '') + hex;
  }, '');

  return uuid;
}

module.exports = {
  params: {
    designator: 'ZONE',
    side: undefined,
    width: 0,
    height: 0,
    net: { type: 'net', value: undefined },
  },
  body: (p) => {
    const top_left = `${p.x} ${p.y}`;
    const top_right = `${p.x + p.width} ${p.y}`;
    const bottom_right = `${p.x + p.width} ${p.y + p.height}`;
    const bototm_left = `${p.x} ${p.y + p.height}`;
    return `
        (zone
          (net ${p.net.index})
          (net_name "${p.net.name}")
          (layer "${p.side.name}.Cu")
          (uuid "${generateUUID()}")
          (hatch edge 0.5)
          (connect_pads
            (clearance 0.5)
          )
          (min_thickness 0.25)
          (filled_areas_thickness no)
          (fill
            (thermal_gap 0.5)
            (thermal_bridge_width 0.5)
          )
          (polygon
            (pts
              (xy ${top_left}) (xy ${top_right}) (xy ${bottom_right}) (xy ${bototm_left})
            )
          )
        )
        `;
  },
};

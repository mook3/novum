module.exports = {
  params: {
    designator: 'B',
    class: "B",
    side: "F",
    from: { type: 'net', value: 'RST' },
    to: { type: 'net', value: 'GND' },
  },
  body: (p) => {
    return `
        (module SW_SKHLLCA010 (layer ${p.side}.Cu) (tedit 61FC55F2)

            (descr "alps SKHLLCA010 DIP pushbutton")
            (tags "alps tht dip pushbutton SPST")
            (attr through_hole)

            ${p.at /* parametric position */}
            ${"" /* footprint reference */}

            (fp_text reference "${p.ref}" (at -2.25 3.5) (layer "${p.side}.SilkS") ${p.ref_hide
      } (effects (font (size 1 1) (thickness 0.15))))

            (fp_text value "" (at 0 -0.75) (layer ${p.side}.Fab) (effects (font (size 1 1) (thickness 0.15))))

            (fp_line (start -2.25 0.55) (end 2.25 0.55) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start -3.9 -0.07) (end -3.9 -3.75) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start -1.25 -3.75) (end -1.25 -5) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start 3.9 -0.07) (end 3.9 -3.75) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start -3.9 -3.75) (end 3.9 -3.75) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start 1.25 -3.75) (end 1.25 -5) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start -1.25 -5) (end 1.25 -5) (layer "${p.side}.SilkS") (width 0.12))
            (fp_line (start -3.65 -4.97) (end 3.65 -4.97) (layer "${p.side}.CrtYd") (width 0.05))
            (fp_line (start 3.65 -4.97) (end 3.65 2.18) (layer "${p.side}.CrtYd") (width 0.05))
            (fp_line (start -3.65 -4.97) (end -3.65 2.18) (layer "${p.side}.CrtYd") (width 0.05))
            (fp_line (start -3.65 2.18) (end 3.65 2.18) (layer "${p.side}.CrtYd") (width 0.05))
            (pad "1" thru_hole circle (at 2.5 -1.25 ${p.rot
      }) (size 1.8 1.8) (drill 1) (layers *.Cu "*.Mask") ${p.to.str})
            (pad "2" thru_hole circle (at -2.5 -1.25 ${p.rot
      }) (size 1.8 1.8) (drill 1) (layers *.Cu "*.Mask") ${p.from.str
      })
            (pad "MP" thru_hole circle (at -3.5 1.25 ${p.rot
      }) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
            (pad "MP" thru_hole circle (at 3.5 1.25 ${p.rot
      }) (size 2.1 2.1) (drill 1.3) (layers *.Cu *.Mask))
        )
        `;
  },
};

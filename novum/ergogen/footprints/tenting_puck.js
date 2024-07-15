// Based on https://github.com/splitkb/tenting_puck/tree/main
//
// Copyright 2023 splitkb.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = {
  params: {
    designator: 'TENTINGPUCK',
  },
  body: (p) => `
(footprint "TentingPuck"
	(version 20240108)
	(generator "pcbnew")
	(generator_version "8.0")
	(layer "F.Cu")
  ${p.at}
	(property "Reference" "${p.ref}"
		(at 0 0 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "6e2c338f-8482-4715-94ba-ed01f6cda67e")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Value" "Tenting Puck"
		(at 0 1.5 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "7617e952-1556-41f3-8161-83874c4d670a")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Footprint" ""
		(at 0 0 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "a2697deb-32e4-4d1b-b3e1-e9d7841d970d")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(property "Datasheet" ""
		(at 0 0 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "c0e8969d-1a04-430d-86d9-d5da2a499a23")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(property "Description" ""
		(at 0 0 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "ff06a47a-e142-4d0b-8b7f-d89208105861")
		(effects
			(font
				(size 1.27 1.27)
				(thickness 0.15)
			)
		)
	)
	(attr exclude_from_pos_files exclude_from_bom)
	(fp_arc
		(start -20.32 -2.8575)
		(mid -19.91151 -4.959784)
		(end -19.286136 -7.008044)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "7bbb77a3-cd91-4687-9c90-0e9185f7326f")
	)
	(fp_arc
		(start -19.286135 7.008046)
		(mid -19.91151 4.959785)
		(end -20.32 2.8575)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "8cb775d3-e7d2-4c19-a3c6-87ad37e0544f")
	)
	(fp_arc
		(start -1.128385 -15.940864)
		(mid -0.564967 -15.985206)
		(end 0 -16)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "85fd354e-dfe5-40dd-bd1d-665d9ef83e0e")
	)
	(fp_arc
		(start 0 -16)
		(mid 0.564967 -15.985206)
		(end 1.128385 -15.940864)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "b9113245-19c7-48be-be8f-4f9e35a7f026")
	)
	(fp_arc
		(start 0 16)
		(mid -0.564967 15.985206)
		(end -1.128385 15.940864)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "f5e52bbf-973d-4286-9df0-2e3bb6c3e4b9")
	)
	(fp_arc
		(start 1.128385 15.940864)
		(mid 0.564967 15.985206)
		(end 0 16)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "47a7c7ae-8cde-484e-a52c-d6344ad95466")
	)
	(fp_arc
		(start 19.286134 -7.008048)
		(mid 19.91151 -4.959786)
		(end 20.32 -2.8575)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "609a0244-d3eb-45b6-8b07-d56a00b59953")
	)
	(fp_arc
		(start 20.32 2.8575)
		(mid 19.91151 4.959786)
		(end 19.286134 7.008048)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "B.SilkS")
		(uuid "b55d3d87-6805-47a1-8f6b-e2beb7ea1794")
	)
	(fp_arc
		(start -20.32 -2.8575)
		(mid -19.91151 -4.959786)
		(end -19.286134 -7.008048)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "fe0e52d1-fa6c-4d19-9413-8ba0cee4a2f7")
	)
	(fp_arc
		(start -19.286134 7.008047)
		(mid -19.91151 4.959786)
		(end -20.32 2.8575)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "cbf55b32-35d0-4554-8512-dfeb59579166")
	)
	(fp_arc
		(start -1.128385 -15.940864)
		(mid -0.564967 -15.985206)
		(end 0 -16)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "ca9862be-1e6b-4a3b-9007-a56335771ec8")
	)
	(fp_arc
		(start 0 -16)
		(mid 0.564967 -15.985206)
		(end 1.128385 -15.940864)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "c1e371e8-32be-47b7-b876-ce085f0b62c9")
	)
	(fp_arc
		(start 0 16)
		(mid -0.564967 15.985206)
		(end -1.128385 15.940864)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "8dec116f-b9ce-484a-9fbe-fe9a3af38dff")
	)
	(fp_arc
		(start 1.128385 15.940864)
		(mid 0.564967 15.985206)
		(end 0 16)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "8896722a-c485-42f1-9bf7-f88e91d2b1b7")
	)
	(fp_arc
		(start 19.286135 -7.008045)
		(mid 19.91151 -4.959785)
		(end 20.32 -2.8575)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "1a2860ef-faf5-4a40-aa76-27284bc554d3")
	)
	(fp_arc
		(start 20.32 2.8575)
		(mid 19.91151 4.959785)
		(end 19.286135 7.008046)
		(stroke
			(width 0.2)
			(type solid)
		)
		(layer "F.SilkS")
		(uuid "2dc4cc2d-040d-46e0-b0a1-a63a70e0bf40")
	)
	(fp_text user "tenting"
		(at -0.254 -3 90)
		(unlocked yes)
		(layer "B.SilkS")
		(uuid "2ae6666a-e78f-40e2-bfcd-6c0fd3859aa1")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(fp_text user "puck"
		(at -0.1905 2 90)
		(unlocked yes)
		(layer "B.SilkS")
		(uuid "4f68afee-94d5-4a49-b634-f0f5c0f97208")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(fp_text user "tenting"
		(at -0.1905 2.8255 90)
		(unlocked yes)
		(layer "F.SilkS")
		(uuid "5f76efef-3386-4b58-a1fa-12b4cce1d4d1")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(fp_text user "puck"
		(at -0.254 -2.111 90)
		(unlocked yes)
		(layer "F.SilkS")
		(uuid "648f97b7-4422-4db8-bb3c-06576f24e30d")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(pad "" thru_hole circle
		(at -19.05 0)
		(size 3.8 3.8)
		(drill 2.2)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "cb217a51-585d-4625-9b30-7493376cf7d7")
	)
	(pad "" thru_hole circle
		(at 0 -19.05)
		(size 3.8 3.8)
		(drill 2.2)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "98a7016d-39df-45ed-ba13-a22dd40115dc")
	)
	(pad "" thru_hole circle
		(at 0 19.05)
		(size 3.8 3.8)
		(drill 2.2)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "85d5b42c-f4ec-42b5-9800-e12d981e2e36")
	)
	(pad "" thru_hole circle
		(at 19.05 0)
		(size 3.8 3.8)
		(drill 2.2)
		(layers "*.Cu" "*.Mask")
		(remove_unused_layers no)
		(uuid "9e56777b-e04d-433a-8bbc-03b36565ee91")
	)
)
  `
};

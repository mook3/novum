module.exports = {
  params: {
    designator: 'LOGO',
  },
  body: (p) => `
(footprint "Logo"
	(version 20240108)
	(generator "pcbnew")
	(generator_version "8.0")
	(layer "F.Cu")
  ${p.at}
	(property "Reference" "${p.ref}"
		(at 0 0 0)
		(layer "F.Fab")
		(hide yes)
		(uuid "82e9786e-2c39-443a-b6fe-bcbadb763d3c")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Value" "Logo"
		(at 0 1 0)
		(unlocked yes)
		(layer "F.Fab")
		(uuid "110afaeb-255d-4306-9a0d-16b6da133c1b")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Footprint" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "188cb977-1f59-4654-8134-1bf2ff376cf9")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Datasheet" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "78a632d3-8816-4d9f-a6d7-786420e96dd5")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(property "Description" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "F.Fab")
		(hide yes)
		(uuid "f696d9c7-c4fc-4fbd-aecf-46fb774e6e84")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
		)
	)
	(attr smd)
	(fp_line
		(start -6.604 -2.54)
		(end -6.604 2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "be1b7c85-66cf-451a-8fec-c48b845fe5f1")
	)
	(fp_line
		(start -6.604 2.54)
		(end -2.54 6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "97c5dd22-a34b-4ce1-a17f-fc3ca10a06bf")
	)
	(fp_line
		(start -3.556 -1.143)
		(end -3.556 -3.2512)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "F.Cu")
		(uuid "aaa0c455-9028-4bf5-9508-e07012ae9d8b")
	)
	(fp_line
		(start -2.54 -6.604)
		(end -6.604 -2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "98a972bb-a527-45aa-890b-22fabf359214")
	)
	(fp_line
		(start -2.54 -6.604)
		(end 2.54 -6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "e3145dc3-b7e0-4c18-9411-8840cfeb8688")
	)
	(fp_line
		(start -2.54 6.604)
		(end 2.54 6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "fec236f6-0ed7-4cef-aa5d-65fe33d47080")
	)
	(fp_line
		(start 2.54 -6.604)
		(end 6.604 -2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "20a0129e-1eb2-409d-97f3-33369968daf0")
	)
	(fp_line
		(start 2.54 -0.0254)
		(end 3.2258 -0.7112)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "F.Cu")
		(uuid "801941dc-a76c-4d29-b057-69102f0db8c1")
	)
	(fp_line
		(start 3.2258 -0.7112)
		(end 4.699 -0.7112)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "F.Cu")
		(uuid "f2342307-7639-446a-a754-36b4c5284c8f")
	)
	(fp_line
		(start 6.604 -2.54)
		(end 6.604 2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "496e31be-c0c2-46d7-b73a-6624d156e008")
	)
	(fp_line
		(start 6.604 2.54)
		(end 2.54 6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "5658caa0-2d5e-4b21-bc94-7f2d668efbe8")
	)
	(fp_arc
		(start -2.457594 0.115354)
		(mid -3.242772 -0.307843)
		(end -3.556 -1.143)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "F.Cu")
		(uuid "dcc59186-9ec0-49e8-b6c9-ecbb0617fe25")
	)
	(fp_arc
		(start -1.796051 1.796051)
		(mid 0.972016 -2.346654)
		(end 0 2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "F.Cu")
		(uuid "19563c6d-4aad-41e1-a8b0-87602e26e776")
	)
	(fp_arc
		(start -0.050924 -2.54)
		(mid 0.146298 -3.531504)
		(end 0.70794 -4.37206)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "F.Cu")
		(uuid "0ea9280a-4831-4487-b261-328e1fe6dfc6")
	)
	(fp_circle
		(center -3.556 -3.2512)
		(end -3.232711 -3.2512)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.Cu")
		(uuid "c07ddf6b-a69e-4e17-ada1-964568ac46f4")
	)
	(fp_circle
		(center 0 0)
		(end 1.016 0)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.Cu")
		(uuid "1a1c11bf-944b-4e80-b3ba-bb92d0a46995")
	)
	(fp_circle
		(center 0.70794 -4.37206)
		(end 1.031229 -4.37206)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.Cu")
		(uuid "5bd528b4-7947-45e9-9463-6ebac2b77407")
	)
	(fp_circle
		(center 4.699 -0.7112)
		(end 5.022289 -0.7112)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "F.Cu")
		(uuid "c88a42b5-32c6-4e59-b8b5-34ba47c48379")
	)
	(fp_text user "Novum"
		(at -3.73 4.699 0)
		(unlocked yes)
		(layer "F.Cu")
		(uuid "d188f93a-2201-4e43-aa17-fa5a618a37c4")
		(effects
			(font
				(size 1.5 1.5)
				(thickness 0.3)
				(bold yes)
			)
			(justify left bottom)
		)
	)
)
  `
};
module.exports = {
  params: {
    designator: 'LOGO',
    mirrored: false,
  },
  body: (p) => !p.mirrored ? `
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
)`
    : `
(footprint "Logo_Mirrored"
	(version 20240108)
	(generator "pcbnew")
	(generator_version "8.0")
	(layer "F.Cu")
  ${p.at}
	(property "Reference" "${p.ref}"
		(at 0 0 0)
		(layer "B.Fab")
		(hide yes)
		(uuid "ddc79489-b3a5-4f44-aa94-0509ea567a48")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(property "Value" "Logo_Mirrored"
		(at 0 1 0)
		(unlocked yes)
		(layer "B.Fab")
		(uuid "1da6241f-0694-43ba-905c-b073d2128ce5")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(property "Footprint" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "B.Fab")
		(hide yes)
		(uuid "c7cfd6c0-e04f-4a49-8d35-a880bf6bf8f2")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(property "Datasheet" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "B.Fab")
		(hide yes)
		(uuid "95856ba7-a257-4a5a-a54a-05c743516e7f")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(property "Description" ""
		(at 0 0 0)
		(unlocked yes)
		(layer "B.Fab")
		(hide yes)
		(uuid "c4f080c7-3ff5-4ca7-8ea7-436652acefd3")
		(effects
			(font
				(size 1 1)
				(thickness 0.15)
			)
			(justify mirror)
		)
	)
	(attr smd)
	(fp_line
		(start -6.604 -2.54)
		(end -2.54 -6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "03e81a30-dec0-426f-9577-7dbbd014a442")
	)
	(fp_line
		(start -6.604 2.54)
		(end -6.604 -2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "0babc7cb-fe13-4217-aae7-2b6c7fed99ec")
	)
	(fp_line
		(start -4.699 -0.7112)
		(end -3.2258 -0.7112)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "B.Cu")
		(uuid "11f241bb-70c9-4ba9-a558-5eea0776fbbf")
	)
	(fp_line
		(start -3.2258 -0.7112)
		(end -2.54 -0.0254)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "B.Cu")
		(uuid "9ee6c8ce-6e17-472b-b4aa-da434030c5b2")
	)
	(fp_line
		(start -2.54 -6.604)
		(end 2.54 -6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "0a9f36b7-1583-4863-91be-5bd1334f7c24")
	)
	(fp_line
		(start -2.54 6.604)
		(end -6.604 2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "6af7ba4a-7591-450b-9c68-ee8c9eb6e60f")
	)
	(fp_line
		(start -2.54 6.604)
		(end 2.54 6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "42f6ae95-d18e-495c-a9b3-8669b16ce811")
	)
	(fp_line
		(start 2.54 6.604)
		(end 6.604 2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "9b1ce5bf-a6ed-4e39-82c7-621409ce23da")
	)
	(fp_line
		(start 3.556 -3.2512)
		(end 3.556 -1.143)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "B.Cu")
		(uuid "4ac3a7f9-abff-4cd5-8197-8222b82eb73e")
	)
	(fp_line
		(start 6.604 -2.54)
		(end 2.54 -6.604)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "988a35e4-5be4-45e1-ab72-ab2535512926")
	)
	(fp_line
		(start 6.604 2.54)
		(end 6.604 -2.54)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "dcd20de0-5143-460d-ac2f-7acb05b0dec5")
	)
	(fp_arc
		(start -0.70794 -4.37206)
		(mid -0.146298 -3.531504)
		(end 0.050924 -2.54)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "B.Cu")
		(uuid "c1b0f27b-4659-4692-b75c-1464e19f60b9")
	)
	(fp_arc
		(start 0 2.54)
		(mid -0.972016 -2.346654)
		(end 1.796051 1.796051)
		(stroke
			(width 0.5)
			(type default)
		)
		(layer "B.Cu")
		(uuid "35a0c046-7f1a-4216-bc6d-cc81b783e1ec")
	)
	(fp_arc
		(start 3.556 -1.143)
		(mid 3.242772 -0.307843)
		(end 2.457594 0.115354)
		(stroke
			(width 0.2)
			(type default)
		)
		(layer "B.Cu")
		(uuid "6476fdbf-1511-4872-b1c2-7e00c732aaef")
	)
	(fp_circle
		(center -4.699 -0.7112)
		(end -5.022289 -0.7112)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.Cu")
		(uuid "9de822d1-ff90-4170-b152-8fd77fa92e0a")
	)
	(fp_circle
		(center -0.70794 -4.37206)
		(end -1.031229 -4.37206)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.Cu")
		(uuid "f509cb12-2693-4c18-a302-d67f42fce726")
	)
	(fp_circle
		(center 0 0)
		(end -1.016 0)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.Cu")
		(uuid "c1155ede-7184-40da-bfc9-9100e9f4de82")
	)
	(fp_circle
		(center 3.556 -3.2512)
		(end 3.232711 -3.2512)
		(stroke
			(width 0.2)
			(type solid)
		)
		(fill solid)
		(layer "B.Cu")
		(uuid "9a83f9dc-ccae-4900-97ec-4234b3c28ae0")
	)
	(fp_text user "Novum"
		(at 3.73 4.699 0)
		(unlocked yes)
		(layer "B.Cu")
		(uuid "857ee4f6-47be-445a-98c5-f63b3862df37")
		(effects
			(font
				(size 1.5 1.5)
				(thickness 0.3)
				(bold yes)
			)
			(justify left bottom mirror)
		)
	)
)
`
};

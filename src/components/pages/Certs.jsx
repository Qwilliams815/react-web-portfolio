import React from "react";
import Tilty from "react-tilty";
import GridItemCSS from "../GridItem.module.css";
import CertsCSS from "../pages/Certs.module.css";

import FCCAlgoCert from "/src/assets/images/FCC_JS_Algo_Cert.webp";
import CS50Cert from "/src/assets/images/CS50_Cert.webp";

export default function Certs() {
	const certs = [
		{
			src: CS50Cert,
			alt: "Harvard CS50 Certificate",
			link:
				"https://certificates.cs50.io/e8b98181-c1f8-405a-96f6-9fa6c869e0d9.pdf?size=letter",
		},
		{
			src: FCCAlgoCert,
			alt: "freeCodeCamp Javascript Algorithms and Data Structures Certification",
			link:
				"https://www.freecodecamp.org/certification/Qwilliams/javascript-algorithms-and-data-structures",
		},
	];

	return (
		<>
			<div className={`${GridItemCSS.content_padding}`}>
				<h2>/certs</h2>
				<p>100% certifiably certified.</p>
				<div className={CertsCSS.container}>
					{certs.map((cert) => (
						<div className={CertsCSS.tilt_wrapper} key={cert.alt}>
							<a href={cert.link} target="_blank" tabIndex="-1">
								<Tilty reverse={false} speed={1000} scale={1.1}>
									<img src={cert.src} alt={cert.alt} className={CertsCSS.cert_img} />
								</Tilty>
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

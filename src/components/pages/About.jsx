import React from "react";
import GridItemCSS from "../GridItem.module.css";
import AboutCSS from "../pages/About.module.css";

import headshot from "/src/assets/images/headshot.webp";
import headshotMobile from "/src/assets/images/headshot_mobile.png";

export default function About() {
	return (
		<>
			<div className={`${AboutCSS.about_content} ${GridItemCSS.content_padding}`}>
				<h2>/about</h2>
				<img src={headshot} alt="Headshot of me, Brian" className={AboutCSS.headshot} />
				<p>
					<span className={AboutCSS.about_text}>
						<span>Howdy, I’m Brian! </span>
						<img
							src={headshotMobile}
							alt="Headshot of me, Brian"
							className={AboutCSS.headshot_mobile}
						/>
						A nut butter media producer turned AV technician specialist turned junior web
						developer. It’s been a long, rather unconventional road, but I’m thrilled to be
						just getting started.
					</span>
				</p>
				<br />
				<br />
				<div className={AboutCSS.text_wrapper}>
					<p>
						<span className={AboutCSS.about_text}>
							I began my programming journey early 2020 during Covid-19 lockdowns. Upon
							becoming furloughed from my job, I decided to fill my time learning Python and
							quickly became addicted to learning anything and everything programming. Using
							the internet's vast assortment of free classes, certificate programs, and
							tutorials, I began plotting out potential career paths, ultimately deciding on
							Web Development. Fast forward ~4 years and I’ve been honing my skills ever
							since, building out challenging passion projects and growing as a developer.
						</span>
					</p>
				</div>
				<br />
				<br />
				<p>
					<span className={AboutCSS.about_text}>
						Moving forward, I am excited to join a team and contribute to creating real
						world solutions. If you can help make that happen, I look forward to hearing
						from you. Thanks for reading!
					</span>
				</p>
			</div>
		</>
	);
}

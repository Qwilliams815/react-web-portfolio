import React, { useRef } from "react";
import GridItemCSS from "../GridItem.module.css";
import AboutCSS from "../pages/About.module.css";
import { scrollToTop } from "../../assets/icons";

import headshot from "/src/assets/images/headshot.webp";
import headshotMobile from "/src/assets/images/headshot_mobile.png";

export default function About() {
	const containerRef = useRef(null);
	return (
		<>
			<div className={`${AboutCSS.about_content} ${GridItemCSS.content_padding}`}>
				<h2>/about</h2>
				<div ref={containerRef}>
					<p>
						<span>Howdy, I'm Brian!</span>
					</p>
				</div>
				<img
					src={headshotMobile}
					alt="Photo of me, Brian"
					className={AboutCSS.headshot_mobile}
				/>
				<div></div>
				<div className={AboutCSS.text_chunk}>
					<p>
						<span>
							I'm a nut butter media producer turned AV technician specialist turned web
							developer. It’s been a long, rather unconventional road, but I'm thrilled to be
							expanding my horizons!
						</span>
					</p>
				</div>
				<div className={`${AboutCSS.text_and_image}`}>
					<div className={`${AboutCSS.text_chunk} ${AboutCSS.text_half}`}>
						<p>
							<span>
								I began my developer journey early 2020 during Covid-19 lockdowns. Upon becoming
								furloughed from my job, I decided to fill my time learning Python and quickly
								became addicted to learning anything and everything programming. Using the
								internet's vast assortment of free classes, certificate programs, and tutorials,
								I began plotting out potential career paths, ultimately deciding on Web
								Development. Fast forward ~4 years and I’ve been honing my skills ever since,
								building out challenging passion projects and growing as a developer.
							</span>
						</p>
					</div>
					<div className={AboutCSS.image_half}>
						<img
							src={headshotMobile}
							alt="Headshot of me, Brian"
							className={AboutCSS.headshot}
						/>
					</div>
				</div>
				<div className={AboutCSS.text_chunk}>
					<p>
						<span>
							Moving forward, I am excited to join a team and contribute to creating real
							world solutions. If you can help make that happen, I look forward to hearing
							from you. Thanks for reading!
						</span>
					</p>
				</div>
				<img
					src={scrollToTop}
					alt="Scroll to top"
					className={AboutCSS.scrollToTop}
					onClick={() =>
						containerRef.current?.scrollIntoView({
							behavior: "smooth",
							block: "end",
							inline: "nearest",
						})
					}
				/>
			</div>
		</>
	);
}

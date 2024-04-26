import React, { useRef } from "react";
import { motion } from "framer-motion";
import DashboardCSS from "./Dashboard.module.css";
import useResizeText from "../hooks/useResizeText";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certs from "./pages/Certs";
import Projects from "./pages/Projects";
import GridItem from "./GridItem";
import GlitchText from "./fx_components/GlitchText";

import githubLogo from "../assets/icons/github.svg";
import linkedinLogo from "../assets/icons/linkedin.svg";
import resumeLogo from "../assets/icons/file-solid.svg";

// DESC: Renders the main dashboard hub for the site.
export default function Dashboard() {
	const textRef = useRef(null);
	const { size } = useResizeText(textRef);

	return (
		<div className={DashboardCSS.grid}>
			<div id="grid-first-name" className={DashboardCSS.grid_first_name}>
				<h1 className={DashboardCSS.name} ref={textRef} style={{ fontSize: size }}>
					<GlitchText label="BRIAN" />
				</h1>
			</div>

			<div id="grid-last-name" className={DashboardCSS.grid_last_name}>
				<h1 className={DashboardCSS.name} style={{ fontSize: size }}>
					<GlitchText label="WILLIAMS" />
					<motion.span
						drag
						className={DashboardCSS.period}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
					>
						.
					</motion.span>
				</h1>
			</div>

			<GridItem
				className={`${DashboardCSS.grid_skills}`}
				expandable
				expanded={false}
				fadeInDelay={1}
				xStart={0}
				yStart={-100}
			>
				<Skills className={DashboardCSS.content} />
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_about}`}
				expandable
				expanded={false}
				fadeInDelay={1.4}
				xStart={100}
				yStart={0}
			>
				<About />
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_certs}`}
				expandable
				expanded={false}
				fadeInDelay={2.2}
				xStart={-100}
				yStart={0}
			>
				<Certs />
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_projects}`}
				expandable
				expanded={false}
				fadeInDelay={1.8}
				xStart={0}
				yStart={100}
			>
				<Projects />
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_git}`}
				fadeInDelay={2.6}
				xStart={0}
				yStart={100}
			>
				<a href="https://github.com/Qwilliams815" target="_blank">
					<img src={githubLogo} alt="github icon" />
				</a>
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_res}`}
				fadeInDelay={3}
				xStart={0}
				yStart={100}
			>
				<a
					href="https://brianandwilliams.com/resources/Resume%20(Brian%20Williams).pdf"
					target="_blank"
				>
					<img src={resumeLogo} alt="resume icon" />
				</a>
			</GridItem>

			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_linked}`}
				fadeInDelay={3.4}
				xStart={0}
				yStart={100}
			>
				<a href="https://www.linkedin.com/in/brian-williams-807832189/" target="_blank">
					<img src={linkedinLogo} alt="linkedIn icon" />
				</a>
			</GridItem>
		</div>
	);
}

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardCSS from "./Dashboard.module.css";
import { About, Skills, Certs, Projects } from "./pages";
import GridItem from "./GridItem";
import GlitchText from "./fx_components/GlitchText";
import ContainerFitText from "../hooks/ContainerFitText";
import useResizeText from "../hooks/useResizeText";
import { Route, Routes, Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

import resume from "/public/Resume.pdf";
import {
	githubLogo,
	linkedinLogo,
	resumeLogo,
	ribbon,
	profile,
	projects,
	certsWithCheck,
} from "../assets/icons";

// DESC: Renders the main dashboard hub for the site.
const Dashboard = () => {
	const textRef = useRef(null);
	const gridWrapper = useRef(null);
	const { size } = useResizeText(textRef);
	const mobileScreenSize = window.matchMedia("(max-width: 400px)");

	return (
		<motion.div className={DashboardCSS.grid} ref={gridWrapper}>
			<motion.div
				className={`${DashboardCSS.grid_first_name} ${DashboardCSS.name_container}`}
			>
				{/* FIRST NAME */}
				<h1 className={DashboardCSS.name} ref={textRef} style={{ fontSize: size }}>
					{size && <GlitchText label="BRIAN" />}
				</h1>
			</motion.div>
			<div
				className={`${DashboardCSS.grid_last_name} ${DashboardCSS.name_container}`}
			>
				{/* LAST NAME */}
				<h1 className={DashboardCSS.name} style={{ fontSize: size }}>
					{size && <GlitchText label="WILLIAMS" />}
					<motion.span
						drag
						className={DashboardCSS.period}
						whileDrag={{ scale: 1.2 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ opacity: { delay: 1.3 } }}
					>
						.
					</motion.span>
				</h1>
			</div>

			<div className={DashboardCSS.job_title}>WEB DEVELOPER</div>

			{/* SKILLS */}
			{/* <Link to="/skills"> */}
			<GridItem
				className={`${DashboardCSS.grid_skills}`}
				title="/skills"
				page={<Skills />}
				expandable
				gridRef={gridWrapper}
				fadeInDelay={0.65}
			></GridItem>
			{/* </Link> */}
			{/* </div> */}

			{/* ABOUT */}
			<GridItem
				className={`${DashboardCSS.grid_about}`}
				title="/about"
				page={<About />}
				expandable
				fadeInDelay={0.75}
			>
				<motion.img
					className={`${DashboardCSS.grid_item_icon} ${DashboardCSS.about_icon}`}
					src={profile}
					alt="About icon"
					initial={{ rotate: 180 }}
					animate={{ rotate: 0 }}
					transition={{ type: "spring", duration: 2, delay: 0.75 }}
				/>
				{/* </div> */}
			</GridItem>
			{/* CERTIFICATIONS */}
			<GridItem
				className={`${DashboardCSS.grid_certs}`}
				title="/certs"
				page={<Certs />}
				expandable
				fadeInDelay={0.95}
			>
				<motion.img
					className={`${DashboardCSS.grid_item_icon} ${DashboardCSS.certs_icon}`}
					src={mobileScreenSize.matches ? certsWithCheck : ribbon}
					alt="Certifications icon"
					initial={{ y: "-100%" }}
					animate={{ y: mobileScreenSize.matches ? "0%" : "-10%" }}
					transition={{ type: "spring", duration: 2, delay: 1.5 }}
				/>
			</GridItem>
			{/* PROJECTS */}
			<GridItem
				className={`${DashboardCSS.grid_projects}`}
				title="/projects"
				page={<Projects />}
				expandable
				fadeInDelay={0.85}
			>
				<motion.img
					className={`${DashboardCSS.grid_item_icon} ${DashboardCSS.projects_icon}`}
					src={projects}
					alt="Projects icon"
					initial={{ y: "100%" }}
					animate={{ y: mobileScreenSize.matches ? "0%" : "-10%" }}
					transition={{ type: "spring", duration: 2, delay: 1.25 }}
				/>
			</GridItem>
			{/* <Routes>
				<Route path="/skills" element={<Skills />} />
				<Route path="/about" element={<About />} />
				<Route path="/certs" element={<Certs />} />
				<Route path="/projects" element={<Projects />} />
			</Routes> */}
			{/* SOCIAL LINKS */}
			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_git}`}
				title="/github"
				fadeInDelay={1.05}
			>
				<div className={`${DashboardCSS.grid_link}`}>
					<a href="https://github.com/Qwilliams815" target="_blank">
						<img src={githubLogo} alt="github icon" />
					</a>
				</div>
			</GridItem>
			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_res}`}
				title="/resume"
				fadeInDelay={1.15}
			>
				<div className={`${DashboardCSS.grid_link}`}>
					<a href={resume} target="_blank">
						<img src={resumeLogo} alt="resume icon" />
					</a>
				</div>
			</GridItem>
			<GridItem
				className={`${DashboardCSS.grid_link} ${DashboardCSS.grid_linked}`}
				title="/linkedin"
				fadeInDelay={1.25}
			>
				<div className={`${DashboardCSS.grid_link}`}>
					<a href="https://www.linkedin.com/in/brian-williams-807832189/" target="_blank">
						<img src={linkedinLogo} alt="linkedIn icon" />
					</a>
				</div>
			</GridItem>
			<motion.div
				className={`${DashboardCSS.theme_switch}`}
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
					transition: {
						scale: { type: "spring", delay: 0 },
						opacity: { duration: 0.6, delay: 1.5 },
					},
				}}
			>
				<DarkModeSwitch />
			</motion.div>
		</motion.div>
	);
};

export default Dashboard;

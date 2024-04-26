import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GridItemCSS from "../GridItem.module.css";
import SkillsCSS from "../pages/Skills.module.css";
import GlitchText from "../fx_components/GlitchText";

import VSCodeIcon from "/src/assets/skills_icons/vscode-logo.webp";
import FigmaIcon from "/src/assets/skills_icons/figma-logo.webp";
import DavinciIcon from "/src/assets/skills_icons/davinci-logo.webp";
import WebflowIcon from "/src/assets/skills_icons/webflow-logo.webp";
import FramerMotionIcon from "/src/assets/skills_icons/framer-motion-logo.webp";
import OBSIcon from "/src/assets/skills_icons/obs-logo.webp";
import PythonIcon from "/src/assets/skills_icons/python-logo.webp";
import NodeIcon from "/src/assets/skills_icons/nodejs-logo.webp";
import YTIcon from "/src/assets/skills_icons/yt-logo.webp";
import GitIcon from "/src/assets/skills_icons/github-logo.webp";

export default function Skills() {
	const [isHovered, setHovered] = useState(false);
	const [label, setLabel] = useState("");
	const [labelPosition, setLabelPosition] = useState({ x: null, y: null });
	const skillsWindowRef = useRef(null);
	const iconDump = [
		{ src: VSCodeIcon, alt: "VSCODE" },
		{ src: FigmaIcon, alt: "FIGMA" },
		{ src: DavinciIcon, alt: "DAVINCI_RESOLVE" },
		{ src: WebflowIcon, alt: "WEBFLOW" },
		{ src: FramerMotionIcon, alt: "FRAMER_MOTION" },
		{ src: OBSIcon, alt: "OBS" },
		{ src: PythonIcon, alt: "PYTHON" },
		{ src: NodeIcon, alt: "NODEJS" },
		{ src: YTIcon, alt: "YOUTUBE" },
		{ src: GitIcon, alt: "GITHUB" },
	];

	useEffect(() => {
		const handleMouseMove = (event) => {
			setLabelPosition({
				x: event.clientX - skillsWindowRef.current?.getBoundingClientRect().x + 5,
				y: event.clientY - skillsWindowRef.current?.getBoundingClientRect().y + 5,
			});
		};

		if (isHovered) {
			skillsWindowRef.current?.addEventListener("mousemove", handleMouseMove);
		}

		return () => {
			skillsWindowRef.current?.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isHovered]);

	const icons = iconDump.map((icon, index) => {
		return (
			<motion.img
				src={icon.src}
				label={icon.alt}
				alt={icon.alt}
				key={index}
				whileHover={{ scale: 1.2 }}
				onHoverStart={() => {
					setHovered(true), setLabel(icon.alt);
				}}
				onHoverEnd={() => setHovered(false)}
			/>
		);
	});

	return (
		<div className={`${GridItemCSS.content_padding}`} ref={skillsWindowRef}>
			<h2>/skills</h2>
			{isHovered && (
				<h2
					className={SkillsCSS.label}
					style={{ top: labelPosition.y, left: labelPosition.x }}
				>
					<GlitchText label={label} />
				</h2>
			)}
			<p>You know em, you love em...</p>
			<motion.div className={SkillsCSS.grid_container}>
				<div className={`${SkillsCSS.row} ${SkillsCSS.top_row}`}>
					{icons[0]}
					{icons[1]}
					{icons[2]}
				</div>
				<div className={`${SkillsCSS.row} ${SkillsCSS.bottom_row}`}>
					{icons[3]}
					{icons[4]}
				</div>
				<div className={`${SkillsCSS.row} ${SkillsCSS.top_row}`}>
					{icons[5]}
					{icons[6]}
					{icons[7]}
				</div>
				<div className={`${SkillsCSS.row} ${SkillsCSS.bottom_row}`}>
					{icons[8]}
					{icons[9]}
				</div>
			</motion.div>
		</div>
	);
}

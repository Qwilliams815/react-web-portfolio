import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCSS from "./ProjectCard.module.css";

export default function ProjectCard(props) {
	const [isHovered, setHovered] = useState(false);
	const { title, desc, project_img, repo_url, demo_url, isOpen } = props;

	return (
		<motion.div
			className={ProjectCSS.card_container}
			onHoverStart={() => setHovered(true)}
			onHoverEnd={() => setHovered(false)}
		>
			<div className={ProjectCSS.card_thumbnail}>
				<motion.img
					src={project_img}
					alt={title}
					animate={{ y: isHovered ? -10 : 0, x: isHovered ? 10 : 0 }}
				/>
			</div>
			<div className={ProjectCSS.card_content}>
				<motion.div
					className={ProjectCSS.title_container}
					animate={{ y: isHovered ? -10 : 0 }}
				>
					<h1>/{title}</h1>
				</motion.div>
				<div className={ProjectCSS.desc_wrapper}>
					<p>{desc}</p>
				</div>
				<div className={ProjectCSS.button_container}>
					<motion.button
						tabIndex={isOpen ? "0" : "-1"}
						whileHover={{ y: -5 }}
						onClick={() => window.open(repo_url)}
					>
						<p>Code_</p>
						<div className={ProjectCSS.corner}></div>
					</motion.button>
					<motion.button
						tabIndex={isOpen ? "0" : "-1"}
						whileHover={{ y: -5 }}
						onClick={() => window.open(demo_url)}
					>
						<p>Demo_</p>
						<div className={ProjectCSS.corner}></div>
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
}

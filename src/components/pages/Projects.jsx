import React from "react";
import GridItemCSS from "../GridItem.module.css";
import ProjectCard from "../ProjectCard";
import ProjectCardCSS from "../ProjectCard.module.css";

import ChromeExtImg from "/src/assets/images/chrome_extension.png";
import BootToolImg from "/src/assets/images/boot_tool.png";
import ScoreKeeperImg from "/src/assets/images/score_keeper.png";

export default function Projects(props) {
	const { isOpen } = props;
	const projects = [
		{
			title: "Chrome Extension",
			desc:
				"A Chrome extension compilation of 6 togglable popup widgets, each with their own unique ability to read/manipulate the current webpage DOM. ",
			project_img: ChromeExtImg,
			repo_url: "https://github.com/Qwilliams815/WebAccessibilityChromeExt",
			demo_url: "https://www.youtube.com/watch?v=PoLH6ATrkCc",
			tags: ["chrome", "extension"],
		},
		{
			title: ".exe Boot Tool",
			desc:
				'GUI window allowing you to save and load multiple .exe files to custom profiles. For example; loading Discord, OBS, and Steam might be saved to a "Gaming" profile.',
			project_img: BootToolImg,
			repo_url: "https://github.com/Qwilliams815/PyQt5-Gui-Tool",
			demo_url: "https://youtu.be/AOWQlXB-Dk8",
		},
		{
			title: "JavaScript PWA",
			desc:
				"Simple score keeping webapp featuring name, settings, and color customization.",
			project_img: ScoreKeeperImg,
			repo_url: "https://github.com/Qwilliams815/score_keeper",
			demo_url: "https://qwilliams815.github.io/score_keeper/?",
		},
	];
	return (
		<>
			<div className={`${GridItemCSS.content_padding}`}>
				<h2>/projects</h2>
				<p>My bread and/or butter.</p>

				{projects.map((project, index) => {
					return (
						<ProjectCard
							title={project.title}
							desc={project.desc}
							project_img={project.project_img}
							repo_url={project.repo_url}
							demo_url={project.demo_url}
							isOpen={isOpen}
							key={index}
						/>
					);
				})}

				<div className={ProjectCardCSS.spacer}></div>
			</div>
		</>
	);
}

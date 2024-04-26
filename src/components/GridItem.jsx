import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import GridItemCSS from "./GridItem.module.css";
import closeX from "../assets/icons/close_x.png";

// DESC: Buidling block component for the varaious Dashboard pages.
export default function GridItem(props) {
	const { className, children, fadeInDelay, xStart, yStart } = props;
	const [tilt, setTilt] = useState(null);
	const [expanded, setExpanded] = useState(false);
	const tilts = [1, -1];

	// Used to enable and disable hover effects when a grid item is expanded.
	const expandedHover = { scale: 1, rotate: 0 };
	const minHover = { scale: 0.95, rotate: tilt };

	const gridItemRef = useRef(null);

	const handleHoverStart = () => {
		let tiltDecider = Math.floor(Math.random() * 2);
		setTilt(tilts[tiltDecider]);
	};

	const handleOnClickOpen = () => {
		if (!gridItemRef.current) return;

		if (props.expandable) {
			setExpanded(true);
			gridItemRef.current.classList.add(GridItemCSS.expand);

			window.addEventListener("click", (e) => {
				if (e.target != gridItemRef.current) {
				}
			});
		}
	};

	const handleOnClickClose = () => {
		if (!gridItemRef.current) return;

		gridItemRef.current.classList.remove(GridItemCSS.expand);
		setExpanded(false);
		gridItemRef.current.style = { rotate: 0 };
		gridItemRef.current.scrollTop = 0;
	};

	return (
		<>
			{/* Blurs background when a grid item is expanded. */}
			{expanded && (
				<motion.div
					className={GridItemCSS.blur_wrapper}
					onClick={handleOnClickClose}
					animate={{ backdropFilter: "blur(.5px)" }}
				></motion.div>
			)}

			<motion.div
				className={`${GridItemCSS.grid_item} ${className}`}
				ref={gridItemRef}
				onHoverStart={handleHoverStart}
				whileHover={expanded ? expandedHover : minHover}
				whileTap={{ scale: 0.9 }}
				onClick={handleOnClickOpen}
				initial={{ opacity: 0, x: xStart, y: yStart, filter: "blur(1.3px)" }}
				animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
				transition={{
					scale: { type: "spring" },
					opacity: { duration: 1.3, delay: fadeInDelay },
					filter: { duration: 1.3, delay: fadeInDelay },
					x: { duration: 1.3, delay: fadeInDelay },
					y: { duration: 1.3, delay: fadeInDelay },
				}}
				isOpen={expanded}
			>
				{/* Renders a closing "X" icon when a grid item is expanded. */}
				{expanded && (
					<motion.img
						src={closeX}
						alt="close"
						className={GridItemCSS.close_x}
						whileHover={{ scale: 1.2 }}
						onMouseUp={handleOnClickClose}
					/>
				)}
				{!expanded && <div className={GridItemCSS.fade_wrapper}></div>}
				{children}
			</motion.div>
		</>
	);
}

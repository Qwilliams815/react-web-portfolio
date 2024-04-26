import React from "react";
import WidgetCSS from "./Widgets.module.css";
import { motion } from "framer-motion";

// DESC: Ball that perpetually follows along an SVG path
export default function WidgetTrack() {
	const transition = {
		duration: 4,
		repeat: Infinity,
		repeatType: "reverse",
		ease: "easeInOut",
		repeatDelay: 5,
	};

	return (
		<div className={WidgetCSS.track_container}>
			<svg
				width="320"
				height="230"
				viewBox="0 0 320 230"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* Outer stroke of the motion track */}
				<path
					d="M37 38L243.921 37.1589C265.478 37.0712 283 54.5221 283 76.0793V76.0793C283 97.5746 265.575 115 244.079 115H76C54.4609 115 37 132.461 37 154V154C37 175.539 54.4609 193 76 193H283"
					stroke="#A3A3A3"
					strokeWidth="73"
					strokeLinecap="round"
					className={WidgetCSS.outer_line}
				/>
				{/* Same SVG as the motion track below, just static and not drawn on */}
				<path
					d="M37 38L243.921 37.1589C265.478 37.0712 283 54.5221 283 76.0793V76.0793C283 97.5746 265.575 115 244.079 115H76C54.4609 115 37 132.461 37 154V154C37 175.539 54.4609 193 76 193H283"
					strokeLinecap="round"
					strokeWidth="4"
					className={WidgetCSS.inner_line}
				/>
				{/* Motion Track for ball*/}
				<motion.path
					d="M37 38L243.921 37.1589C265.478 37.0712 283 54.5221 283 76.0793V76.0793C283 97.5746 265.575 115 244.079 115H76C54.4609 115 37 132.461 37 154V154C37 175.539 54.4609 193 76 193H283"
					fill={"none"}
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={transition}
				/>
			</svg>
			{/* Ball */}
			<motion.div
				className={WidgetCSS.ball}
				initial={{ offsetDistance: "0%", scale: 1 }}
				animate={{ offsetDistance: "100%", scale: 1 }}
				transition={transition}
			/>
		</div>
	);
}

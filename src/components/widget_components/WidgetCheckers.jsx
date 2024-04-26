import React from "react";
import WidgetCSS from "./Widgets.module.css";
import { motion } from "framer-motion";

// DESC: Checkerboard pattern that perpetually fade wipes in and out
export default function WidgetCheckers() {
	const checkers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
		23,
	];

	const container = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		visible: { opacity: [1, 0, 1] },
	};

	// Alternate effect
	// const item = {
	// 	hidden: { scale: 1.1 },
	// 	visible: { scale: [1, 1.1, 1] },
	// };

	const transition = {
		type: "linear",
		duration: 1,
		repeat: Infinity,
		repeatDelay: 6,
	};

	return (
		<motion.div
			className={WidgetCSS.checkers_container}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			{checkers.map((checker, i) => (
				<motion.div
					key={i}
					className={WidgetCSS.checker}
					whileHover={{ opacity: 0.5 }}
					variants={item}
					transition={transition}
				></motion.div>
			))}
		</motion.div>
	);
}

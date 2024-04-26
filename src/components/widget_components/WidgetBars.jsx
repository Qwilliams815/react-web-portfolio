import { motion } from "framer-motion";
import WidgetCSS from "./Widgets.module.css";

// DESC: 3 horizontal bars that perpetually grow and shrink in staggered fashion
export default function WidgetBars() {
	const container = {
		min: {},
		max: {
			transition: {
				staggerChildren: 0.85,
				staggerDirection: -1,
			},
		},
	};

	const item = {
		min: { width: "20%" },
		max: { width: "100%" },
	};

	const transition = {
		type: "linear",
		duration: 4,
		repeat: Infinity,
		repeatType: "reverse",
	};

	return (
		<motion.div
			className={WidgetCSS.bars_container}
			variants={container}
			initial="min"
			animate="max"
		>
			<motion.div className={WidgetCSS.bar} variants={item} transition={transition} />
			<motion.div className={WidgetCSS.bar} variants={item} transition={transition} />
			<motion.div className={WidgetCSS.bar} variants={item} transition={transition} />
		</motion.div>
	);
}

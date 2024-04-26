import React, { useState, useEffect } from "react";
import GridCSS from "./Grid.module.css";
import { motion } from "framer-motion";
import WidgetBars from "./widget_components/WidgetBars";
import WidgetCheckers from "./widget_components/WidgetCheckers";
import WidgetDonut from "./widget_components/WidgetDonut";
import WidgetSwitch from "./widget_components/WidgetTrack";

// DESC: Renders a grid of tiles based on the current window size.
export default function Grid() {
	const [columns, setColumns] = useState(0);
	const [rows, setRows] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const size = window.innerWidth > 800 ? 100 : 50;
			const newColumns = Math.floor(window.innerWidth / size);
			const newRows = Math.floor(window.innerHeight / size);
			setColumns(newColumns);
			setRows(newRows);
		};

		// Call handleResize on initial load and whenever the window is resized
		handleResize();
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const createTile = (index) => {
		return <div key={index} className={GridCSS.tile}></div>;
	};

	const createTiles = () => {
		const quantity = columns * rows;
		return Array.from({ length: quantity }).map((_, index) => createTile(index));
	};

	return (
		<motion.div
			className={GridCSS.wrapper}
			initial={{ filter: "blur(5px)" }}
			animate={{ filter: "blur(0px)" }}
			transition={{ duration: 2.5 }}
		>
			<div className={`${GridCSS.left_widget_container} ${GridCSS.widget_container}`}>
				<WidgetBars />
				<WidgetSwitch />
			</div>
			<div className={GridCSS.top_chevron}></div>
			<div
				className={`${GridCSS.right_widget_container} ${GridCSS.widget_container}`}
			>
				<WidgetDonut />
				<WidgetCheckers />
			</div>
			{/* Dynamically pass column and row JS values to CSS */}
			<div className={GridCSS.tiles} style={{ "--columns": columns, "--rows": rows }}>
				{createTiles()}
			</div>
		</motion.div>
	);
}

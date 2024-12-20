import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import GridItemCSS from "./GridItem.module.css";
import closeX from "../assets/icons/close_x.png";

// DESC: Buidling block component for the varaious Dashboard pages.
export default function GridItem(props) {
	const { className, title, children, expandable, page, fadeInDelay } = props;
	const [tilt, setTilt] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const tilts = [1, -1];
	const [isHovered, setHovered] = useState(false);
	const [delay, setDelay] = useState(fadeInDelay);
	const [type, setType] = useState(null);
	const gridItemRef = useRef(null);
	const modalRef = useRef(null);
	const mobileScreenSize = window.matchMedia("(max-width: 400px)");

	// Framer Motion Settings
	const variants = {
		initial: {
			opacity: 0,
			scale: 1.1,
			filter: "blur(0px)",
		},
		animate: {
			opacity: 1,
			scale: 1,
			filter: "blur(0px)",
			transition: {
				scale: { type: type, delay: delay }, // optional type: "spring"
				opacity: { duration: 0.6, delay: delay },
			},
		},
		hovering: {
			scale: 0.95,
			rotate: tilt,
			transition: { type: "spring" },
			transitionEnd: { scale: 0 },
		},
	};

	const resetDelay = (e) => {
		setDelay(0);
		setType("spring");
		return;
	};

	const handleHoverStart = () => {
		let tiltDecider = Math.floor(Math.random() * 2);
		setTilt(tilts[tiltDecider]);
		setHovered(true);
	};

	const launchModal = () => {
		if (!modalRef.current) return;
		window.scrollTo(0, 0);

		if (props.expandable) {
			// setExpanded(true);
			setIsModalOpen(true);
			modalRef.current.classList.add(GridItemCSS.show_modal);
		}
	};

	const closeModal = () => {
		if (!gridItemRef.current) return;
		modalRef.current.classList.remove(GridItemCSS.show_modal);
		setIsModalOpen(false);
	};

	return (
		<>
			{/* MODAL */}
			<motion.div
				className={GridItemCSS.modal_wrapper}
				ref={modalRef}
				onClick={() => closeModal()}
				initial={{ backdropFilter: "blur(0px)" }}
				animate={isModalOpen ? { backdropFilter: "blur(2.3px)" } : {}}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<motion.div
					className={GridItemCSS.modal}
					initial={{ display: "none", scale: 0.9 }}
					animate={isModalOpen ? { display: "block", scale: 1 } : {}}
					transition={{ duration: 0.35, type: "spring", stiffness: 100 }}
					onClick={(e) => e.stopPropagation()}
				>
					<motion.img
						src={closeX}
						alt="close"
						className={GridItemCSS.close_x}
						whileHover={{ scale: 1.2 }}
						onMouseUp={closeModal}
					/>
					{page}
					{mobileScreenSize.matches && (
						<div className={GridItemCSS.mobile_modal_footer}></div>
					)}
				</motion.div>
			</motion.div>

			{/* GRID ITEM CARD */}
			<motion.div
				className={`${GridItemCSS.grid_item} ${className}`}
				ref={gridItemRef}
				onClick={() => launchModal(page)}
				onHoverStart={handleHoverStart}
				variants={variants}
				whileHover={{
					scale: 0.95,
					rotate: tilt,
					transition: { type: "spring", delay: 0 },
				}}
				whileTap={{ scale: 0.9 }}
				onHoverEnd={() => setHovered(false)}
				initial={"initial"}
				animate={"animate"}
				onAnimationComplete={(e) => resetDelay(e)}
			>
				{(expandable || mobileScreenSize.matches) && (
					<div className={GridItemCSS.title_container}>
						<span>
							<h2 className={GridItemCSS.title}>{title}</h2>
						</span>
					</div>
				)}
				<motion.div
					className={GridItemCSS.background}
					initial={{ top: "110%" }}
					animate={{ top: isHovered ? 0 : "110%" }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
				></motion.div>
				<div className={GridItemCSS.icon_container}>{children}</div>
			</motion.div>
		</>
	);
}

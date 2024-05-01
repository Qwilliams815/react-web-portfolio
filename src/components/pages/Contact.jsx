import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ContactCSS from "../pages/Contact.module.css";
import ContactForm from "../ContactForm";

export default function Contact() {
	const [open, setOpen] = useState(false);
	const btnRef = useRef(null);

	const handleClose = () => {
		setOpen(!open);
		btnRef.current.classList.add(ContactCSS.disable);
		// This is to disable the hover effect animation on the contact button while the expanding animation is happening
		setTimeout(() => {
			btnRef.current.classList.remove(ContactCSS.disable);
		}, 700);
	};

	return (
		<motion.div
			className={`${ContactCSS.wrapper}`}
			transition={{ type: "spring", stiffness: 40, duration: 0.5 }}
			initial={{ y: "103%" }}
			animate={{
				y: open ? "-15px" : "103%",
			}}
			whileHover={open ? "" : { y: "101%" }}
			ref={btnRef}
		>
			<motion.div
				className={ContactCSS.container}
				initial={{ y: 100 }}
				animate={{ y: 0 }}
				transition={{ delay: 4.2, duration: 1.3, type: "spring" }}
			>
				{open && (
					<div className={ContactCSS.close_wrapper} onClick={() => setOpen(false)}></div>
				)}
				<motion.div className={ContactCSS.contact_button} onClick={handleClose}>
					<h1 className={ContactCSS.btn_label}>contact</h1>
					<svg
						width="430"
						height="135"
						viewBox="0 0 399 130"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className={ContactCSS.svg_path}
							d="M396.097 119.808C397.552 124.918 393.715 130 388.403 130L18.0516 130C12.6049 130 8.75066 124.675 10.4519 119.501L47.9341 5.50127C49.0134 2.21865 52.0784 -2.88113e-07 55.5339 1.39761e-08L355.932 2.62756e-05C359.506 2.65881e-05 362.647 2.37098 363.626 5.80851L396.097 119.808Z"
							fill="#DC0000"
						/>
						<path
							className={ContactCSS.svg_path}
							d="M2.9029 119.808C1.44765 124.918 5.28455 130 10.5969 130L380.948 130C386.395 130 390.249 124.675 388.548 119.501L351.066 5.50126C349.987 2.21864 346.922 3.62597e-06 343.466 3.32388e-06L43.0681 -2.29377e-05C39.4938 -2.32502e-05 36.3533 2.37093 35.3741 5.80846L2.9029 119.808Z"
							fill="#DC0000"
						/>
					</svg>
				</motion.div>
				<div className={ContactCSS.contact_form_wrapper}>
					<div className={ContactCSS.number_decal} aria-hidden="true">
						97
					</div>
					<ContactForm isOpen={open} handleClose={handleClose} />
				</div>
			</motion.div>
		</motion.div>
	);
}

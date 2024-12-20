import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactFormCSS from "./ContactForm.module.css";
import { motion } from "framer-motion";

export default function ContactForm(props) {
	const { isOpen, handleClose } = props;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [stateMessage, setStateMessage] = useState(null);
	const service_id = "service_wyvgl0k";
	const template_id = "template_qwif7gl";
	const public_id = "ftTJ5P8SQcxLzTM68";

	const sendEmail = (e) => {
		e.persist();
		e.preventDefault();
		setIsSubmitting(true);
		if (e.target[2].value) {
			handleClose();
			return;
		}
		emailjs.sendForm(service_id, template_id, e.target, public_id).then(
			(result) => {
				setStateMessage("SUCCESS: TTYS");
				setIsSubmitting(false);
				setTimeout(() => {
					setStateMessage(null);
					handleClose();
				}, 3000); // hide message after 3 seconds
			},
			(error) => {
				setStateMessage("ERROR: FIXING ASAP");
				setIsSubmitting(false);
				setTimeout(() => {
					setStateMessage(null);
					handleClose();
				}, 3000); // hide message after 3 seconds
			}
		);
		e.target.reset();
	};

	// Clears the form after sending the email
	return (
		<form onSubmit={sendEmail} className={ContactFormCSS.form}>
			<motion.input
				type="text"
				name="user_name"
				placeholder="/name"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--static-black)", x: 7, y: -7 }}
				transition={{ type: "easeOut", duration: 0.2, stiffness: 100 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<motion.input
				type="email"
				name="user_email"
				placeholder="/email"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--static-black)", x: 7, y: -7 }}
				transition={{ type: "easeOut", duration: 0.2, stiffness: 100 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<input
				className={ContactFormCSS.input_honeypot}
				placeholder="/company"
				type="text"
				name="company"
				tabIndex="-1"
			/>
			<motion.textarea
				name="message"
				placeholder="/message"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--static-black)", x: 7, y: -7 }}
				transition={{ type: "easeOut", duration: 0.2, stiffness: 100 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<div className={ContactFormCSS.footer_wrapper}>
				<motion.input
					type="submit"
					value="SUBMIT"
					disabled={isSubmitting}
					initial={{ boxShadow: "0 10px 5px rgba(0, 0, 0, 0.2)" }}
					whileHover={{ y: -5, boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)" }}
					tabIndex={isOpen ? "0" : "-1"}
				/>
				{stateMessage && (
					<h2 className={ContactFormCSS.state_message}>{stateMessage}</h2>
				)}
			</div>
		</form>
	);
}

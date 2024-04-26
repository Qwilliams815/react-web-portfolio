import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactFormCSS from "./ContactForm.module.css";
import { motion } from "framer-motion";

export default function ContactForm(props) {
	const { isOpen } = props;
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [stateMessage, setStateMessage] = useState(null);
	const sendEmail = (e) => {
		e.persist();
		e.preventDefault();
		setIsSubmitting(true);
		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					setStateMessage("SUCCESS: TTYS");
					setIsSubmitting(false);
					setTimeout(() => {
						setStateMessage(null);
					}, 5000); // hide message after 5 seconds
				},
				(error) => {
					setStateMessage("ERROR: FIXING ASAP");
					setIsSubmitting(false);
					setTimeout(() => {
						setStateMessage(null);
					}, 5000); // hide message after 5 seconds
				}
			);

		// Clears the form after sending the email
		e.target.reset();
	};
	return (
		<form onSubmit={sendEmail} className={ContactFormCSS.form}>
			<motion.input
				type="text"
				name="user_name"
				placeholder="/name"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--secondary-color)", x: 7, y: -7 }}
				transition={{ type: "spring", duration: 0.1, stiffness: 250 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<motion.input
				type="email"
				name="user_email"
				placeholder="/email"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--secondary-color)", x: 7, y: -7 }}
				transition={{ type: "spring", duration: 0.1, stiffness: 250 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<motion.textarea
				name="message"
				placeholder="/message"
				required
				whileFocus={{ boxShadow: "-7px 7px var(--secondary-color)", x: 7, y: -7 }}
				transition={{ type: "spring", duration: 0.1, stiffness: 250 }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			<motion.input
				type="submit"
				value="submit"
				disabled={isSubmitting}
				initial={{ boxShadow: "0 10px 5px rgba(0, 0, 0, 0.2)" }}
				whileHover={{ y: -5, boxShadow: "0 15px 20px rgba(0, 0, 0, 0.2)" }}
				tabIndex={isOpen ? "0" : "-1"}
			/>
			{stateMessage && <p>{stateMessage}</p>}
		</form>
	);
}

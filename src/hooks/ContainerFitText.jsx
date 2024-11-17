import { useEffect } from "react";

const ContainerFitText = (textRef, containerRef) => {
	useEffect(() => {
		// This is to hide annoying font pop-in
		// textRef.current.style.opacity = 0;
		// setTimeout(() => {
		// 	resizeText();
		// 	// textRef.current.style.opacity = 1;
		// }, 1400);
		// if (!containerRef || !textRef) {
		// }

		resizeText();

		window.addEventListener("resize", resizeText);

		return () => {
			window.removeEventListener("resize", resizeText);
		};
	}, []);

	const resizeText = () => {
		const container = containerRef.current;
		const text = textRef.current;

		if (!container || !text) {
			return;
		}

		const containerWidth = container.offsetWidth;
		let min = 1;
		let max = 5000;

		while (min <= max) {
			const mid = Math.floor((min + max) / 2);
			text.style.fontSize = mid + "px";

			if (text.offsetWidth <= containerWidth) {
				min = mid + 1;
			} else {
				max = mid - 1;
			}
		}
		text.style.fontSize = max + "px";
		console.log(text, max);
	};

	// return "Done";
};

export default ContainerFitText;

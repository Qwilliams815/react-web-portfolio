import { useState, useEffect } from "react";

export default function useResizeText(textRef) {
	const [size, setSize] = useState(null);

	useEffect(() => {
		const handleResize = () => {
			if (textRef.current) {
				const textWidth = textRef.current.offsetWidth;
				let multiplier = 0.37;
				if (window.innerWidth > window.innerHeight) {
					multiplier = 0.43;
				}
				let newSize = textWidth * multiplier;
				setSize(newSize);
			}
		};

		// Call handleResize on initial load and whenever the window is resized
		handleResize();
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return { size };
}

import React, { useEffect, useState } from "react";

export const UseFitTextToContainer = (textRef, containerRef) => {
	const [size, setSize] = useState(null);

	useEffect(() => {
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
		console.log(text.offsetWidth);
		let min = 1;
		let max = 100;

		while (min <= max) {
			const mid = Math.floor((min + max) / 2);
			setSize(mid);

			if (text.offsetWidth <= containerWidth) {
				min = mid + 1;
			} else {
				max = mid - 1;
			}
		}

		// console.log((text.style.fontSize = max + "px"));
		setSize(max);
		// console.log(size)
	};

	// console.log(size);
	// console.log(containerRef.current.offsetWidth);
	return size;
};

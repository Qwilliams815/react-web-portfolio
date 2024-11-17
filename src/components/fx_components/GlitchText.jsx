import { useEffect, useState } from "react";

// DESC: Effect component that takes a string and returns it with a rapid updating scrambled effect
export default function GlitchText({ label }) {
	const [glitchLabel, setGlitchLabel] = useState(label);

	useEffect(() => {
		let interval;
		let iteration = 0;

		const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const originalLabel = label;

		interval = setInterval(() => {
			let word = originalLabel;
			word = word // Split word into array of letters
				.split("")
				.map((letter, index) => {
					// Replace each letter with a random letter
					if (index < iteration) {
						return originalLabel[index]; // If the index is less than the iteration, return the original letter
					}
					return letters[Math.floor(Math.random() * letters.length)]; // Otherwise, return a random letter
				})
				.join(""); // Join the array of letters back into a string

			if (iteration >= originalLabel.length) {
				// If the iteration is greater than or equal to the length of the original label, clear the interval
				clearInterval(interval);
			}

			setGlitchLabel(word); // Lastly, update the state of the glitch label with the new word
			iteration += 1 / 5; // Varies the speed of the glitch effect
		}, 30);

		return () => clearInterval(interval); // Cleanup function to clear the interval when the component unmounts
	}, [label]);
	// console.log(glitchLabel);
	return glitchLabel;
}

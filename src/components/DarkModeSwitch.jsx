import React, { useEffect, useState } from "react";
import DarkModeSwitchCSS from "./DarkModeSwitch.module.css";

const DarkModeSwitch = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

		if (theme === "light") {
			setThemeDark();
		} else {
			setThemeLight();
		}
	};

	const setThemeLight = () => {
		setTheme("light");
		document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	};

	const setThemeDark = () => {
		setTheme("dark");
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	};

	const storedTheme = localStorage.getItem("theme");

	useEffect(() => {
		if (storedTheme) {
			setTheme(storedTheme);
			if (storedTheme === "dark") {
				setThemeDark();
			} else {
				setThemeLight();
			}
		}
	}, []);

	return (
		<div className={DarkModeSwitchCSS.container}>
			<label className={DarkModeSwitchCSS.switch}>
				<input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
				<span className={DarkModeSwitchCSS.slider}>
					<span className={DarkModeSwitchCSS.circle}></span>
				</span>
			</label>
		</div>
	);
};

export default DarkModeSwitch;

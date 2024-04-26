import "./App.css";
import Grid from "./components/Grid";
import Dashboard from "./components/Dashboard";
import Contact from "/src/components/pages/Contact";

function App() {
	return (
		<>
			<div className="border"></div>
			<Contact />
			<Dashboard />
			<Grid />
		</>
	);
}

export default App;

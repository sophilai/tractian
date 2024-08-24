import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CompanyPage from "./pages/CompanyPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className="app-content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/company/:name" element={<CompanyPage />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme/theme.ts";
import { CompaniesProvider } from "./contexts/CompaniesContext";

//Font importation
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import '@fontsource/inter/600.css';

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={theme}>
		<CompaniesProvider>
			<App />
		</CompaniesProvider>
	</ThemeProvider>
);

import "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2188FF",
			dark: "#023B78",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#17192D",
			light: "#D8DFE6",
		},
		common: {
			black: "#24292F",
			white: "#FFFFFF",
		},
		text: {
			primary: "#17192D",
			secondary: "#88929C",
			disabled: "#C1C9D2",
		},
		success: {
			main: "#52C41A",
		},
		error: {
			main: "#ED3833",
		},
	},
	typography: {
		fontFamily: "Roboto, sans-serif",
		h1: {
			fontFamily: "Inter, sans-serif",
			fontWeight: 600,
			fontSize: "20px",
			lineHeight: "28px",
			letterSpacing: "-0.5px",
		},
		subtitle1: {
			fontFamily: "Inter, sans-serif",
			fontWeight: 400,
			fontSize: "14px",
			lineHeight: "20px",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
			variants: [
				{
					props: { variant: "header" },
					style: {
						color: "#FFFFFF",
						backgroundColor: "#023B78",
						border: "none",
						width: "fit-content",
						padding: "5px 8px",
						fontSize: "12px",
						lineHeight: "16px",
						fontFamily: '"Inter", sans-serif',
						"&:hover": {
							backgroundColor: "#0056b3",
						},
						"&.active": {
							backgroundColor: "#2188FF",
						},
					},
				},
				{
					props: { variant: "pageHead" },
					style: {
						color: "#77818C",
						backgroundColor: "#FFFFFF",
						border: "1px solid #D8DFE6",
						borderRadius: "3px",
						padding: "6px 14px",
						"& .MuiButton-icon": {
							marginRight: "6px",
						},
						"&.selected": {
							backgroundColor: "#2188FF",
							color: "#ffffff",
							border: "1px solid #2188FF",
							"& svg path": {
								fill: "#ffffff",
							},
						},
					},
				},
				{
					props: { variant: "bodyInactive" },
					style: {
						color: "#6C757D",
						backgroundColor: "#E9ECEF",
						border: "1px solid #6C757D",
						"&:hover": {
							backgroundColor: "#DEE2E6",
						},
					},
				},
			],
		},
	},
});

export default theme;

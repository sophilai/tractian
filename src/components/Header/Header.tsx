import { memo } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	useTheme,
	Button,
	Box,
} from "@mui/material";
import { useCompanies } from "../../contexts/CompaniesContext";
import { useLocation } from "react-router-dom";

const Header = memo(() => {
	const theme = useTheme();
	const { companies } = useCompanies();
	const location = useLocation();

	const getBackgroundColor = (companyName: string) => 
		location.pathname === `/company/${companyName}` ? "#2188FF" : "#023B78";

	return (
		<AppBar
			sx={{ padding: "12px 16px", bgcolor: theme.palette.secondary.main }}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					minHeight: "unset!important",
				}}
			>
				<IconButton aria-label="logo" sx={{ width: "fit-content" }}>
					<img src="/assets/logo.svg" alt="Logo" />
				</IconButton>
				<Box sx={{ display: "flex", gap: "10px" }}>
					{companies.map((company) => (
						<Button
							key={company.id}
							variant="header"
							startIcon={<img src="/assets/gold.svg" alt="icon" />}
							href={`/company/${company.name}`}
							sx={{ backgroundColor: getBackgroundColor(company.name) }}
						>
							{company.name} Unit
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
});

export default Header;

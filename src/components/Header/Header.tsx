import { memo, useCallback } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	useTheme,
	Button,
	Box,
} from "@mui/material";
import { useCompanies } from "../../contexts/CompaniesContext";
import { Company } from "../../types/company";
import { Link } from 'react-router-dom';

const Header = memo(() => {
	const theme = useTheme();
	const { companies, setSelectedCompany, selectedCompany } = useCompanies();

	const handleCompanyClick = (company: Company) => {
		console.log('Selecting company:', company);
        setSelectedCompany(company);
    };

	const getBackgroundColor = (companyName: string) =>
		selectedCompany && selectedCompany.name === companyName
		  ? "#2188FF"
		  : "#023B78";
	;

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
							to={`/company/${company.name}`}
							sx={{ backgroundColor: getBackgroundColor(company.name) }}
							onClick={() => handleCompanyClick(company)}
							component={Link}
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

import {
	AppBar,
	Toolbar,
	IconButton,
	useTheme,
	Button,
	Container,
	Box,
} from "@mui/material";
import { useCompanies } from "../../contexts/CompaniesContext.tsx";

const Header = () => {
	const theme = useTheme();
	const { companies } = useCompanies();
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
						>
							{company.name} Unit
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCompanies } from "../contexts/CompaniesContext";

const HomePage = () => {
	const { companies, isLoading, error } = useCompanies();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!isLoading && companies.length > 0) {
			navigate(`/company/${companies[0].name}`);
		}
	}, [companies, isLoading, navigate]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return <div></div>;
};

export default HomePage;

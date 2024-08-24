import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import axios from "axios";

interface Company {
	id: string;
	name: string;
}

interface CompaniesContextType {
	companies: Company[];
	isLoading: boolean;
	error: string | null;
}

const CompaniesContext = createContext<CompaniesContextType>({
	companies: [],
	isLoading: true,
	error: null,
});

interface CompaniesProviderProps {
	children: ReactNode;
}

export const CompaniesProvider: React.FC<CompaniesProviderProps> = ({
	children,
}) => {
	const [companies, setCompanies] = useState<Company[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCompanies = async () => {
			try {
				const response = await axios.get(
					"https://fake-api.tractian.com/companies"
				);
				setCompanies(response.data);
			} catch (err) {
				setError("Failed to fetch companies");
			} finally {
				setIsLoading(false);
			}
		};

		fetchCompanies();
	}, []);

	return (
		<CompaniesContext.Provider value={{ companies, isLoading, error }}>
			{children}
		</CompaniesContext.Provider>
	);
};

export const useCompanies = () => useContext(CompaniesContext);

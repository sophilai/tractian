import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
	useMemo
} from "react";
import { fetchCompanies } from "../features/api/fetchCompanies";
import { Company } from "../types/company";

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
		const fetchData = async () => {
			try {
				const data = await fetchCompanies(); 
				setCompanies(data);
			} catch (err) {
				setError("Failed to fetch companies");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const value = useMemo(() => ({
        companies,
        isLoading,
        error,
    }), [companies, isLoading, error]);

	return (
		<CompaniesContext.Provider value={value}>
			{children}
		</CompaniesContext.Provider>
	);
};

export const useCompanies = () => useContext(CompaniesContext);

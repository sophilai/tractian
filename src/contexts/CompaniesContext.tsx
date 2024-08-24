import React, {
	createContext,
	useEffect,
	useState,
	ReactNode,
	useMemo,
	useContext,
} from "react";
import { fetchCompanies } from "../features/api/fetchCompanies";
import { Company } from "../types/company";

interface CompaniesContextType {
	companies: Company[];
	isLoading: boolean;
	error: string | null;
	selectedCompany: Company | null;
    setSelectedCompany: (company: Company) => void;
}

const CompaniesContext = createContext<CompaniesContextType>({
    companies: [],
    selectedCompany: null,
    setSelectedCompany: () => {},
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
	const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchCompanies();
				setCompanies(data);
				setSelectedCompany(data[0]);
			} catch (err) {
				setError("Failed to fetch companies");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	const value = useMemo(
        () => ({
            companies,
            selectedCompany,
            setSelectedCompany,
            isLoading,
            error,
        }),
        [companies, selectedCompany, isLoading, error]
    );
	return (
		<CompaniesContext.Provider value={value}>
			{children}
		</CompaniesContext.Provider>
	);
};

export const useCompanies = () => {
	const context = useContext(CompaniesContext);

	if (context === undefined) {
		throw new Error("useCompanies must be used within a CompaniesProvider");
	}

	return context;
};

export { CompaniesContext };

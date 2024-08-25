import PageHead from "../PageHead/PageHead.tsx";
import { Box } from "@mui/material";
import RenderTree from "../Tree/RenderTree.tsx";

const PageWrapper = () => {
	return (
		<Box sx={{ padding: "16px" }}>
			<PageHead></PageHead>
			<RenderTree></RenderTree>
		</Box>
	);
};

export default PageWrapper;

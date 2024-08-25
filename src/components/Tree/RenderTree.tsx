import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { TreeViewBaseItem } from "@mui/x-tree-view/models";
import { Box } from "@mui/material";
import Item from "./Item.jsx";

const RenderTree = () => {
	type Assets = TreeViewBaseItem<{
		internalId: string;
		label: string;
		type: "location" | "component" | "asset";
	}>;

	const ASSETS: Assets[] = [
		{
			internalId: "656a07b3f2d4a1001e2144bf",
			label: "PRODUCTION AREA - RAW MATERIAL",
			type: "location",
			children: [
				{
					internalId: "tc01",
					label: "MOTOR TC01 COAL UNLOADING AF02",
					type: "asset",
				},
				{ internalId: "item2", label: "item 2", type: "asset" },
				{ internalId: "item4", label: "item 4", type: "asset" },
			],
		},
	];

	const getItemId = (item: Assets) => item.internalId;

	return (
		<>
			<Item />
			<RichTreeView items={ASSETS} getItemId={getItemId} />
		</>
	);
};

export default RenderTree;

export type LayoutBlock =
	| { type: "hero"; id: string }
	| { type: "two-column"; id: string }
	| { type: "image-grid"; id: string };

export type LayoutConfig = LayoutBlock[];

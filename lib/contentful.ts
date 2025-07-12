// src/lib/contentful.ts
import { GraphQLClient } from "graphql-request";

const CONTENTFUL_GRAPHQL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

export const contentfulClient = new GraphQLClient(CONTENTFUL_GRAPHQL_ENDPOINT, {
	headers: {
		Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	},
});

export interface ContentfulAsset {
	sys: {
		id: string;
	};
	url: string;
	title: string;
	width: number;
	height: number;
	contentType: string;
}

export interface LayoutConfig {
	id: string;
	type: "hero" | "twoColumn" | "imageGrid";
	data: unknown;
}

export interface LandingPage {
	sys: {
		id: string;
	};
	slug: string;
	title: string;
	description: string;
	layoutConfig: LayoutConfig[];
	seoTitle?: string;
	seoDescription?: string;
	ogImage?: ContentfulAsset;
}

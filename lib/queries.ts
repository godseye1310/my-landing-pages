// src/lib/graphql/queries.ts
import { gql } from "graphql-request";

export const GET_LANDING_PAGE = gql`
	query GetLandingPage($slug: String!) {
		landingPageCollection(where: { slug: $slug }, limit: 1) {
			items {
				sys {
					id
				}
				slug
				title
				description
				layoutConfig
				seoTitle
				seoDescription
				ogImage {
					sys {
						id
					}
					url
					title
					width
					height
					contentType
				}
				heroBlocksCollection {
					items {
						sys {
							id
						}
						heading
						subtitle
						ctaText
						ctaUrl
						backgroundImage {
							sys {
								id
							}
							url
							title
							width
							height
						}
					}
				}
				twoColumnRowsCollection {
					items {
						sys {
							id
						}
						leftHeading
						leftSubtitle
						leftCtaText
						leftCtaUrl
						rightImage {
							sys {
								id
							}
							url
							title
							width
							height
						}
					}
				}
				imageGridsCollection {
					items {
						sys {
							id
						}
						imagesCollection {
							items {
								sys {
									id
								}
								url
								title
								width
								height
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_ALL_LANDING_PAGES = gql`
	query GetAllLandingPages {
		landingPageCollection {
			items {
				slug
				title
				description
				layoutConfig
				seoTitle
				seoDescription
			}
		}
	}
`;

export const GET_HERO_BLOCK = gql`
	query GetHeroBlock($id: String!) {
		heroBlock(id: $id) {
			sys {
				id
			}
			heading
			subtitle
			ctaText
			ctaUrl
			backgroundImage {
				sys {
					id
				}
				url
				title
				width
				height
			}
		}
	}
`;

export const GET_TWO_COLUMN_ROW = gql`
	query GetTwoColumnRow($id: String!) {
		twoColumnRow(id: $id) {
			sys {
				id
			}
			leftHeading
			leftSubtitle
			leftCtaText
			leftCtaUrl
			rightImage {
				sys {
					id
				}
				url
				title
				width
				height
			}
		}
	}
`;

export const GET_IMAGE_GRID = gql`
	query GetImageGrid($id: String!) {
		imageGrid(id: $id) {
			sys {
				id
			}
			imagesCollection {
				items {
					sys {
						id
					}
					url
					title
					width
					height
				}
			}
		}
	}
`;

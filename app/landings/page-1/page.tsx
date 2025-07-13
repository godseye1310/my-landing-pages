import HeroBlock from "@/components/HeroBlock";
import ImageGrid from "@/components/ImageGrid";
import TwoColumnRow from "@/components/TwoColumnRow";
import { contentfulClient } from "@/lib/contentful";
import { GET_LANDING_PAGE } from "@/lib/queries";
import { LayoutConfig } from "@/types/layout";
// import { HeroBlock, TwoColumnBlock, ImageGridBlock } from "";

export async function generateMetadata() {
	return {
		title: "Landing Page 1",
		description: "Auto-generated landing page using layout config.",
	};
}

async function getLayout(): Promise<LayoutConfig> {
	const data = await contentfulClient.request(GET_LANDING_PAGE, {
		slug: "page-1",
	});
	return data.landingPageCollection.items[0]?.layoutConfig || [];
}

export default async function Page() {
	const layout = await getLayout();

	return (
		<main>
			{layout.map((block, index) => {
				switch (block.type) {
					case "hero":
						return <HeroBlock key={index} />;
					case "two-column":
						return <TwoColumnRow key={index} />;
					case "image-grid":
						return <ImageGrid key={index} />;
					default:
						return null;
				}
			})}
		</main>
	);
}

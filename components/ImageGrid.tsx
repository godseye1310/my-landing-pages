import Image from "next/image";
import styles from "./ImageGrid.module.css";

interface ImageGridProps {
	images: Array<{
		url: string;
		title: string;
		width: number;
		height: number;
	}>;
}
const ImageGrid = ({ images }: ImageGridProps) => {
	// Ensure we have exactly 4 images for the 2x2 grid
	const gridImages = images.slice(0, 4);

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.grid}>
					{gridImages.map((image, index) => (
						<div key={index} className={styles.imageContainer}>
							<Image
								src={image.url}
								alt={image.title}
								width={image.width}
								height={image.height}
								className={styles.image}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ImageGrid;

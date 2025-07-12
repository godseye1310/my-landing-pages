import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBlock.module.css";

interface HeroBlockProps {
	heading: string;
	subtitle: string;
	ctaText: string;
	ctaUrl: string;
	backgroundImage: {
		url: string;
		title: string;
		width: number;
		height: number;
	};
}

const HeroBlock = ({
	heading,
	subtitle,
	ctaText,
	ctaUrl,
	backgroundImage,
}: HeroBlockProps) => {
	//

	return (
		<section className={styles.hero}>
			<div className={styles.backgroundImage}>
				<Image
					src={backgroundImage.url}
					alt={backgroundImage.title}
					width={backgroundImage.width}
					height={backgroundImage.height}
					priority
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.container}>
					<h1 className={styles.heading}>{heading}</h1>
					<p className={styles.subtitle}>{subtitle}</p>
					<Link href={ctaUrl} className={styles.cta}>
						{ctaText}
					</Link>
				</div>
			</div>
		</section>
	);
};
export default HeroBlock;

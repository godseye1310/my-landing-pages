import Image from "next/image";
import Link from "next/link";
import styles from "./TwoColumnRow.module.css";

interface TwoColumnRowProps {
	leftHeading: string;
	leftSubtitle: string;
	leftCtaText: string;
	leftCtaUrl: string;
	rightImage: {
		url: string;
		title: string;
		width: number;
		height: number;
	};
}

const TwoColumnRow = ({
	leftHeading,
	leftSubtitle,
	leftCtaText,
	leftCtaUrl,
	rightImage,
}: TwoColumnRowProps) => {
	//

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.heading}>{leftHeading}</h2>
					<p className={styles.subtitle}>{leftSubtitle}</p>
					<Link href={leftCtaUrl} className={styles.cta}>
						{leftCtaText}
					</Link>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={rightImage.url}
						alt={rightImage.title}
						width={rightImage.width}
						height={rightImage.height}
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	);
};

export default TwoColumnRow;

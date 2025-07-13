import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
	//

	return (
		<main className={styles.page}>
			<h1>MAIN PAGE</h1>

			<div className={styles.container}>
				<h1 className="">Landing Page Previewer</h1>
				<p>
					Preview the beautiful landing pages build with Contentful
					and Next.js
				</p>
				<div className="">
					<Link
						href="/landing/page-1"
						className={`${styles.navLinkButton} ${styles.page1}`}
					>
						View Page 1
					</Link>
					<Link
						href="/landing/page-2"
						className={`${styles.navLinkButton} ${styles.page2}`}
					>
						View Page 2
					</Link>
				</div>
			</div>
		</main>
	);
}

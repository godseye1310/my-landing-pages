"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

const NavBar = () => {
	//
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/landing/page-1", label: "Page 1" },
		{ href: "/landing/page-2", label: "Page 2" },
	];
	return (
		<>
			<nav className={styles.nav}>
				<div className={styles.container}>
					<Link href="/" className={styles.logo}>
						Landing Builder
					</Link>
					<ul className={styles.navList}>
						{navItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className={`${styles.navLink} ${
										pathname === item.href
											? styles.active
											: ""
									}`}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Landing Page",
	description: "This is the Landing Page Build using the Contentful API",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				<main style={{ paddingTop: "70px" }}>{children}</main>
			</body>
		</html>
	);
}

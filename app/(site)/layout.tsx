import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "24//7 autos | Best quality cars in Lagos, Awka and across Nigeria",
  description:
    "Buy Brand new, Direct Belgium, Fairly-used cars with ease at fair prices.Trusted cars/auto dealer in Lagos, Awka, and throughout Nigeria.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-body">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

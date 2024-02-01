import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import "./globals.css";
import Head from "next/head";
import { StateContext } from "../context/Contexts";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s |  247 Autos",
    default: "247 Autos",
  },
  description:
    "Buy Brand new, Direct Belgium, Fairly-used cars with ease at fair prices.Trusted cars/auto dealer in Lagos, Awka, and cities across Nigeria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-body">
        <StateContext>
          <Layout>{children}</Layout>
        </StateContext>
      </body>
    </html>
  );
}

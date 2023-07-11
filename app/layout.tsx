import "./globals.css";
import { Inter } from "next/font/google";
// import themes from "@actionishope/shelley";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html className={themes.shelley}>
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
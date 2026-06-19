import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Cether Deng",
  description: "Photography portfolio.",
  openGraph: {
    title: "Cether Deng",
    description: "Photography portfolio.",
    images: [{ url: "https://cetherdeng.com/cover.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://cetherdeng.com/cover.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GT Design Club",
  description: "The homepage for Georgia Tech's Design Club!",
  icons: ["/logo.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

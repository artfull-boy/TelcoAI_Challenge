import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TelcoAI Challenge",
  description: "Created by Ilias Rais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

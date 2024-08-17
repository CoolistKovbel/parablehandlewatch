import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./components/ui/fonts";

export const metadata: Metadata = {
  title: "ParoibleHandleWatch",
  description: "Checkout the trading and the swaping here....",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

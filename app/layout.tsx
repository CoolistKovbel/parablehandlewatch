import type { Metadata } from "next";

import { inter } from "./components/ui/fonts";
import { ModalProvider } from "./providers/model-provider";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

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
      <body className={inter.className}>
        {children}
        <ModalProvider />
        <ToastContainer />
      </body>
    </html>
  );
}

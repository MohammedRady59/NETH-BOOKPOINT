"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/redux/store";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <Provider store={store}>
            <Navbar />
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}

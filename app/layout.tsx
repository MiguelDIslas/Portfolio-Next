"use client";

import "./globals.scss";

import Providers from "./providers/Provider";
import Layout from "@components/layout/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout children={children} />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "./provider";
import "@fontsource/alegreya-sans";
import '@fontsource-variable/dm-sans';


export const metadata: Metadata = {
  title: "Emmanuel Okon",
  description: "Frontend Engineer | JavaScript | Typescript | ReactJS | NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import "@fontsource/raleway";
import "@fontsource/poppins";
import '@fontsource/roboto';
import Loading from "./loading";



export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          <div className="spinner">
            <Loading />
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}

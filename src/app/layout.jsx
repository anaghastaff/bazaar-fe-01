'use client'
import { Open_Sans } from "next/font/google";
import { MedusaProvider } from "medusa-react"

import { QueryClient } from "@tanstack/react-query"
import React from "react"

export const openSans = Open_Sans({
  subsets: ["latin"]
}); // THEME PROVIDER

import ThemeProvider from "theme/theme-provider"; // PRODUCT CART PROVIDER

import CartProvider from "contexts/CartContext"; // SITE SETTINGS PROVIDER

import SettingsProvider from "contexts/SettingContext"; // GLOBAL CUSTOM COMPONENTS

import { RTL } from "components/rtl";
import { ProgressBar } from "components/progress"; // IMPORT DUMMY SERVER

import "__server__"; // IMPORT i18n SUPPORT FILE

import "i18n";

const queryClient = new QueryClient()

export default function RootLayout({
  children
}) {
  return <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
      <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
      >
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
        </MedusaProvider>
      </body>
    </html>;
}
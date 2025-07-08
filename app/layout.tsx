import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ManKas Corporation - Agence Informatique & Design",
  description:
    "ManKas Corporation est une agence informatique graphique et design. Nous sommes là pour votre visibilité en ligne.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

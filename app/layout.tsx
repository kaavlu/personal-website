import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manav Khanvilkar - Personal Website",
  description: "Personal website and portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-purple-50">
          <header className="mx-auto max-w-2xl px-4 py-6">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-purple-600 hover:text-purple-800">
                home
              </Link>
              <Link href="/about" className="text-purple-600 hover:text-purple-800">
                about me
              </Link>
              <Link href="/projects" className="text-purple-600 hover:text-purple-800">
                projects
              </Link>
              <Link href="/builders" className="text-purple-600 hover:text-purple-800">
                builders
              </Link>
              <Link href="/photos" className="text-purple-600 hover:text-purple-800">
                photos
              </Link>
              <Link href="/contact" className="text-purple-600 hover:text-purple-800">
                contact
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}


import './globals.css'
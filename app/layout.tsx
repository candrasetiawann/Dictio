import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dictio',
  description: 'Simple Dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id='html'>
      <body className={`${inter.className} mx-auto px-8 md:px-72 bg-white dark:bg-zinc-900`}>{children}</body>
    </html>
  )
}

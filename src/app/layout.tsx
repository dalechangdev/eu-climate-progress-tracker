import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EU Climate Tracker',
  description: 'Track progress of EU climate initiatives: Fit for 55, 2030 targets, Net Zero 2050, and the European Green Deal.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-slate-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          <p>
            Data sourced from European Commission publications and official EU legislative records.{' '}
            <span className="text-slate-600">Last reviewed: May 2025</span>
          </p>
        </footer>
      </body>
    </html>
  )
}

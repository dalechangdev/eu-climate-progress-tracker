'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/european-green-deal', label: 'Green Deal' },
  { href: '/fit-for-55', label: 'Fit for 55' },
  { href: '/2030-targets', label: '2030 Targets' },
  { href: '/net-zero-2050', label: 'Net Zero 2050' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-eu-blue border-b-2 border-eu-yellow shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-eu-yellow text-lg font-bold tracking-wider">★★★</span>
            <span className="text-white font-semibold text-sm sm:text-base tracking-wide">
              EU Climate Tracker
            </span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-white/20 text-white'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

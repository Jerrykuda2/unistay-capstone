import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Areas', path: '/areas' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md transition-all">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f2937] text-base font-extrabold text-[#c7a57a] shadow-sm">
            U
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-[#16110b]">
              UniStay
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-[#a67c52] sm:block">
              Student Housing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-[#a67c52] ${
                isActive(link.path)
                  ? 'text-[#a67c52] font-bold'
                  : 'text-[#2f261d]/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-semibold text-[#2f261d] transition-colors hover:text-[#a67c52]"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-[#1f2937] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#111827] hover:shadow-md"
          >
            Post Hostel
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#16110b] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-black/10 bg-white/95 p-6 shadow-2xl backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 text-center font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base ${
                  isActive(link.path) ? 'text-[#a67c52] font-bold' : 'text-[#2f261d]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-black/5" />
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base text-[#2f261d]"
            >
              Sign in
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-2xl bg-[#1f2937] py-3 text-center text-sm font-semibold text-white"
            >
              Post Hostel
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
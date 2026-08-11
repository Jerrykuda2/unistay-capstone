import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 flex w-[95%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-semibold text-white">
          U
        </div>
        <div>
          <Link to="/" className="text-lg font-semibold tracking-[0.04em] text-slate-950">
            UniStay
          </Link>
          <p className="text-xs text-slate-500">Verified Student Housing</p>
        </div>
      </div>

      <div className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
        <Link to="/" className="transition hover:text-slate-950">Home</Link>
        <Link to="/explore" className="transition hover:text-slate-950">Explore</Link>
        <Link to="/areas" className="transition hover:text-slate-950">Areas</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/login" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">
          Sign in
        </Link>
        <Link to="/login" className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Post Hostel
        </Link>
      </div>
    </nav>
  )
}
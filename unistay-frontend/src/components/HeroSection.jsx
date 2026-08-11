import { Link } from 'react-router-dom'
import hostelImage from '../assets/hostel.jpg'

const quickStats = [
  { label: 'Verified rooms', value: '120+' },
  { label: 'Study-ready areas', value: '3' },
  { label: 'Avg. move-in', value: '24h' },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white"
      style={{ backgroundImage: "url('/Background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-between gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:py-16">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex rounded-full border border-slate-300 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-100">
            Secure student housing
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Secure your campus hostel without scams.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Browse trusted hostels in Tesano, Legon, Kumasi, and Accra Technical University with reliable contact, verified listings, and photo-backed homes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Explore now
            </Link>
            <Link
              to="/areas"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-100 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View neighborhoods
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/40 shadow-2xl">
          <div className="absolute inset-0 bg-slate-950/40" />
          <img src={hostelImage} alt="Hostel available" className="h-full min-h-[420px] w-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm">
            <div className="rounded-3xl bg-white/90 p-5 text-slate-950 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Hostel available</p>
              <h2 className="mt-2 text-2xl font-semibold">Apex Executive Hostel</h2>
              <p className="mt-2 text-sm text-slate-600">Self-contained rooms near Tesano campus with fast Wi-Fi, water, and security.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12 sm:px-10">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <form className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_0.8fr]">
            <label className="block">
              <span className="text-sm font-semibold text-slate-900">Campus / Location</span>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-400">
                <option> Tesano [GCTU]</option>
                <option>Legon [UG]</option>
                <option>Kumasi [KNUST]</option>
                <option>Accra Technical Univ</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-900">Room type</span>
              <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-400">
                <option>1 In A Room [Self-Contained]</option>
                <option>2 In A Room</option>
                <option>Standard Hostel Block</option>
              </select>
            </label>
            <div className="hidden lg:block" />
            <div className="flex items-end">
              <Link
                to="/explore"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Search listings
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

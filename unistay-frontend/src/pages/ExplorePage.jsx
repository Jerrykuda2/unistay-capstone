import ListingGrid from '../components/ListingGrid'
import { Link } from 'react-router-dom'

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Explore now</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Browse verified student hostels and secure your next stay.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600">
              Search by campus, room type, and price. All listings are built for modern Ghanaian students who need reliable housing near campus.
            </p>
          </div>

          <Link
            to="/areas"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View neighborhoods
          </Link>
        </div>
      </section>

      <ListingGrid />
    </div>
  )
}

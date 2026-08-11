export default function ListingCard({ listing }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img src={listing.image} alt={listing.title} className="h-full w-full object-cover" />
        {listing.verified && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-sm">
            Verified
          </span>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{listing.title}</h3>
            <p className="text-sm text-slate-600">{listing.location} • {listing.room_type}</p>
          </div>
          <p className="text-sm font-semibold text-slate-900">GHS {listing.price_ghs.toLocaleString()} / academic year</p>
        </div>
        <p className="text-sm leading-6 text-slate-600">{listing.description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">{listing.room_type}</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">{listing.location}</span>
        </div>
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200">
          <p className="text-sm text-slate-600">Contact: {listing.contact_number}</p>
          <button className="rounded-2xl border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
            Inquire
          </button>
        </div>
      </div>
    </article>
  )
}

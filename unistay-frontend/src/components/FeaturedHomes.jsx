import hostelImage from '../assets/hostel.jpg'

const homes = [
  {
    title: 'Modern studio in Achimota',
    price: 'GHS 1,050/mo',
    location: 'Near University of Ghana road',
    detail: 'Ideal for coding students, with fast Wi-Fi and shared workspaces.',
  },
  {
    title: 'Bright shared apartment in Tesano',
    price: 'GHS 900/mo',
    location: 'Quiet street with easy transport',
    detail: 'A social but peaceful option for tech interns and campus residents.',
  },
  {
    title: 'Private room in Abeka',
    price: 'GHS 750/mo',
    location: 'Close to shops and transit',
    detail: 'Balanced comfort and budget for students that value privacy.',
  },
]

export default function FeaturedHomes() {
  return (
    <section className="glass p-6 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-chip">Houses available</span>
          <h2 className="mt-3 text-2xl font-semibold text-[#2f261d]">Curated homes for the modern student</h2>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Fresh listings
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {homes.map((home) => (
          <article key={home.title} className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img src={hostelImage} alt={home.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-sm">
                Available now
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{home.title}</h3>
                <span className="text-sm font-semibold text-slate-700">{home.price}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{home.detail}</p>
              <p className="mt-4 text-sm font-medium text-slate-700">📍 {home.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const neighborhoods = [
  {
    name: 'Achimota',
    description: 'Perfect for students who want calm surroundings, easy commutes, and a premium feel.',
    perks: ['Quiet streets', 'Study-friendly', 'Great cafés'],
  },
  {
    name: 'Tesano',
    description: 'A balanced mix of accessibility, convenience, and lively student energy.',
    perks: ['Transport access', 'Secure blocks', 'Shared amenities'],
  },
  {
    name: 'Abeka',
    description: 'Budget-conscious and practical, with a strong community feel for campus life.',
    perks: ['Affordable', 'Local shops', 'Flexible leases'],
  },
]

export default function NeighborhoodSection() {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Popular areas
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Where tech students are choosing to stay</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600">
          Each neighborhood was chosen for comfort, connectivity, and a quality of life that supports both study and rest.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {neighborhoods.map((area) => (
          <div key={area.name} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xl font-semibold text-slate-950">{area.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{area.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.perks.map((perk) => (
                <span key={perk} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                  {perk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

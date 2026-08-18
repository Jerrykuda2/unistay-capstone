import { HiOutlineLocationMarker, HiCheck } from 'react-icons/hi'

const neighborhoods = [
  {
    name: 'Achimota',
    campus: 'Near UG & Accra Central Routes',
    description: 'Perfect for students who want calm surroundings, easy commutes, and a premium feel with quiet study spots.',
    perks: ['Quiet Streets', 'Study-Friendly Cafés', '24/7 Security'],
  },
  {
    name: 'Tesano',
    campus: 'GCTU Main Campus Zone',
    description: 'A vibrant mix of accessibility, student convenience, and lively community energy right next to lecture halls.',
    perks: ['3-Min Walk to GCTU', 'Gated Blocks', 'Backup Solar Power'],
  },
  {
    name: 'Abeka',
    campus: 'Abeka-Lapaz Corridor',
    description: 'Budget-conscious and practical, with excellent access to fresh food markets, shops, and flexible lease terms.',
    perks: ['Affordable Rent', 'Local Markets', 'Direct Transit Access'],
  },
]

export default function NeighborhoodSection() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="section-chip">Popular Student Hubs</span>
          <h2 className="mt-3 font-heading text-2xl font-bold text-[#16110b] sm:text-3xl">
            Where university students are choosing to stay
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#2f261d]/75">
          Each neighborhood is selected for convenience, safety, and a quality of life that supports academic success.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {neighborhoods.map((area) => (
          <div
            key={area.name}
            className="flex flex-col justify-between rounded-2xl border border-black/5 bg-[#f8efe6]/40 p-6 transition-all hover:bg-[#f8efe6] hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-[#16110b]">{area.name}</h3>
                <HiOutlineLocationMarker className="h-5 w-5 text-[#a67c52]" />
              </div>
              <span className="mt-1 inline-block text-xs font-semibold text-[#a67c52]">
                {area.campus}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#2f261d]/75">{area.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-black/5 pt-4">
              {area.perks.map((perk) => (
                <span
                  key={perk}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#2f261d] shadow-2xs border border-black/5"
                >
                  <HiCheck className="h-3 w-3 text-[#a67c52]" />
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


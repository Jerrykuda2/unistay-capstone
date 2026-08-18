import NeighborhoodSection from '../components/NeighborhoodSection'

export default function AreasPage() {
  return (
    <div className="space-y-8 pb-16">
      <section className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <span className="section-chip">Campus Locations</span>
        <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#16110b] sm:text-4xl">
          Campus neighborhoods with top student housing
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#2f261d]/75">
          Discover the right location for your academic year, compare travel times, and see key benefits of each major university housing hub.
        </p>
      </section>

      <NeighborhoodSection />
    </div>
  )
}


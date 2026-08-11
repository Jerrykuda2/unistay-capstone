import NeighborhoodSection from '../components/NeighborhoodSection'

export default function AreasPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Areas</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Campus neighborhoods with the best student housing.</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Discover the right location for your academic year and compare the key benefits of each major area.
        </p>
      </section>

      <NeighborhoodSection />
    </div>
  )
}

const features = [
  {
    title: 'Fast setup',
    text: 'Book a room in hours, not days, with streamlined listings and rapid support.',
  },
  {
    title: 'Student-first design',
    text: 'Quiet spaces, study corners, and reliable internet for deeper focus.',
  },
  {
    title: 'Trusted local listings',
    text: 'Only verified spaces in Achimota, Tesano, and Abeka are featured here.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Why students choose us
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Everything you need for a smoother move-in</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600">
          We combine convenience, comfort, and local trust so your next home feels intentional from day one.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-[1.15rem] border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{feature.text}</p>
          </div>
        ))}
      </div>
      
    </section>
  )
}


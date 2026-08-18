import { HiOutlineLightningBolt, HiOutlineAcademicCap, HiOutlineShieldCheck } from 'react-icons/hi'

const features = [
  {
    icon: HiOutlineLightningBolt,
    title: 'Fast Setup',
    text: 'Book a verified room in hours with streamlined applications and direct support.',
  },
  {
    icon: HiOutlineAcademicCap,
    title: 'Student-First Design',
    text: 'Quiet study corners, reliable high-speed internet, and campus proximity guaranteed.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Verified Local Listings',
    text: 'Every hostel near GCTU, Legon, and KNUST is physically vetted for peace of mind.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="section-chip">Why UniStay</span>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#16110b] sm:text-3xl">
            Everything you need for a smooth move-in
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#2f261d]/70">
          We combine safety, convenience, and student trust so your next home feels intentional from day one.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-black/5 bg-[#f8efe6]/50 p-6 transition-all hover:bg-[#f8efe6] hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f2937] text-[#c7a57a]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#16110b]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2f261d]/75">{feature.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}



import { Link } from 'react-router-dom'
import { HiCheckCircle, HiSparkles } from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi2'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-[#16110b] text-white shadow-2xl">
      {/* Background Image with Dark Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Background.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16110b]/95 via-[#16110b]/85 to-[#16110b]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#16110b]/90 via-transparent to-transparent" />

      {/* Content Container */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
        {/* Chip Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c7a57a] backdrop-blur-md">
          <HiSparkles className="h-3.5 w-3.5 text-[#c7a57a]" />
          Verified Student Housing Platform
        </span>

        {/* Strong Headline */}
        <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Find your perfect campus room with total peace of mind
        </h1>

        {/* Short Supporting Text */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Browse vetted student hostels, private apartments, and shared rooms near GCTU, Legon, KNUST and more. Transparent pricing with direct contact.
        </p>

        {/* Two Clear CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/explore"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1f2937] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#111827] hover:shadow-lg hover:shadow-black/20"
          >
            Explore Rooms
            <HiArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40"
          >
            Post a Room
          </Link>
        </div>

        {/* Trust Badges under CTAs */}
        <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-xs font-medium text-white/80 sm:text-sm">
          <div className="flex items-center gap-2">
            <HiCheckCircle className="h-5 w-5 text-[#c7a57a]" />
            <span>Verified Students</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCheckCircle className="h-5 w-5 text-[#c7a57a]" />
            <span>Real Photos & Specs</span>
          </div>
          <div className="flex items-center gap-2">
            <HiCheckCircle className="h-5 w-5 text-[#c7a57a]" />
            <span>Direct Landlord Contact</span>
          </div>
        </div>
      </div>
    </section>
  )
}
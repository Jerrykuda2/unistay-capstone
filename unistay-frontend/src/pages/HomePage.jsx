import { Link } from 'react-router-dom'
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineCurrencyDollar, HiOutlineHome, HiArrowRight, HiOutlineSparkles } from 'react-icons/hi'
import HeroSection from '../components/HeroSection'
import FeaturedHomes from '../components/FeaturedHomes'
import WhyChooseUs from '../components/WhyChooseUs'
import featuredHostelImg from '../assets/Inside hostel.jpg'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 pb-16">
      {/* 1. Standalone Hero */}
      <HeroSection />

      {/* 2. Search Bar - Positioned BELOW the hero */}
      <section className="-mt-6 sm:-mt-10 relative z-20 px-2 sm:px-4">
        <div className="rounded-3xl border border-black/10 bg-white/95 p-5 sm:p-7 shadow-[0_20px_50px_rgba(22,17,11,0.08)] backdrop-blur-md">
          <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                <HiOutlineLocationMarker className="h-4 w-4" />
                Campus / Location
              </label>
              <select className="glass-input cursor-pointer font-medium">
                <option value="">All Locations</option>
                <option value="tesano">Near GCTU (Tesano)</option>
                <option value="legon">Near UG (Legon)</option>
                <option value="knust">Near KNUST (Kumasi)</option>
                <option value="atu">Accra Technical University</option>
              </select>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                <HiOutlineCurrencyDollar className="h-4 w-4" />
                Max Budget (GHS)
              </label>
              <select className="glass-input cursor-pointer font-medium">
                <option value="">Any Budget</option>
                <option value="400">Under GHS 500</option>
                <option value="700">GHS 500 – 900</option>
                <option value="1200">GHS 900 – 1,500</option>
                <option value="1500">Above GHS 1,500</option>
              </select>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#a67c52]">
                <HiOutlineHome className="h-4 w-4" />
                Room Type
              </label>
              <select className="glass-input cursor-pointer font-medium">
                <option value="">All Types</option>
                <option value="self-contained">Self-contained Studio</option>
                <option value="2-in-room">2 in a Room</option>
                <option value="4-in-room">4 in a Room</option>
                <option value="apartment">Shared Apartment</option>
              </select>
            </div>

            <div className="flex items-end">
              <Link
                to="/explore"
                className="soft-button flex w-full items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.01]"
              >
                <HiOutlineSearch className="h-5 w-5" />
                Search Rooms
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* 3. Featured Hostel Highlight Section */}
      <section className="px-2 sm:px-0">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[300px] sm:min-h-[380px] bg-stone-200">
              <img
                src={featuredHostelImg}
                alt="Apex Executive Hostel"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 rounded-full bg-[#16110b]/90 px-4 py-1.5 text-xs font-bold text-[#c7a57a] backdrop-blur-md md:hidden">
                ★ Top Choice Near GCTU
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="section-chip w-fit">
                <HiOutlineSparkles className="mr-1.5 h-3.5 w-3.5 text-[#a67c52]" />
                Featured Hostel Highlight
              </span>

              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-[#16110b] sm:text-3xl lg:text-4xl">
                Apex Executive Hostel
              </h2>

              <p className="mt-4 leading-relaxed text-[#2f261d]/80">
                Premium self-contained student rooms situated just 3 minutes from the Tesano GCTU campus. Features 24/7 solar backup power, ultra-fast fiber Wi-Fi, biometric security entry, and weekly housekeeping.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-extrabold text-[#16110b]">GHS 1,200</span>
                <span className="text-sm font-medium text-[#2f261d]/60">/ month</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/explore"
                  className="soft-button px-7 py-3 text-sm font-bold"
                >
                  View Details & Photos
                </Link>
                <Link
                  to="/explore"
                  className="rounded-2xl border border-black/10 bg-[#f8efe6]/50 px-6 py-3 text-sm font-bold text-[#16110b] transition hover:bg-[#f8efe6]"
                >
                  Explore Similar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Featured Listings Grid */}
      <section className="px-2 sm:px-0">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="section-chip">Fresh Listings</span>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#16110b] sm:text-3xl">
              Rooms students are choosing right now
            </h2>
          </div>
          <Link
            to="/explore"
            className="hidden items-center gap-1 text-sm font-bold text-[#a67c52] transition hover:underline sm:inline-flex"
          >
            View all listings
            <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FeaturedHomes />
      </section>

      {/* 5. Why UniStay Section */}
      <section className="px-2 sm:px-0">
        <WhyChooseUs />
      </section>

      {/* 6. Final CTA Section */}
      <section className="px-2 sm:px-0">
        <div className="relative overflow-hidden rounded-3xl bg-[#1f2937] p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute right-0 top-0 -mr-12 -mt-12 h-64 w-64 rounded-full bg-[#c7a57a]/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#c7a57a]">
                Get Started Today
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                Ready to find your student home or list a hostel?
              </h2>
              <p className="mt-3 text-base text-white/80">
                Join hundreds of students and property owners across Ghana enjoying transparent, hassle-free campus housing.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/explore"
                className="rounded-2xl bg-[#c7a57a] px-7 py-3.5 text-sm font-bold text-[#16110b] transition hover:bg-[#d6b78d]"
              >
                Browse All Rooms
              </Link>
              <Link
                to="/login"
                className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                List Your Hostel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
const fetchListings = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/listings');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    // MAPPING: AWS RDS columns -> Antigravity ListingCard props
    const formattedData = data.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price_ghs,       // Maps your DB 'price_ghs' to the UI 'price' prop
      description: item.description,
      location: item.location,
      image_url: item.image_url    // Matches perfectly
    }));

    // Update your React state with the perfectly formatted data
    setListings(formattedData);
  } catch (error) {
    console.error('Error fetching listings:', error);
  }
};

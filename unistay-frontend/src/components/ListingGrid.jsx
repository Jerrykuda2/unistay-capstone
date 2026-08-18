import { useState, useEffect } from 'react'
import ListingCard from './ListingCard'
import { HiOutlineSearch } from 'react-icons/hi'

import hostelImg from '../assets/hostel.jpg'
import insideHostelImg from '../assets/Inside hostel.jpg'
import whiteHostelImg from '../assets/White Hostel.jpg'
import peopleTreeImg from '../assets/At people tree hostel, we bring to you the most modern facilities_.jpg'
import workingWomenImg from '../assets/Working Women Hostel Chennai.jpg'

const fallbackListings = [
  {
    id: 1,
    title: 'Modern Studio in Achimota',
    price: '1050',
    location: 'Achimota, near UG bypass',
    description: 'Self-contained studio room equipped with quiet study spaces, backup power, and fast internet.',
    image_url: whiteHostelImg,
  },
  {
    id: 2,
    title: 'Executive 2-in-a-Room near GCTU',
    price: '850',
    location: 'Tesano, 3 mins to GCTU',
    description: 'Shared student suite with modern bath, individual study desks, and 24/7 campus security.',
    image_url: insideHostelImg,
  },
  {
    id: 3,
    title: 'Private Single Room in Abeka',
    price: '750',
    location: 'Abeka Lapaz, Accra',
    description: 'Cozy private room close to shopping centers and main transport routes.',
    image_url: hostelImg,
  },
  {
    id: 4,
    title: 'Luxury Student Apartment',
    price: '1400',
    location: 'Legon Campus Perimeter',
    description: 'Air-conditioned luxury apartment with private kitchen, balcony, and high-speed Wi-Fi.',
    image_url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Budget Friendly Room near Accra Technical University',
    price: '600',
    location: 'Accra',
    description: 'Affordable student housing with water storage tanks and walking distance to lecture halls.',
    image_url: peopleTreeImg,
  },
  {
    id: 6,
    title: 'Modern Hostel Suite',
    price: '950',
    location: 'Tesano Campus Zone',
    description: 'Bright and airy hostel room featuring en-suite bathroom and serene study courtyard.',
    image_url: workingWomenImg,
  },
  {
    id: 7,
    title: 'Sunlit Shared Residency',
    price: '800',
    location: 'Near Legon Main Gate',
    description: 'Spacious 2-in-a-room suite with wooden study tables and shared lounge area.',
    image_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Executive Tech Haven',
    price: '1200',
    location: 'Achimota Mile 7',
    description: 'Fully furnished room tailored for tech & computing students needing high uptime.',
    image_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
]


export default function ListingGrid({ filterLocation = '', filterBudget = '', filterType = '' }) {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchListings() {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:5000'
        const res = await fetch(`${apiBase}/api/listings`)
        if (res.ok) {

          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setListings(data)
          } else {
            setListings(fallbackListings)
          }
        } else {
          setListings(fallbackListings)
        }
      } catch (err) {
        console.log('Using fallback listings:', err)
        setListings(fallbackListings)
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  // Filter listings
  const filteredListings = listings.filter((item) => {
    const locMatch = !filterLocation || (item.location || '').toLowerCase().includes(filterLocation.toLowerCase()) || (item.title || '').toLowerCase().includes(filterLocation.toLowerCase())
    const budgetMatch = !filterBudget || Number(item.price || item.rent_amount || 0) <= Number(filterBudget)
    const typeMatch = !filterType || (item.description || '').toLowerCase().includes(filterType.toLowerCase()) || (item.title || '').toLowerCase().includes(filterType.toLowerCase())
    return locMatch && budgetMatch && typeMatch
  })

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="h-80 w-full animate-pulse rounded-3xl bg-stone-200/60" />
        ))}
      </div>
    )
  }

  if (filteredListings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-black/10 bg-white p-12 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f8efe6] text-[#a67c52]">
          <HiOutlineSearch className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-[#16110b]">No listings found</h3>
        <p className="mt-2 max-w-md text-sm text-[#2f261d]/70">
          We couldn't find any rooms matching your search filters. Try clearing your filters or selecting a different location.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredListings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  )
}

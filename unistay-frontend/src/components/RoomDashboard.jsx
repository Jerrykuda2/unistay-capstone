import { useState, useEffect } from 'react'
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineSparkles, HiOutlineTag, HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const initialRooms = [
  {
    id: 1,
    title: 'Executive Studio - Tesano Campus',
    price: 'GHS 1,200/mo',
    location: 'Tesano, Accra (3 min walk to GCTU)',
    tags: ['Self-Contained', 'Fiber WiFi', 'Solar Backup', '24/7 Security'],
  },
  {
    id: 2,
    title: 'Single Room Suite near UG',
    price: 'GHS 850/mo',
    location: 'Achimota, Accra',
    tags: ['Private Bath', 'Study Desk', 'Water Tank'],
  },
  {
    id: 3,
    title: 'Budget 2-in-a-Room Flat',
    price: 'GHS 650/mo',
    location: 'Abeka Lapaz, Accra',
    tags: ['Shared Bath', 'Kitchen Access', 'High Security'],
  },
]

export default function RoomDashboard() {
  const [rooms, setRooms] = useState(initialRooms)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchListings() {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:5000'
        const res = await fetch(`${apiBase}/api/listings`)
        if (res.ok) {

          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            const mapped = data.map((item) => ({
              id: item.id,
              title: item.title,
              price: `GHS ${item.price}/mo`,
              location: item.location || 'Near Campus',
              tags: ['Verified', 'Campus Nearby', 'Fresh'],
            }))
            setRooms(mapped)
          }
        }
      } catch (err) {
        console.log('RoomDashboard fetch fallback:', err)
      }
    }

    fetchListings()
  }, [])

  const filteredRooms = rooms.filter(
    (room) =>
      room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="section-chip">
            <HiOutlineSparkles className="mr-1.5 h-3.5 w-3.5 text-[#a67c52]" />
            Student Housing Dashboard
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#16110b]">
            Available campus rooms
          </h2>
        </div>
        <span className="inline-flex rounded-full border border-black/10 bg-[#f8efe6] px-3.5 py-1 text-xs font-bold text-[#a67c52]">
          Live DB Listings
        </span>
      </div>

      {/* Search Input */}
      <div className="relative mt-6">
        <HiOutlineSearch className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          placeholder="Search by campus, location, or room title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-input glass-input-icon"
          style={{ paddingLeft: '2.75rem' }}
        />
      </div>

      {/* Room List */}
      <div className="mt-6 flex max-h-[420px] flex-col gap-4 overflow-y-auto pr-1">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="rounded-2xl border border-black/5 bg-[#f8efe6]/40 p-5 transition-all hover:bg-[#f8efe6] hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg font-bold text-[#16110b]">{room.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#2f261d]/75">
                  <HiOutlineLocationMarker className="h-4 w-4 text-[#a67c52]" />
                  {room.location}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-white px-3.5 py-1 text-xs font-extrabold text-[#a67c52] border border-[#c7a57a]/20 shadow-2xs">
                {room.price}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {room.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-[#2f261d]/80 border border-black/5"
                >
                  <HiOutlineTag className="h-3 w-3 text-[#a67c52]" />
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/explore"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-2.5 text-xs font-bold text-[#16110b] transition hover:bg-[#1f2937] hover:text-white"
            >
              View Room Details
              <HiOutlineArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
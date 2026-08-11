import ListingCard from './ListingCard'
import hostelImage from '../assets/hostel.jpg'

const listings = [
  {
    listing_id: '9a7d5fd8-3f52-4c8b-a396-2d5d3f8f0b84',
    title: 'Apex Executive Hostel',
    location: 'Tesano',
    room_type: 'Self-Contained',
    price_ghs: 3500,
    contact_number: '0241234567',
    description: 'Constant water flow, stable Wi-Fi, fenced perimeter.',
    verified: true,
    created_at: '2026-08-04T12:00:00Z',
    image: hostelImage,
  },
  {
    listing_id: '2c1b95fa-7a9e-4a9a-bd45-7e75ca13f8c1',
    title: 'Campus View Suites',
    location: 'Legon',
    room_type: '2 In A Room',
    price_ghs: 3200,
    contact_number: '0247654321',
    description: 'High-speed internet, secure gated compound, shared study room.',
    verified: true,
    created_at: '2026-08-03T09:30:00Z',
    image: hostelImage,
  },
  {
    listing_id: 'd262e92e-8e47-4d53-b4c1-6f2331b18f9c',
    title: 'Abeka Scholar Rooms',
    location: 'Abeka',
    room_type: 'Standard Hostel Block',
    price_ghs: 2100,
    contact_number: '0249988776',
    description: 'Affordable hostel block with daily cleaning and security patrols.',
    verified: true,
    created_at: '2026-08-02T14:15:00Z',
    image: hostelImage,
  },
]

export default function ListingGrid() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Verified listings</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Hostels available near campus</h2>
          <p className="mt-3 text-base text-slate-600">Explore listings built for Ghanaian students with trusted features and transparent pricing.</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingCard key={listing.listing_id} listing={listing} />
        ))}
      </div>
    </section>
  )
}

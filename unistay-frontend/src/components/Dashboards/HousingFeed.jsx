import { useState } from 'react';

export default function HousingFeed() {
  const [properties] = useState([
    { id: 1, title: '2 Bedroom Apartment', location: 'Abeka', price: 'GH₵ 3,500/yr', distance: '5 mins walk', status: 'Available' },
    { id: 2, title: 'Single Room Self-Contained', location: 'Tesano', price: 'GH₵ 2,200/yr', distance: '15 mins walk', status: 'Available' },
    { id: 3, title: '4 Bedroom House Share', location: 'Alajo', price: 'GH₵ 2,800/yr', distance: '10 mins drive', status: '1 Room Left' },
    { id: 4, title: 'Executive Studio', location: 'Achimota', price: 'GH₵ 4,000/yr', distance: '5 mins drive', status: 'Available' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-black">Housing Listings</h1>
          <p className="mt-1 text-brand-gray">Browse available off-campus accommodations.</p>
        </div>
        <button className="rounded-md bg-brand-coral px-6 py-2.5 font-bold text-white shadow-md transition hover:scale-105 hover:bg-opacity-90">
          Post a Property
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="relative overflow-hidden rounded-xl border border-brand-light-brown bg-white p-0 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            
            {/* Placeholder for Property Image */}
            <div className="h-48 w-full bg-brand-cream border-b border-brand-light-brown flex items-center justify-center">
              <span className="text-brand-light-brown font-semibold">Image Placeholder</span>
            </div>

            {/* Status Badge */}
            <div className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold border ${
              property.status === 'Available' 
                ? 'bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20' 
                : 'bg-brand-coral/10 text-brand-coral border-brand-coral/20'
            }`}>
              {property.status}
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-brand-black">{property.title}</h2>
                <p className="text-sm font-semibold text-brand-gray">{property.location}</p>
              </div>
              
              <div className="space-y-3 rounded-lg bg-brand-cream p-4 text-sm text-brand-gray border border-brand-light-brown/30">
                <div className="flex justify-between border-b border-brand-light-brown/20 pb-2">
                  <span className="font-semibold text-brand-black">Rent</span> 
                  <span className="font-bold text-brand-black">{property.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-brand-black">Campus Distance</span> 
                  <span>{property.distance}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                 <button className="flex-1 rounded-md border-2 border-brand-black bg-transparent py-2.5 font-bold text-brand-black transition hover:bg-brand-black hover:text-brand-cream">
                  View Details
                </button>
                <button className="flex-1 rounded-md bg-brand-lavender py-2.5 font-bold text-brand-black transition hover:bg-brand-light-brown hover:text-white">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
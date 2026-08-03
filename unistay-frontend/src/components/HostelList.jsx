import React from 'react';

const hostelsData = [
  {
    id: 1,
    name: 'Apex Luxury Residence',
    location: 'Tesano (Near GCTU)',
    price: '₵3,800',
    type: '1 In A Room (Self-Contained)',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    verified: true,
  },
  {
    id: 2,
    name: 'Pentagon Hall Annex',
    location: 'Achimota',
    price: '₵4,500',
    type: '2 In A Room',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    verified: true,
  },
  {
    id: 3,
    name: 'Brunswick Student Hub',
    location: 'Abeka',
    price: '₵3,200',
    type: '1 In A Room (Self-Contained)',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    verified: true,
  },
];

 function HostellList({ locationFilter, typeFilter, onSelectHostel }) {
  // Filter logic
  const filteredHostels = hostelsData.filter((hostel) => {
    const matchesLocation = locationFilter === '' || hostel.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === '' || hostel.type.toLowerCase().includes(typeFilter.toLowerCase());
    return matchesLocation && matchesType;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Verified Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-orbitron">
            Available <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Hostels</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0">
          Showing {filteredHostels.length} verified tactical properties
        </p>
      </div>

      {filteredHostels.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center">
          <p className="text-slate-400 font-medium">No hostels match your tactical filter criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredHostels.map((hostel) => (
            <div 
              key={hostel.id}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 group shadow-xl flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={hostel.image} 
                  alt={hostel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs font-semibold flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Safe</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-white font-orbitron font-bold text-sm">
                  {hostel.price} <span className="text-[10px] text-slate-400 font-normal">/sem</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">{hostel.location}</div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-2">{hostel.name}</h3>
                  <p className="text-slate-400 text-xs mb-4">{hostel.type}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">⭐ {hostel.rating} / 5.0</span>
                  <button 
                    onClick={() => onSelectHostel(hostel)}
                    className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/40 text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}


export default function HostelList({ hostels, locationFilter, typeFilter, onSelectHostel }) {
  // Filter logic across dynamic state
  const filteredHostels = hostels.filter((hostel) => {
    const matchesLocation = locationFilter === '' || hostel.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = typeFilter === '' || hostel.type.toLowerCase().includes(typeFilter.toLowerCase());
    return matchesLocation && matchesType;
  });

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Verified Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-orbitron">
            Available <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Hostels</span>
          </h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0">
          Showing {filteredHostels.length} verified tactical properties
        </p>
      </div>

      {filteredHostels.length === 0 ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center">
          <p className="text-slate-400 font-medium">No hostels match your tactical filter criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredHostels.map((hostel) => (
            <div 
              key={hostel.id}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 group shadow-xl flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={hostel.image} 
                  alt={hostel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs font-semibold flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Verified Safe</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 text-white font-orbitron font-bold text-sm">
                  {hostel.price} <span className="text-[10px] text-slate-400 font-normal">/sem</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">{hostel.location}</div>
                  <h3 className="text-xl font-bold text-white font-orbitron mb-2">{hostel.name}</h3>
                  <p className="text-slate-400 text-xs mb-4">{hostel.type}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">⭐ {hostel.rating} / 5.0</span>
                  <button 
                    onClick={() => onSelectHostel(hostel)}
                    className="bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/40 text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
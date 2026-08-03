import React from 'react';

export default function Hero({ locationFilter, setLocationFilter, typeFilter, setTypeFilter, onSearch }) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-slate-200/60 text-slate-700 text-xs font-medium mb-6">
          <span>Verified Student Housing Across Ghana</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Secure Your Campus Hostel <span className="text-blue-600">Without Scams</span>
        </h1>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Clean, verified student housing with transparent pricing and direct landlord contact.
        </p>

        {/* Search Box - Solid clean white with sharp borders */}
        <div className="max-w-4xl mx-auto mt-10 bg-white border border-slate-200 p-4 sm:p-6 rounded-2xl shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          
          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 px-1">Campus / Location</label>
            <select 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600"
            >
              <option value="">All Campuses</option>
              <option value="Tesano">Tesano (GCTU)</option>
              <option value="Legon">Legon (UG)</option>
              <option value="Kumasi">Kumasi (KNUST)</option>
              <option value="Accra">Accra Technical Univ</option>
            </select>
          </div>

          <div className="text-left">
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 px-1">Room Type</label>
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-600"
            >
              <option value="">All Room Types</option>
              <option value="Self-Contained">1 In A Room (Self-Contained)</option>
              <option value="2 In A Room">2 In A Room</option>
              <option value="Hostel Block">Standard Hostel Block</option>
            </select>
          </div>

          <div className="sm:pt-5">
            <button 
              onClick={onSearch}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm"
            >
              Search Hostels
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
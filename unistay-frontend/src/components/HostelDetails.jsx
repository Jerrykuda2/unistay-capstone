import React from 'react';

export default function HostelDetails({ hostel, onBack }) {
  if (!hostel) return null;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 animate-fadeIn">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="mb-8 inline-flex items-center space-x-2 text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider">Back to Listings</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left/Main Column: Images & Overview */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Image */}
          <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src={hostel.image} 
              alt={hostel.name}
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 text-xs font-semibold flex items-center space-x-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Rigorous Tactical Verification Passed</span>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-xl space-y-6">
            <div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">{hostel.location}</div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-orbitron">{hostel.name}</h1>
              <p className="text-slate-400 text-sm mt-2">{hostel.type} • ⭐ {hostel.rating} / 5.0 Rating</p>
            </div>

            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-3">Hostel Description</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Situated in a secure, student-friendly environment with easy transport access to campus. Designed specifically to provide absolute peace of mind, reliable utilities, and zero exposure to fraudulent middlemen or fake pricing agents.
              </p>
            </div>

            {/* Tactical Amenities */}
            <div className="border-t border-slate-800 pt-6">
              <h3 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-4">Verified Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Standby Generator', 'Constant Water Flow', 'Security Fencing', 
                  'High-Speed Wi-Fi', 'Study Room Access', 'Paved Parking'
                ].map((amenity, i) => (
                  <div key={i} className="flex items-center space-x-2.5 bg-slate-950/60 border border-slate-800 px-4 py-3 rounded-2xl">
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-slate-200 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Pricing & Booking Action Card */}
        <div className="space-y-6">
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl sticky top-28">
            
            <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-slate-800">
              <span className="text-slate-400 text-sm font-medium">Semester Rate</span>
              <div className="text-right">
                <span className="text-3xl font-black text-white font-orbitron">{hostel.price}</span>
                <span className="text-xs text-slate-400 block">/ semester</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Agency Fee Risk:</span>
                <span className="text-emerald-400 font-bold">0% (Direct Listing)</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Inspection Status:</span>
                <span className="text-blue-400 font-bold">Available Now</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Redirecting to secure WhatsApp inspection booking with verified landlord...')}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold font-orbitron tracking-wide py-4 rounded-2xl shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center space-x-2 mb-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Book Physical Inspection</span>
            </button>

            <p className="text-[11px] text-center text-slate-500">
              Protected by UniStay Secure Escrow & Anti-Scam Protocol.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}
import React, { useState } from 'react';

export default function PostHostelModal({ isOpen, onClose, onAddHostel }) {
  const [formData, setFormData] = useState({
    name: '',
    location: 'Tesano (Near GCTU)',
    price: '',
    type: '1 In A Room (Self-Contained)',
    image: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct new hostel object
    const newHostel = {
      id: Date.now(),
      name: formData.name,
      location: formData.location,
      price: `₵${formData.price}`,
      type: formData.type,
      rating: '5.0', // New listings start fresh with top rating
      image: formData.image || 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
      verified: true,
    };

    onAddHostel(newHostel);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Tactical Listing Protocol</span>
          </div>
          <h2 className="text-2xl font-black text-white font-orbitron">Post New Hostel</h2>
          <p className="text-slate-400 text-xs mt-1">Submit a verified property to bypass scam networks.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Hostel Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Apex Luxury Residence"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Campus / Location</label>
              <select 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Tesano (Near GCTU)">Tesano (Near GCTU)</option>
                <option value="Legon (University of Ghana)">Legon (University of Ghana)</option>
                <option value="Kumasi (KNUST)">Kumasi (KNUST)</option>
                <option value="Accra Technical Univ">Accra Technical Univ</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Price (GHS / Semester)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. 3800"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Room Type</label>
            <select 
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="1 In A Room (Self-Contained)">1 In A Room (Self-Contained)</option>
              <option value="2 In A Room">2 In A Room</option>
              <option value="Standard Hostel Block">Standard Hostel Block</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Image URL (Optional)</label>
            <input 
              type="url" 
              placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold font-orbitron tracking-wide py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 transition-all"
            >
              Publish Verified Listing
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
import React from 'react';

export default function Navbar({ onOpenPostModal }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            U
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Uni<span className="text-blue-600">Stay</span></span>
            <span className="block text-[10px] text-slate-400 font-medium tracking-wider uppercase">Verified Student Housing</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenPostModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            Post Hostel
          </button>
        </div>

      </div>
    </nav>
  );
}
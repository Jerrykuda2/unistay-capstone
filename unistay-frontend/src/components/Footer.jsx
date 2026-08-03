import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-slate-900 border border-blue-400/40 shadow-lg">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 9V6h2v3" />
                  <path d="M3 12l9-8 9 8" />
                  <path d="M10 11h4v3h-4z" />
                  <path d="M3 17c3.5 2.5 8 3 17-1-4 2.5-9 2.5-17 1z" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-xl font-black text-white font-orbitron">UniStay</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The premier tactical student hostel platform across Ghana. Zero scams, verified listings, seamless room bookings.
            </p>
          </div>

          {/* Quick Links / Campuses */}
          <div>
            <h4 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-4">Campuses</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#gctu" className="hover:text-blue-400 transition-colors">GCTU Tesano</a></li>
              <li><a href="#legon" className="hover:text-blue-400 transition-colors">University of Ghana (Legon)</a></li>
              <li><a href="#knust" className="hover:text-blue-400 transition-colors">KNUST Kumasi</a></li>
              <li><a href="#atu" className="hover:text-blue-400 transition-colors">Accra Technical University</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#safety" className="hover:text-blue-400 transition-colors">Safety & Verification</a></li>
              <li><a href="#landlords" className="hover:text-blue-400 transition-colors">List Your Hostel</a></li>
              <li><a href="#roommates" className="hover:text-blue-400 transition-colors">Roommate Matching</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Support & FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold font-orbitron text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Get notified when new verified hostels open near your campus.</p>
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-600/20">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} UniStay Ghana. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400 transition-colors">Security Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
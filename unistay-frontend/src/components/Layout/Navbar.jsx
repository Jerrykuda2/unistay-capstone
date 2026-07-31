import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-brand-black px-6 py-4 text-brand-cream shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Placeholder for an actual logo image later */}
          <span className="text-2xl font-bold text-brand-lavender">UniStay</span>
        </div>
        
        <div className="hidden space-x-6 md:flex">
          <Link to="/roommates" className="font-semibold transition hover:text-brand-light-brown">
            Find Roommates
          </Link>
          <Link to="/housing" className="font-semibold transition hover:text-brand-light-brown">
            Housing Listings
          </Link>
        </div>

        <div>
          <button className="rounded border border-brand-light-brown bg-transparent px-4 py-2 font-semibold text-brand-cream transition hover:bg-brand-light-brown hover:text-brand-black">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* The Outlet is where React Router dynamically renders the page content (like the dashboard) */}
      <main className="mx-auto max-w-7xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
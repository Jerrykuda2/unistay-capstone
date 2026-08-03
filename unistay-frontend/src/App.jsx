import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HostelList from './components/HostelList';
import HostelDetails from './components/HostelDetails';
import Features from './components/Features';
import Footer from './components/Footer';
import PostHostelModal from './components/PostHostelModal';

const defaultHostels = [
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
    location: 'Legon (University of Ghana)',
    price: '₵4,500',
    type: '2 In A Room',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    verified: true,
  },
  {
    id: 3,
    name: 'Brunswick Student Hub',
    location: 'Kumasi (KNUST)',
    price: '₵3,200',
    type: '1 In A Room (Self-Contained)',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    verified: true,
  },
];

export default function App() {
  // Load saved hostels from localStorage or fallback to defaults
  const [hostels, setHostels] = useState(() => {
    const saved = localStorage.getItem('unistay_hostels');
    return saved ? JSON.parse(saved) : defaultHostels;
  });

  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [selectedHostel, setSelectedHostel] = useState(null);

  // Save to localStorage whenever hostels state updates
  useEffect(() => {
    localStorage.setItem('unistay_hostels', JSON.stringify(hostels));
  }, [hostels]);

  const handleAddHostel = (newHostel) => {
    setHostels([newHostel, ...hostels]);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar onOpenPostModal={() => setIsPostModalOpen(true)} />

      {selectedHostel ? (
        <HostelDetails 
          hostel={selectedHostel} 
          onBack={() => setSelectedHostel(null)} 
        />
      ) : (
        <>
          <Hero 
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
          <Features />
          <HostelList 
            hostels={hostels}
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            onSelectHostel={(hostel) => setSelectedHostel(hostel)}
          />
        </>
      )}

      <Footer />

      <PostHostelModal 
        isOpen={isPostModalOpen} 
        onClose={() => setIsPostModalOpen(false)} 
        onAddHostel={handleAddHostel}
      />
    </div>
  );
}
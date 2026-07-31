import { useState } from 'react';

export default function RoommateFeed() {
  const [roommates] = useState([
    { id: 1, name: 'Kwame Mensah', major: 'Computer Science', budget: 'GH₵ 800/sem', habits: 'Night owl, Quiet', match: '98%' },
    { id: 2, name: 'Ama Osei', major: 'Business Admin', budget: 'GH₵ 1200/sem', habits: 'Early bird, Social', match: '85%' },
    { id: 3, name: 'Yaw Anim', major: 'Engineering', budget: 'GH₵ 950/sem', habits: 'Night owl, Very Clean', match: '92%' },
    { id: 4, name: 'Abena Serwaa', major: 'Nursing', budget: 'GH₵ 1000/sem', habits: 'Early bird, Quiet', match: '78%' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-brand-black">Find a Roommate</h1>
          <p className="text-brand-gray mt-1">Discover students with matching lifestyles.</p>
        </div>
        <button className="rounded-md bg-brand-coral px-6 py-2.5 font-bold text-white shadow-md transition hover:scale-105 hover:bg-opacity-90">
          Filter Matches
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {roommates.map((user) => (
          <div key={user.id} className="relative overflow-hidden rounded-xl border border-brand-light-brown bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
            
            {/* Emerald Green Match Badge */}
            <div className="absolute top-4 right-4 rounded-full bg-brand-emerald/10 px-3 py-1 text-xs font-bold text-brand-emerald border border-brand-emerald/20">
              {user.match} Match
            </div>

            <div className="mb-4 flex items-center space-x-4 mt-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-lavender text-xl font-bold text-brand-black shadow-sm">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-black">{user.name}</h2>
                <p className="text-sm font-semibold text-brand-light-brown">{user.major}</p>
              </div>
            </div>
            
            <div className="space-y-3 rounded-lg bg-brand-cream p-4 text-sm text-brand-gray border border-brand-light-brown/30">
              <div className="flex justify-between border-b border-brand-light-brown/20 pb-2">
                <span className="font-semibold text-brand-black">Budget</span> 
                <span>{user.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-brand-black">Habits</span> 
                <span>{user.habits}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-md border-2 border-brand-black bg-transparent py-2.5 font-bold text-brand-black transition hover:bg-brand-black hover:text-brand-cream">
              Send Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
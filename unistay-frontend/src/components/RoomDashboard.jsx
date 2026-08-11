export default function RoomDashboard() {
  const rooms = [
    { id: 1, title: '2BHK Near Campus', price: 'GHS 1,200/mo', location: 'Legon, Accra', tags: ['Furnished', 'WiFi'] },
    { id: 2, title: 'Single Room - GCTU', price: 'GHS 800/mo', location: 'Tesano, Accra', tags: ['Private Bath', 'Security'] },
  ]

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Featured rooms
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Find a room that fits</h2>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Updated today
        </div>
      </div>

      <div className="relative">
        <input
          placeholder="Search by location, price, or keywords..."
          className="glass-input pr-12"
        />
        <button className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-lg bg-[#a67c52] p-2 text-sm text-white">
          🔎
        </button>
      </div>

      <div className="flex max-h-[400px] flex-col gap-3 overflow-y-auto pr-1">
        {rooms.map((room) => (
          <div key={room.id} className="rounded-2xl border border-[#e8dccf] bg-[#fcf7f0] p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-[#2f261d]">{room.title}</h3>
                <p className="mt-1 text-sm text-[#6f5f4b]">📍 {room.location}</p>
              </div>
              <p className="font-semibold text-[#8b6a3a]">{room.price}</p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {room.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#6f5f4b]">
                  {tag}
                </span>
              ))}
            </div>

            <button className="mt-4 w-full rounded-xl border border-[#e2d1bd] bg-white/80 py-2.5 font-semibold text-[#4f4338] transition hover:bg-[#a67c52] hover:text-white">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
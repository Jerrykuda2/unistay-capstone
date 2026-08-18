import { useState } from 'react'
import { HiOutlineHome, HiOutlineCurrencyDollar, HiOutlineLocationMarker, HiOutlineDocumentText, HiOutlinePlusCircle, HiCheckCircle } from 'react-icons/hi'

export default function PostRoomCard() {
  const [form, setForm] = useState({ title: '', price: '', location: '', description: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: '', type: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title || !form.price || !form.location) {
      setMessage({ text: 'Please fill in title, price, and location.', type: 'error' })
      return
    }

    setLoading(true)
    setMessage({ text: '', type: '' })

    // Retrieve host_id from logged-in user or default to 1
    let hostId = 1
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const parsed = JSON.parse(storedUser)
        if (parsed?.id) hostId = parsed.id
      }
    } catch (err) {
      console.log('Using default hostId:', err)
    }

    const payload = {
      host_id: hostId,
      title: form.title,
      description: form.description || 'No description provided.',
      price: parseFloat(form.price) || 0,
      location: form.location,
    }

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:5000'
      const res = await fetch(`${apiBase}/api/listings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })


      const data = await res.json()
      if (res.ok) {
        setMessage({ text: 'Hostel room posted successfully!', type: 'success' })
        setForm({ title: '', price: '', location: '', description: '' })
      } else {
        setMessage({ text: data.error || 'Failed to post room to database.', type: 'error' })
      }
    } catch (err) {
      console.error('Error posting room:', err)
      setMessage({ text: 'Could not connect to backend server.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1f2937] text-[#c7a57a]">
          <HiOutlinePlusCircle className="h-6 w-6" />
        </div>
        <div>
          <span className="section-chip">List Your Accommodation</span>
          <h2 className="font-heading text-xl font-bold text-[#16110b] sm:text-2xl">
            Post a student room
          </h2>
        </div>
      </div>
      
      <p className="mt-3 text-xs leading-relaxed text-[#2f261d]/75 sm:text-sm">
        Publish your room listing directly to students searching near GCTU, Legon, and KNUST campuses.
      </p>

      {message.text && (
        <div
          className={`mt-4 rounded-xl p-3 text-xs font-semibold border flex items-center gap-2 ${
            message.type === 'success'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-red-50 text-red-600 border-red-200'
          }`}
        >
          {message.type === 'success' && <HiCheckCircle className="h-4 w-4 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
            Room Title
          </label>
          <div className="relative">
            <HiOutlineHome className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="e.g. Executive 2-in-a-Room near Tesano Campus"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="glass-input glass-input-icon"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
              Monthly Rent (GHS)
            </label>
            <div className="relative">
              <HiOutlineCurrencyDollar className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="850"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="glass-input glass-input-icon"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
              Location / Campus
            </label>
            <div className="relative">
              <HiOutlineLocationMarker className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Tesano, near GCTU"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="glass-input glass-input-icon"
                style={{ paddingLeft: '2.75rem' }}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
            Room Details & Amenities
          </label>
          <div className="relative">
            <HiOutlineDocumentText className="pointer-events-none absolute left-3.5 top-3.5 z-10 h-5 w-5 text-gray-400" />
            <textarea
              placeholder="Describe room features, study desk, Wi-Fi speed, water availability, security..."
              rows="3"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="glass-input glass-input-icon"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="soft-button mt-2 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.01]"
        >
          {loading ? 'Submitting Listing...' : 'Publish Room Listing'}
        </button>
      </form>
    </div>
  )
}
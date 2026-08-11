import { useState } from 'react'

export default function PostRoomCard() {
  const [form, setForm] = useState({ title: '', price: '', location: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Post Room:', form)
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div>
        <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          List your space
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">Post a room</h2>
      </div>
      <p className="mt-3 text-sm text-slate-600">Share a polished listing with students looking for their next home.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Room title e.g. 2BHK near campus"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="glass-input"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Price GHS"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="glass-input"
          />
          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="glass-input"
          />
        </div>

        <textarea
          placeholder="Short description"
          rows="3"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="glass-input"
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2f261d]">Upload photos</label>
          <input type="file" multiple className="text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[#a67c52] file:px-4 file:py-2 file:font-semibold file:text-white" />
        </div>

        <button type="submit" className="soft-button mt-2 py-3">
          Post room
        </button>
      </form>
    </div>
  )
}
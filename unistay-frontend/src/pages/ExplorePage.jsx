import { useState } from 'react'
import ListingGrid from '../components/ListingGrid'
import { Link } from 'react-router-dom'
import { HiOutlineFilter, HiOutlineRefresh } from 'react-icons/hi'

export default function ExplorePage() {
  const [filterLocation, setFilterLocation] = useState('')
  const [filterBudget, setFilterBudget] = useState('')
  const [filterType, setFilterType] = useState('')

  const handleReset = () => {
    setFilterLocation('')
    setFilterBudget('')
    setFilterType('')
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <section className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="section-chip">Browse Student Housing</span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold text-[#16110b] sm:text-4xl">
              Explore verified hostels & rooms
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#2f261d]/75">
              Filter by campus neighborhood, maximum monthly budget, or room setup. All spaces are physically verified for Ghanaian university students.
            </p>
          </div>

          <Link
            to="/areas"
            className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#1f2937] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#111827]"
          >
            Explore Neighborhoods
          </Link>
        </div>
      </section>

      {/* Filter Section */}
      <section className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
          <div className="flex items-center gap-2 font-heading font-bold text-[#16110b]">
            <HiOutlineFilter className="h-5 w-5 text-[#a67c52]" />
            <span>Filter Housing</span>
          </div>
          {(filterLocation || filterBudget || filterType) && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-bold text-[#a67c52] hover:underline"
            >
              <HiOutlineRefresh className="h-3.5 w-3.5" />
              Reset Filters
            </button>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Location Filter */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]/70">
              Location / Neighborhood
            </label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="glass-input cursor-pointer font-medium"
            >
              <option value="">All Neighborhoods</option>
              <option value="Achimota">Achimota</option>
              <option value="Tesano">Tesano (GCTU Area)</option>
              <option value="Abeka">Abeka</option>
              <option value="Legon">Legon (UG Area)</option>
              <option value="Accra">Accra</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]/70">
              Max Monthly Budget (GHS)
            </label>
            <select
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
              className="glass-input cursor-pointer font-medium"
            >
              <option value="">Any Price Range</option>
              <option value="750">Up to GHS 750</option>
              <option value="1000">Up to GHS 1,000</option>
              <option value="1200">Up to GHS 1,200</option>
              <option value="1500">Up to GHS 1,500</option>
            </select>
          </div>

          {/* Room Type Filter */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]/70">
              Room Category
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="glass-input cursor-pointer font-medium"
            >
              <option value="">All Room Types</option>
              <option value="Studio">Self-contained Studio</option>
              <option value="Shared">Shared Room</option>
              <option value="Single">Private Single Room</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <ListingGrid
        filterLocation={filterLocation}
        filterBudget={filterBudget}
        filterType={filterType}
      />
    </div>
  )
}


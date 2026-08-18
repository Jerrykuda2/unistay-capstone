import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineArrowRight, HiOutlineShieldCheck, HiCheckCircle } from 'react-icons/hi'

export default function WelcomeCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:5000'
      const res = await fetch(`${apiBase}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })


      const data = await res.json()
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token)
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user))
        }
        setSuccess('Authentication successful! Welcome back.')
        setTimeout(() => navigate('/'), 600)
      } else {
        setError(data.error || 'Invalid credentials. Please try again.')
      }
    } catch (err) {
      console.error('WelcomeCard login error:', err)
      setError('Failed to reach backend server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-3xl border border-black/10 bg-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="section-chip">Student Portal</span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-[#16110b]">
            Sign in to continue
          </h2>
        </div>
        <span className="inline-flex rounded-full border border-black/10 bg-[#f8efe6] px-3 py-1 text-xs font-bold text-[#a67c52]">
          Encrypted
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-[#2f261d]/75 sm:text-sm">
        Access your saved rooms, apply for verified student hostels, and manage landlord contacts.
      </p>

      {error && (
        <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-700 border border-emerald-100">
          <HiCheckCircle className="h-4 w-4 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
            Email Address
          </label>
          <div className="relative">
            <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="student@gctu.edu.gh"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input glass-input-icon"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
            Password
          </label>
          <div className="relative">
            <HiOutlineLockClosed className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input glass-input-icon"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="soft-button mt-2 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.01]"
        >
          {loading ? 'Authenticating...' : 'Sign In Now'}
          <HiOutlineArrowRight className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 text-xs text-[#2f261d]/75">
        <span>Need an account?</span>
        <Link to="/login" className="font-bold text-[#a67c52] hover:underline">
          Create student profile
        </Link>
      </div>
    </div>
  )
}
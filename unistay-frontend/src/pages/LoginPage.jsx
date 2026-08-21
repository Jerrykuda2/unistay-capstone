import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineArrowRight, HiOutlineShieldCheck } from 'react-icons/hi'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    setError('')
    setSuccessMessage('')
    setIsSubmitting(true)

    try {
      // Connect directly to your local Express server
      const res = await fetch('api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok && data.token) {
        // Securely store the JWT and user data
        localStorage.setItem('token', data.token)
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user))
        }
        setSuccessMessage('Login successful! Redirecting...')
        setTimeout(() => navigate('/'), 800)
      } else {
        setError(data.error || 'Invalid email or password.')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Unable to connect to authentication server. Please check your backend connection on port 5000.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-[0_20px_50px_rgba(22,17,11,0.08)] sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f2937] text-lg font-bold text-[#c7a57a]">
            U
          </div>
          <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#a67c52]">
            Student Portal
          </span>
          <h1 className="mt-1 font-heading text-2xl font-extrabold text-[#16110b] sm:text-3xl">
            Welcome Back
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-[#2f261d]/70 sm:text-sm">
            Sign in to manage your saved rooms and communicate directly with landlords.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
              Email Address
            </label>
            <div className="relative">
              <HiOutlineMail className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input glass-input-icon w-full"
                style={{ paddingLeft: '2.75rem' }}
                placeholder="student@gctu.edu.gh"
              />
            </div>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
                Password
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-[#a67c52] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <HiOutlineLockClosed className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input glass-input-icon w-full"
                style={{ paddingLeft: '2.75rem' }}
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-100">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-700 border border-emerald-100">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="soft-button flex w-full items-center justify-center gap-2 py-3.5 text-sm font-bold text-white bg-[#16110b] rounded-xl mt-4 hover:opacity-90 transition-opacity"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in to Account'}
            <HiOutlineArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-black/5 pt-6 text-center text-xs text-[#2f261d]/70">
          <HiOutlineShieldCheck className="h-4 w-4 text-[#a67c52]" />

        </div>
      </div>
    </div>
  )
}

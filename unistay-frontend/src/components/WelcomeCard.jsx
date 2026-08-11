import { useState } from 'react'

export default function WelcomeCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
  }

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            Welcome back
          </span>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Sign in to continue</h2>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
          Secure
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        Access your saved rooms and keep your search moving with a smoother experience.
      </p>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2f261d]">Email address</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="glass-input"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2f261d]">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="glass-input"
          />
        </div>

        <button type="submit" className="soft-button mt-2 flex items-center justify-center gap-2 py-3">
          Sign in <span>→</span>
        </button>
      </form>

      <p className="mt-2 text-center text-sm text-[#5f5349]">
        New here?{' '}
        <a className="font-semibold text-[#8b6a3a] underline-offset-4 hover:underline">Create an account</a>
      </p>
    </div>
  )
}
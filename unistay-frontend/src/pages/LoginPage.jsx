import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    setError('')
    navigate('/')
  }

  useEffect(() => {
    // load Google Identity Services script if not already loaded
    if (typeof window !== 'undefined' && !window.google) {
      const s = document.createElement('script')
      s.src = 'https://accounts.google.com/gsi/client'
      s.async = true
      s.defer = true
      document.head.appendChild(s)
    }

    // callback for credential response
    window.handleCredentialResponse = async (response) => {
      try {
        const id_token = response.credential
        // send id_token to backend for verification/creation
        const r = await fetch('/api/users/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_token }),
        })

        const data = await r.json()
        if (r.ok) {
          // store token (example) and navigate
          localStorage.setItem('token', data.token)
          navigate('/')
        } else {
          setError(data.error || 'Google sign-in failed')
        }
      } catch (err) {
        setError('Google sign-in error')
      }
    }

    // initialize once script is loaded
    const initInterval = setInterval(() => {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || ''
      const devMode = import.meta.env.VITE_GOOGLE_OAUTH_DISABLED === 'true'
      if (window.google && clientId && !devMode) {
        window.google.accounts.id.initialize({ client_id: clientId, callback: window.handleCredentialResponse })
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          { theme: 'outline', size: 'large', width: '280' }
        )
        clearInterval(initInterval)
      }

      // Dev mode: attach click handler to dev button if present
      if ((!clientId || devMode) && document.getElementById('google-dev-button')) {
        const btn = document.getElementById('google-dev-button')
        btn.onclick = async () => {
          const email = window.prompt('Enter dev email to sign in with (example: student@university.edu)')
          if (!email) return
          try {
            const r = await fetch('/api/users/google', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, first_name: 'Dev', last_name: 'User' }),
            })
            const data = await r.json()
            if (r.ok) {
              localStorage.setItem('token', data.token)
              navigate('/')
            } else {
              setError(data.error || 'Dev Google sign-in failed')
            }
          } catch (err) {
            setError('Dev Google sign-in error')
          }
        }
        clearInterval(initInterval)
      }
    }, 300)

    return () => clearInterval(initInterval)
  }, [navigate])

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Student portal</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900">Sign in to UniStay</h1>
          <p className="mt-3 text-sm text-slate-600">Access your saved listings and manage hostel requests.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              placeholder="student@university.edu"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-900">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sign in
          </button>
          <div className="mt-3" id="google-signin-button" />
        </form>
      </div>
    </div>
  )
}

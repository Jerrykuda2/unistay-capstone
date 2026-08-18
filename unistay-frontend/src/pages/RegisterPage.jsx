import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineArrowRight, HiOutlineShieldCheck, HiOutlineIdentification } from 'react-icons/hi'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('student')
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError('Please fill in all fields.')
            return
        }

        setError('')
        setSuccessMessage('')
        setIsSubmitting(true)

        try {
            // Connect directly to your local Express server's registration route
            const res = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role }),
            })

            const data = await res.json()

            if (res.ok) {
                setSuccessMessage('Account created successfully! Redirecting to login...')
                setTimeout(() => navigate('/login'), 1500)
            } else {
                setError(data.error || 'Registration failed. Please try again.')
            }
        } catch (err) {
            console.error('Registration error:', err)
            setError('Unable to connect to the server. Please check your backend connection.')
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
                        Join UniStay
                    </span>
                    <h1 className="mt-1 font-heading text-2xl font-extrabold text-[#16110b] sm:text-3xl">
                        Create Account
                    </h1>
                    <p className="mt-2 text-xs leading-relaxed text-[#2f261d]/70 sm:text-sm">
                        Sign up to post hostels or find your perfect off-campus room.
                    </p>
                </div>

                <form onSubmit={handleRegister} className="mt-8 space-y-5">
                    <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
                            Full Name
                        </label>
                        <div className="relative">
                            <HiOutlineUser className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="glass-input glass-input-icon w-full"
                                style={{ paddingLeft: '2.75rem' }}
                                placeholder="e.g. Jerry Kuda"
                            />
                        </div>
                    </div>

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
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
                            Password
                        </label>
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

                    <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#2f261d]">
                            Account Type
                        </label>
                        <div className="relative">
                            <HiOutlineIdentification className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="glass-input glass-input-icon w-full appearance-none bg-transparent"
                                style={{ paddingLeft: '2.75rem' }}
                            >
                                <option value="student">Student (Looking for rooms)</option>
                                <option value="landlord">Landlord (Posting rooms)</option>
                            </select>
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
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                        <HiOutlineArrowRight className="h-4 w-4" />
                    </button>
                </form>

                <div className="relative my-6 text-center">
                    <hr className="border-black/10" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-400">
                        or
                    </span>
                </div>

                <div className="text-center">
                    <p className="text-xs text-[#2f261d]/70">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-[#a67c52] hover:underline">
                            Sign in here
                        </Link>
                    </p>
                </div>

                {/* <div className="mt-8 flex items-center justify-center gap-2 border-t border-black/5 pt-6 text-center text-xs text-[#2f261d]/70">
                    <HiOutlineShieldCheck className="h-4 w-4 text-[#a67c52]" />
                    <span>Encrypted SSL 256-bit Student Authentication</span>
                </div> */}
            </div>
        </div>
    )
}
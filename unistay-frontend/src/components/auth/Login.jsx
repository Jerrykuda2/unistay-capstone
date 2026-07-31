import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // This is where we will map your JWT fetch request to your Node.js backend
    console.log("Login submitted for:", email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream px-4">
      <div className="w-full max-w-md rounded-lg border border-brand-light-brown bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-brand-black">Welcome to UniStay</h2>
          <p className="mt-2 text-brand-gray">Sign in to find your ideal housing.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-brand-gray">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-brand-light-brown p-2.5 text-brand-black outline-none focus:border-brand-gray focus:ring-1 focus:ring-brand-gray"
              placeholder="student@university.edu"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-brand-gray">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-brand-light-brown p-2.5 text-brand-black outline-none focus:border-brand-gray focus:ring-1 focus:ring-brand-gray"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full rounded-md bg-brand-lavender px-4 py-3 font-bold text-brand-black transition duration-200 hover:bg-brand-light-brown hover:text-white shadow-sm"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-gray">
          Don't have an account?{' '}
          <span className="cursor-pointer font-bold text-brand-black underline hover:text-brand-light-brown">
            Sign up as a Student or Landlord
          </span>
        </p>
      </div>
    </div>
  );
}
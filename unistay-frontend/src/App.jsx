import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import AreasPage from './pages/AreasPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-10 sm:px-6 lg:px-8">
      <Navbar />

      <main className="page-shell mx-auto flex min-h-screen flex-col gap-6 pt-24 lg:pt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
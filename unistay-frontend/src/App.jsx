import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import AreasPage from './pages/AreasPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#2f261d]">
      <Navbar />

      <main className="page-shell mx-auto flex min-h-screen flex-col gap-6 px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/areas" element={<AreasPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
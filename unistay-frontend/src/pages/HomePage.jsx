import HeroSection from '../components/HeroSection'
import FeaturedHomes from '../components/FeaturedHomes'
import NeighborhoodSection from '../components/NeighborhoodSection'
import WhyChooseUs from '../components/WhyChooseUs'
import WelcomeCard from '../components/WelcomeCard'
import RoomDashboard from '../components/RoomDashboard'
import PostRoomCard from '../components/PostRoomCard'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <HeroSection />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <FeaturedHomes />
        <NeighborhoodSection />
      </div>

      <WhyChooseUs />

      <div className="grid gap-6 lg:grid-cols-3">
        <WelcomeCard />
        <RoomDashboard />
        <PostRoomCard />
      </div>
    </div>
  )
}

import ListingCard from './ListingCard'
import hostelImg from '../assets/hostel.jpg'
import insideHostelImg from '../assets/Inside hostel.jpg'
import whiteHostelImg from '../assets/White Hostel.jpg'

const sampleHomes = [
  {
    id: 1,
    title: 'Modern Studio in Achimota',
    price: '1,050',
    location: 'Near University of Ghana road',
    description: 'Ideal for coding students, equipped with high-speed Wi-Fi and quiet shared study workspaces.',
    image_url: whiteHostelImg,
  },
  {
    id: 2,
    title: 'Bright Shared Flat in Tesano',
    price: '900',
    location: 'Quiet street, 5 mins from GCTU',
    description: 'A peaceful, community-focused hostel option with 24/7 water backup and backup generator.',
    image_url: insideHostelImg,
  },
  {
    id: 3,
    title: 'Private Room in Abeka',
    price: '750',
    location: 'Close to transit & local markets',
    description: 'Balanced comfort and budget for students who value privacy and quick campus access.',
    image_url: hostelImg,
  },
]

export default function FeaturedHomes() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sampleHomes.map((home) => (
        <ListingCard key={home.id} listing={home} />
      ))}
    </div>
  )
}



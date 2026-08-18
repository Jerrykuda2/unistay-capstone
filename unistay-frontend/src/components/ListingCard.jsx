import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function ListingCard({ listing }) {
  const {
    id = 1,
    title = 'Modern Student Room',
    price,
    rent_amount,
    description = 'Spacious and well-lit room close to campus, equipped with high-speed internet and quiet study desk.',
    location = 'Near GCTU Campus',
    distance_to_campus,
    image_url,
    images = [],
  } = listing || {}

  const displayPrice = price ?? rent_amount ?? '850'
  const imageSrc = image_url || images?.[0] || '/Background.jpg'

  return (
    <Link
      to={`/listing/${id}`}
      className="
        group
        flex
        w-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-black/10
        bg-white
        p-3.5
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-[0_20px_40px_rgba(22,17,11,0.08)]
      "
    >
      {/* Image container with subtle zoom on hover */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100">
        <img
          src={imageSrc}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        {/* Title + Price Badge on the same row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-heading text-lg font-bold leading-tight tracking-tight text-[#16110b] group-hover:text-[#a67c52] transition-colors">
            {title}
          </h3>

          <span className="shrink-0 rounded-full bg-[#f8efe6] px-3 py-1 text-xs font-bold text-[#a67c52] border border-[#c7a57a]/20">
            GHS {displayPrice}/mo
          </span>
        </div>

        {/* Description - max 2 lines */}
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[#2f261d]/70">
          {description}
        </p>

        {/* Location with HiOutlineLocationMarker */}
        <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-medium text-[#2f261d]/60">
          <HiOutlineLocationMarker className="h-4 w-4 shrink-0 text-[#a67c52]" />
          <span className="truncate">
            {location || (distance_to_campus ? `${distance_to_campus} km to campus` : 'Near campus')}
          </span>
        </div>
      </div>
    </Link>
  )
}
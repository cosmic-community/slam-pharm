import Link from 'next/link';
import type { Collection } from '@/types';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const coverImage = collection.metadata?.cover_image;
  const photoCount = collection.metadata?.photos?.length || 0;

  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group relative overflow-hidden rounded-xl photo-hover block bg-surface-900 aspect-[4/5]"
    >
      {coverImage ? (
        <img
          src={`${coverImage.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={400}
          height={500}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-surface-800 flex items-center justify-center">
          <div className="text-6xl">🖼️</div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-surface-50 font-bold text-xl mb-1 group-hover:text-brand-300 transition-colors">
          {collection.title}
        </h3>
        {collection.metadata?.description && (
          <p className="text-surface-400 text-sm line-clamp-2 mb-3">
            {collection.metadata.description}
          </p>
        )}
        <div className="flex items-center gap-2 text-surface-500 text-xs font-medium uppercase tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {photoCount} photo{photoCount !== 1 ? 's' : ''}
        </div>
      </div>
    </Link>
  );
}
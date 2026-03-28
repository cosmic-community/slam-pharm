'use client';

import type { Photo } from '@/types';

interface PhotoCardProps {
  photo: Photo;
  onClick?: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const image = photo.metadata?.image;
  const location = photo.metadata?.location;
  const cameraLens = photo.metadata?.camera_lens;

  if (!image) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl photo-hover cursor-pointer w-full text-left block bg-surface-900"
    >
      <img
        src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
        alt={photo.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        width={400}
        height={300}
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-surface-50 font-semibold text-lg mb-1 line-clamp-1">
            {photo.title}
          </h3>
          <div className="flex items-center gap-3 text-surface-400 text-sm">
            {location && (
              <span className="flex items-center gap-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {location}
              </span>
            )}
            {cameraLens && (
              <span className="flex items-center gap-1">
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
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {cameraLens}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
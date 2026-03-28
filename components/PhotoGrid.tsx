'use client';

import { useState } from 'react';
import type { Photo } from '@/types';
import PhotoCard from '@/components/PhotoCard';
import Lightbox from '@/components/Lightbox';

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photosWithImages = photos.filter(
    (photo) => photo.metadata?.image?.imgix_url
  );

  if (photosWithImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-surface-500">No photos to display.</p>
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {photosWithImages.map((photo, index) => (
          <div key={photo.id} className="break-inside-avoid">
            <PhotoCard
              photo={photo}
              onClick={() => setLightboxIndex(index)}
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photosWithImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
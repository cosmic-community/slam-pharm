import type { Metadata } from 'next';
import PhotoGrid from '@/components/PhotoGrid';
import { getPhotos } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Gallery — Slam Pharm',
  description: 'Browse the complete photography gallery.',
};

export const revalidate = 60;

export default async function GalleryPage() {
  const photos = await getPhotos();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-3">
            Explore
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-50 mb-4">
            Gallery
          </h1>
          <p className="text-surface-400 text-lg max-w-2xl">
            A complete collection of photographs capturing moments, places, and
            stories.
          </p>
          {photos.length > 0 && (
            <p className="text-surface-500 text-sm mt-2">
              {photos.length} photo{photos.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Photo Grid */}
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-surface-300 mb-2">
              No photos yet
            </h3>
            <p className="text-surface-500">
              Photos will appear here once added to the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
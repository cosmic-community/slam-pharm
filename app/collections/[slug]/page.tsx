// app/collections/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import PhotoGrid from '@/components/PhotoGrid';
import { getCollectionBySlug, getCollections } from '@/lib/cosmic';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    return { title: 'Collection Not Found — Slam Pharm' };
  }

  return {
    title: `${collection.title} — Slam Pharm`,
    description:
      collection.metadata?.description || `Photos from ${collection.title}`,
  };
}

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections.map((c) => ({ slug: c.slug }));
}

export const revalidate = 60;

export default async function CollectionDetailPage({
  params,
}: CollectionPageProps) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const coverImage = collection.metadata?.cover_image;
  const photos = collection.metadata?.photos || [];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {coverImage ? (
          <img
            src={`${coverImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-surface-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-surface-300 hover:text-brand-400 transition-colors text-sm mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Collections
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-50 mb-4">
              {collection.title}
            </h1>
            {collection.metadata?.description && (
              <p className="text-surface-300 text-lg max-w-2xl">
                {collection.metadata.description}
              </p>
            )}
            {photos.length > 0 && (
              <p className="text-surface-500 text-sm mt-3">
                {photos.length} photo{photos.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Photos */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {photos.length > 0 ? (
            <PhotoGrid photos={photos} />
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-surface-300 mb-2">
                No photos in this collection yet
              </h3>
              <p className="text-surface-500">
                Photos will appear here once added.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
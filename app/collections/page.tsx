import type { Metadata } from 'next';
import CollectionCard from '@/components/CollectionCard';
import { getCollections } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Collections — Slam Pharm',
  description: 'Browse curated photography collections.',
};

export const revalidate = 60;

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-3">
            Curated
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-50 mb-4">
            Collections
          </h1>
          <p className="text-surface-400 text-lg max-w-2xl">
            Explore themed collections of photographs, each telling a unique
            visual story.
          </p>
        </div>

        {/* Collections Grid */}
        {collections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-semibold text-surface-300 mb-2">
              No collections yet
            </h3>
            <p className="text-surface-500">
              Collections will appear here once added to the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
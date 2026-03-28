import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import PhotoGrid from '@/components/PhotoGrid';
import CollectionCard from '@/components/CollectionCard';
import TestimonialCard from '@/components/TestimonialCard';
import { getPhotos, getCollections, getTestimonials } from '@/lib/cosmic';

export const revalidate = 60;

export default async function HomePage() {
  const [photos, collections, testimonials] = await Promise.all([
    getPhotos(),
    getCollections(),
    getTestimonials(),
  ]);

  const featuredPhotos = photos.slice(0, 6);
  const featuredCollections = collections.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection photos={photos} />

      {/* Featured Photos */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-2">
                Gallery
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-50">
                Featured Photos
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium flex items-center gap-2"
            >
              View All
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <PhotoGrid photos={featuredPhotos} />
        </div>
      </section>

      {/* Collections */}
      {featuredCollections.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-20 bg-surface-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-2">
                  Curated
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-surface-50">
                  Collections
                </h2>
              </div>
              <Link
                href="/collections"
                className="text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium flex items-center gap-2"
              >
                View All
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCollections.map((collection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-2">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-surface-50">
                What Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
            {testimonials.length > 3 && (
              <div className="text-center mt-10">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500/10 text-brand-400 border border-brand-500/30 rounded-lg hover:bg-brand-500/20 transition-colors text-sm font-medium"
                >
                  See All Testimonials
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-gradient-to-b from-surface-900/50 to-surface-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6">
            Let&apos;s Create Together
          </h2>
          <p className="text-surface-400 text-lg mb-8 leading-relaxed">
            Whether it&apos;s a wedding, portrait session, or commercial shoot —
            I&apos;d love to hear about your vision.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium"
          >
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
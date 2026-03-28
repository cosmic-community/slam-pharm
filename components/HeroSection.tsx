import Link from 'next/link';
import type { Photo } from '@/types';

interface HeroSectionProps {
  photos: Photo[];
}

export default function HeroSection({ photos }: HeroSectionProps) {
  const heroPhoto = photos[0];
  const heroImage = heroPhoto?.metadata?.image;

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      {heroImage ? (
        <img
          src={`${heroImage.imgix_url}?w=2400&h=1600&fit=crop&auto=format,compress&q=80`}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-surface-900 to-surface-950" />
      )}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/50 to-surface-950/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="text-brand-400 text-sm font-medium tracking-[0.2em] uppercase mb-4 animate-fade-in">
              Creative Photography
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-surface-50 leading-[0.95] mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Slam
              <br />
              <span className="text-gradient">Pharm</span>
            </h1>
            <p
              className="text-surface-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Capturing moments that tell stories. Explore a world of light,
              shadow, and emotion through the lens.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium"
              >
                Explore Gallery
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
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-8 py-4 border border-surface-600 text-surface-200 rounded-lg hover:border-surface-400 hover:text-surface-50 transition-colors font-medium"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-surface-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
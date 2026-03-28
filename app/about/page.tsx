import type { Metadata } from 'next';
import { getAbout } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'About — Slam Pharm',
  description: 'Learn more about the photographer behind Slam Pharm.',
};

export const revalidate = 60;

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {about ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Profile Photo */}
            <div className="relative">
              {about.metadata?.profile_photo ? (
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={`${about.metadata.profile_photo.imgix_url}?w=1200&h=1400&fit=crop&auto=format,compress`}
                    alt={about.title}
                    className="w-full h-auto object-cover"
                    width={600}
                    height={700}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/40 to-transparent" />
                </div>
              ) : (
                <div className="aspect-[5/6] bg-surface-800 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">👤</div>
                </div>
              )}
            </div>

            {/* Bio Content */}
            <div className="lg:sticky lg:top-28">
              <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-3">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-surface-50 mb-4">
                {about.metadata?.heading || about.title}
              </h1>

              {about.metadata?.bio && (
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-surface-300 leading-relaxed text-lg whitespace-pre-line">
                    {about.metadata.bio}
                  </p>
                </div>
              )}

              {about.metadata?.contact_email && (
                <div className="mt-10 pt-8 border-t border-surface-800">
                  <p className="text-surface-500 text-sm font-medium tracking-wide uppercase mb-3">
                    Get in touch
                  </p>
                  <a
                    href={`mailto:${about.metadata.contact_email}`}
                    className="inline-flex items-center gap-3 text-brand-400 hover:text-brand-300 transition-colors text-lg font-medium group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {about.metadata.contact_email}
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-xl font-semibold text-surface-300 mb-2">
              About section coming soon
            </h3>
            <p className="text-surface-500">
              Content will appear here once added to the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
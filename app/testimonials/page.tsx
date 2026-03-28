import type { Metadata } from 'next';
import TestimonialCard from '@/components/TestimonialCard';
import { getTestimonials } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Testimonials — Slam Pharm',
  description: 'Read what clients say about working with Slam Pharm.',
};

export const revalidate = 60;

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-widest uppercase mb-3">
            Feedback
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface-50 mb-4">
            Client Testimonials
          </h1>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Kind words from clients who trusted me to capture their special
            moments.
          </p>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-surface-300 mb-2">
              No testimonials yet
            </h3>
            <p className="text-surface-500">
              Testimonials will appear here once added to the CMS.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
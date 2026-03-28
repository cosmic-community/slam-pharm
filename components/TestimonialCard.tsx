import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const clientPhoto = testimonial.metadata?.client_photo;
  const clientName = testimonial.metadata?.client_name || testimonial.title;
  const clientRole = testimonial.metadata?.client_role;
  const quote = testimonial.metadata?.quote;

  return (
    <div className="glass rounded-xl p-6 flex flex-col h-full">
      {/* Quote Icon */}
      <div className="text-brand-500/40 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Text */}
      {quote && (
        <p className="text-surface-300 leading-relaxed flex-1 mb-6 text-[15px]">
          &ldquo;{quote}&rdquo;
        </p>
      )}

      {/* Client Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-surface-700/50">
        {clientPhoto ? (
          <img
            src={`${clientPhoto.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={clientName}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-500/20"
            width={40}
            height={40}
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-surface-700 flex items-center justify-center text-surface-400 text-sm font-bold">
            {clientName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-surface-50 font-medium text-sm">{clientName}</p>
          {clientRole && (
            <p className="text-surface-500 text-xs">{clientRole}</p>
          )}
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800/50 bg-surface-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-surface-50"
            >
              Slam<span className="text-brand-400">Pharm</span>
            </Link>
            <p className="text-surface-500 text-sm mt-3 max-w-xs">
              Creative photography portfolio showcasing stories through the
              lens.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-surface-300 text-sm font-semibold uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/gallery"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/collections"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                Testimonials
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-surface-300 text-sm font-semibold uppercase tracking-wider mb-4">
              Powered By
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                Cosmic CMS
              </a>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface-500 hover:text-brand-400 transition-colors text-sm"
              >
                Next.js
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-800/50 mt-10 pt-8 text-center">
          <p className="text-surface-600 text-sm">
            &copy; {currentYear} Slam Pharm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
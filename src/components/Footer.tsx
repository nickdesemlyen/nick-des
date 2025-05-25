import React from 'react';
import { Mail, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Books', path: '/books' },
    { name: 'Articles', path: '/articles' },
    { name: 'Podcasts', path: '/podcasts' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            <a href="mailto:nick@empiremagazine.com" className="text-black hover:text-black hover:underline transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://twitter.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:underline transition-colors">
              <Twitter size={24} />
              <span className="sr-only">X (Twitter)</span>
            </a>
            <a href="https://bsky.app/profile/nickdesemlyen.bsky.social" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:underline transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm.5 5.313c1.665 0 3.014.927 3.014 2.07 0 .62-.344 1.12-1.1 1.62-.766.474-1.186.927-1.186 1.31v.927h-1.482v-.872c0-.927.62-1.583 1.482-2.057.766-.474 1.087-.872 1.087-1.274 0-.51-.474-.872-1.159-.872-.729 0-1.258.4-1.367 1.018l-1.466-.29c.218-1.31 1.33-2.58 3.177-2.58zm-.164 7.124c.51 0 .947.4.947.91a.93.93 0 01-.947.909.93.93 0 01-.946-.91c0-.509.4-.91.946-.91z"/>
              </svg>
              <span className="sr-only">Bluesky</span>
            </a>
            <a href="https://instagram.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black hover:underline transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm text-black hover:text-black hover:underline transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <p className="text-black text-xs">
            © {new Date().getFullYear()} Nick de Semlyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
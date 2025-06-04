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
              <img 
                src="/images/bluesky-social-media-3csnef5yovxtuqmp2416qd.webp"
                alt="Bluesky"
                className="w-6 h-6"
              />
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
import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Twitter, Instagram } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <SectionHeading 
              title="Get In Touch"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Mail size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                  <a href="mailto:nick@empiremagazine.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                    nick@empiremagazine.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Twitter size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">X (Twitter)</h3>
                  <a href="https://twitter.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                    @nickdesemlyen
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/images/bluesky-social-media-3csnef5yovxtuqmp2416qd.webp"
                    alt="Bluesky"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Bluesky</h3>
                  <a href="https://bsky.app/profile/nickdesemlyen.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                    @nickdesemlyen.bsky.social
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Instagram size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Instagram</h3>
                  <a href="https://instagram.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                    @nickdesemlyen
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
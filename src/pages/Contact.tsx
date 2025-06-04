import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Twitter, Instagram } from 'lucide-react';
// import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Get In Touch"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Mail size={20} className="text-gray-600" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <a href="mailto:nick@empiremagazine.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                      nick@empiremagazine.com
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Twitter size={20} className="text-gray-600" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">X (Twitter)</h3>
                    <a href="https://twitter.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                      @nickdesemlyen
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <img 
                        src="/images/bluesky-social-media-3csnef5yovxtuqmp2416qd.webp"
                        alt="Bluesky"
                        className="w-5 h-5"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Bluesky</h3>
                    <a href="https://bsky.app/profile/nickdesemlyen.bsky.social" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                      @nickdesemlyen.bsky.social
                    </a>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Instagram size={20} className="text-gray-600" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Instagram</h3>
                    <a href="https://instagram.com/nickdesemlyen" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition-colors">
                      @nickdesemlyen
                    </a>
                  </div>
                </div>
              </div>
              
              {/* <ContactForm /> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
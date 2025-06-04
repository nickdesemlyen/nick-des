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
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600">
                    <path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5zm.979 4.485c3.172.12 4.116 2.391 4.116 2.391.006.015.01.029.013.045-.624-.275-1.225-.388-1.225-.388l.066.132c.004.009.01.016.014.024.057.096.106.181.106.181 1.48.767 1.681 2.359 1.681 2.359-.895-1.094-2.75-1.13-2.75-1.13l-.367.409c1.459.441 2.118 1.346 2.118 1.346-1.446 1.556-3.816 1.444-3.816 1.444l-.262-.308c-.001-.002-.003-.003-.004-.005l-.082-.096c.433.125.885.19 1.344.19 1.188 0 2.239-.409 2.239-.409-.644-1.694-2.674-1.694-2.674-1.694.012.001-1.021-.02-1.894.775-.015.014-.031.026-.046.04l-.003.003-.014.012-.028.024-.003.002c-.014.013-.028.025-.043.036-.013.011-.025.023-.038.034l-.003.003c-.013.011-.026.022-.038.034l-.003.003-.032.029-.008.006-.03.027-.004.004-.03.027-.004.004c-.01.009-.019.018-.028.027l-.008.007-.023.023-.009.008-.021.021-.01.01-.019.019-.011.01-.018.018-.011.011-.016.016-.012.012-.014.014-.013.013-.012.012-.013.013-.011.011-.013.013-.01.01-.013.013-.009.009-.013.013-.008.008-.013.013-.007.007-.013.013-.006.006-.013.013-.004.005-.013.013-.004.004-.013.013-.002.003-.013.013-.002.002-.013.013-.001.001-.013.013h-.001l-.013.013h-.001l-.012.013-.001.001-.011.012-.002.002-.01.01-.003.003-.009.009-.003.003-.009.009-.004.004-.007.008-.004.004-.007.007-.005.005-.006.006-.005.005-.005.005-.005.006-.004.004-.006.006-.003.004-.005.005-.004.004-.004.004-.004.004-.003.003-.004.004-.003.003-.003.003-.003.004-.003.003-.002.002-.003.003-.002.002-.002.002-.002.002-.001.002-.002.002-.001.001-.001.001-.001.002v.001l-.001.001v.001h-.001v.001h-.001c-.899.795-1.907.774-1.907.774-2.674 0-2.674 1.694-2.674 1.694s1.051.409 2.239.409c.458 0 .911-.065 1.344-.19l-.087.101c-.001.002-.003.003-.004.005l-.262.308s-2.37.112-3.816-1.444c0 0 .659-.905 2.118-1.346l-.367-.409s-1.855.036-2.75 1.13c0 0 .201-1.592 1.681-2.359 0 0 .049-.085.106-.181.004-.008.01-.015.014-.024l.066-.132s-.601.113-1.225.388c.003-.016.007-.03.013-.045 0 0 .944-2.271 4.116-2.391 0 0 .139-.227.403-.388-.782-.111-1.007-.308-1.007-.308s2.161-.509 4.018.43c0 0-.225.197-1.007.308.264.161.403.388.403.388z"/>
                  </svg>
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
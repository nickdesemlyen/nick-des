import React from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Home: React.FC = () => {
  return (
    <>
      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <img 
                  src="./images/nick.png" 
                  alt="Nick de Semlyen" 
                  className="rounded-lg shadow-xl w-full max-w-lg"
                />
                <p className="mt-2 text-sm text-gray-500 italic">Photo: © Steve Schofield</p>
              </div>
            </div>
            
            <div>
              <SectionHeading 
                title="Nick de Semlyen"
                className="text-4xl md:text-5xl lg:text-6xl"
                reducedMargin
              />
              
              <div>
                <p className="text-gray-700 mb-6">
                  Nick de Semlyen is the Editor of Empire magazine and has worked as a film journalist for over 20 years. He has interviewed a wide range of actors and directors and has been involved in organising reunions for the casts of classic films. His work has earned him several industry awards, including Editor of the Year in 2023.
                </p>

                <p className="text-gray-700 mb-6">
                  Outside of journalism, he has written two books: Wild And Crazy Guys (2019), about 1980s comedy stars, and The Last Action Heroes (2023), focusing on action film icons. He also appears on TV, radio, and podcasts to talk about film history and trends.
                </p>
                
                <a 
                  href="/about" 
                  className="inline-flex items-center font-medium text-navy-800 hover:text-gold-600 transition-colors"
                >
                  Read more <ChevronDown size={16} className="ml-1 transform rotate-270" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Articles */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-full max-w-[300px] aspect-[3/4] relative mx-auto mb-6">
                <img 
                  src="./images/articles/irishman.jpg"
                  alt="Empire Magazine The Irishman cover"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4">Articles</h3>
              <p className="text-gray-600 mb-6">
                Set visits, previews and profiles.
              </p>
              <a 
                href="/articles" 
                className="inline-flex items-center font-medium text-navy-800 hover:text-gold-600 transition-colors"
              >
                Read articles <ChevronDown size={16} className="ml-1 transform rotate-270" />
              </a>
            </div>
            
            {/* Books */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-full max-w-[300px] aspect-[3/4] relative mx-auto mb-6">
                <img 
                  src="./images/books/lastactionheroes.jpg" 
                  alt="Last Action Heroes book cover"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4">Books</h3>
              <p className="text-gray-600 mb-6">
                Non-fiction about cinema history.
              </p>
              <a 
                href="/books" 
                className="inline-flex items-center font-medium text-navy-800 hover:text-gold-600 transition-colors"
              >
                View books <ChevronDown size={16} className="ml-1 transform rotate-270" />
              </a>
            </div>
            
            {/* Podcasts */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-full max-w-[300px] aspect-[3/4] relative mx-auto mb-6">
                <img 
                  src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg"
                  alt="Professional microphone setup"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4">Podcasts</h3>
              <p className="text-gray-600 mb-6">
                Guest appearances on film and entertainment shows.
              </p>
              <a 
                href="/podcasts" 
                className="inline-flex items-center font-medium text-navy-800 hover:text-gold-600 transition-colors"
              >
                Listen now <ChevronDown size={16} className="ml-1 transform rotate-270" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
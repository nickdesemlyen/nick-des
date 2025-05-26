import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Podcasts: React.FC = () => {
  const podcasts = [
    {
      title: "TEST 4",
      episode: "Episode 500: Special Edition",
      description: "A deep dive into the evolution of comedy in cinema, from the silent era to modern blockbusters.",
      date: "February 2025",
      imageUrl: "./images/articles/irishman.jpg",
      appleUrl: "https://podcasts.apple.com/podcast/id507987292",
      spotifyUrl: "https://open.spotify.com/show/7ah8VZF8QxqqHpBV8wv6Lj"
    },
    {
      title: "Films To Be Buried With",
      episode: "Nick de Semlyen",
      description: "Discussing favorite films, career highlights, and the impact of 80s comedy on modern cinema.",
      date: "January 2025",
      imageUrl: "./images/articles/joepesci.jpg",
      appleUrl: "https://podcasts.apple.com/podcast/id1408585620",
      spotifyUrl: "https://open.spotify.com/show/2DFQQHJtHPOL0CqsMYPDQj"
    },
    {
      title: "Kermode and Mayo's Film Review",
      episode: "With Nick de Semlyen",
      description: "A special episode discussing Last Action Heroes and the golden age of action cinema.",
      date: "December 2024",
      imageUrl: "./images/articles/scarface.jpg",
      appleUrl: "https://podcasts.apple.com/podcast/id1020631449",
      spotifyUrl: "https://open.spotify.com/show/7ySxzMXnmEl7YGHv2u18M7"
    }
  ];

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Podcasts"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
            
            <div className="space-y-16">
              {podcasts.map((podcast, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={podcast.imageUrl} 
                        alt={podcast.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8">
                      <p className="text-gold-600 font-medium mb-2">{podcast.date}</p>
                      <h2 className="text-2xl font-bold font-serif text-navy-900 mb-2">{podcast.title}</h2>
                      <h3 className="text-xl text-gray-700 mb-4">{podcast.episode}</h3>
                      <p className="text-gray-600 mb-6">{podcast.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={podcast.appleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                        >
                          Listen on Apple Podcasts
                        </a>
                        <a 
                          href={podcast.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          Listen on Spotify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcasts;
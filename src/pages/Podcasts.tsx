import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Music } from 'lucide-react';

const Podcasts: React.FC = () => {
  const podcasts = [
     {
      title: "The Not Ready for Prime Time Project",
      episode: "S04E18 Michael Palin/James Taylor",
      description: "Dissecting an early episode of Saturday Night Live with hosts Gary Seith and Brad Robinson.",
      date: "May 2025",
      imageUrl: "./images/articles/notreadyfor.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/the-early-years-of-snl-s04e18-michael-palin-james/id1674359942?i=1000710057131",
      spotifyUrl: "https://open.spotify.com/episode/05tUWXpE6EQ3dwaw22jYuX?si=edf82523b2524975"
    },
    {
      title: "Best Movies Never Made",
      episode: "Schwarzenegger's Crusade",
      description: "Journeying into an unmade epic with hosts Stephen Scarlata and Josh Miller.",
      date: "December 2024",
      imageUrl: "./images/articles/bestmovies.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/schwarzeneggers-crusade-part-1-of-2/id1450737048?i=1000678881608",
      spotifyUrl: "https://open.spotify.com/episode/1JgnoNFadGEV6QIclOSs6A?si=E5X8Q05HSBGGoE2ZnzmP5Q"
    },
    {
      title: "Screenshot",
      episode: "Saturday Night Live",
      description: "Talking the history and impact of the long-running US sketch show with Mark Kermode.",
      date: "October 2024",
      imageUrl: "./images/articles/kermode.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/saturday-night-live/id1597470341?i=1000672743993",
      spotifyUrl: "https://open.spotify.com/episode/66SHmdOTw5fwQMxinLVS9L?si=GswztbPATfCtkoMbFS6wxQ"
    },
    {
      title: "Maltin on Movies",
      episode: "Empire Magazine Special",
      description: "Discussing movies and magazines with Leonard and Jessie Maltin.",
      date: "February 2024",
      imageUrl: "./images/articles/maltin.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/nick-de-semlyen/id935760435?i=1000644191534",
      spotifyUrl: "https://open.spotify.com/episode/2hfGffcnIuoPJs160m2HDZ?si=W4wqkSGTQJS2yCM0s8gnFQ"
    },
    {
      title: "90 Minutes or Less",
      episode: "Cobra",
      description: "Chatting Stallone vehicle Cobra (89 mins) with host Sam Clements.",
      date: "October 2023",
      imageUrl: "./images/articles/90mins.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/cobra-with-nick-de-semlyen/id1435004662?i=1000631159390",
      spotifyUrl: "https://open.spotify.com/episode/2Ahigg8xvAzIGcZqUDO5RY?si=PBqlpMH3TtqS1653VicLkg"
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
                    <div className="md:w-1/3 p-4">
                      <img 
                        src={podcast.imageUrl} 
                        alt={podcast.title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-4 md:p-6">
                      <p className="text-gold-600 font-medium mb-2">{podcast.date}</p>
                      <h2 className="text-2xl font-bold font-serif text-navy-900 mb-2">{podcast.title}</h2>
                      <h3 className="text-xl text-gray-700 mb-4">{podcast.episode}</h3>
                      <p className="text-gray-600 mb-4">{podcast.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <a 
                          href={podcast.appleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
                        >
                          <img 
                            src="/images/podcasts/image.png" 
                            alt="Apple Podcasts" 
                            className="w-3.5 h-3.5 mr-1.5" 
                          />
                          Listen on Apple Podcasts
                        </a>
                        <a 
                          href={podcast.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
                        >
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 mr-1.5 text-[#1DB954]">
                            <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                          </svg>
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
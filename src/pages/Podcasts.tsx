import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Podcasts: React.FC = () => {
  const podcasts = [
     {
      title: "THE NOT READY FOR PRIME TIME PROJECT",
      episode: "S04E18 Michael Palin/James Taylor",
      description: "Dissecting an early episode of Saturday Night Live with hosts Gary Seith and Brad Robinson.",
      date: "May 2025",
      imageUrl: "./images/articles/notreadyfor.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/the-early-years-of-snl-s04e18-michael-palin-james/id1674359942?i=1000710057131",
      spotifyUrl: "https://open.spotify.com/episode/05tUWXpE6EQ3dwaw22jYuX?si=edf82523b2524975"
    },
    {
      title: "BEST MOVIES NEVER MADE",
      episode: "Schwarzenegger’s Crusade",
      description: "Journeying into an unmade epic with hosts Stephen Scarlata and Josh Miller.",
      date: "December 2024",
      imageUrl: "./images/articles/bestmovies.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/schwarzeneggers-crusade-part-1-of-2/id1450737048?i=1000678881608",
      spotifyUrl: "https://open.spotify.com/episode/1JgnoNFadGEV6QIclOSs6A?si=E5X8Q05HSBGGoE2ZnzmP5Q"
    },
    {
      title: "SCREENSHOT",
      episode: "Saturday Night Live",
      description: "Talking the history and impact of the long-running US sketch show with Mark Kermode.",
      date: "October 2024",
      imageUrl: "./images/articles/kermode.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/saturday-night-live/id1597470341?i=1000672743993",
      spotifyUrl: "https://open.spotify.com/episode/66SHmdOTw5fwQMxinLVS9L?si=GswztbPATfCtkoMbFS6wxQ"
    },
    {
      title: "MALTIN ON MOVIES",
      episode: "Empire Magazine Special",
      description: "Discussing movies and magazines with Leonard and Jessie Maltin.",
      date: "February 2024",
      imageUrl: "./images/articles/maltin.jpg",
      appleUrl: "https://podcasts.apple.com/gb/podcast/nick-de-semlyen/id935760435?i=1000644191534",
      spotifyUrl: "https://open.spotify.com/episode/2hfGffcnIuoPJs160m2HDZ?si=W4wqkSGTQJS2yCM0s8gnFQ"
    },
    {
      title: "90 MINUTES OR LESS",
      episode: "Cobra",
      description: "Chatting Stallone vehicle Cobra (89 mins) with host Sam Clements, including the actor’s unique serving suggestion for frozen pizza.",
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
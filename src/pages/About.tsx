import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { FileText, Award, Calendar, Film } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <SectionHeading 
                  title="About Nick"
                  className="text-4xl md:text-5xl lg:text-6xl"
                  reducedMargin
                />
                
                <div className="space-y-6 text-gray-700">
                   <p>Nick de Semlyen is the current Editor of <i>Empire</i>, the world's biggest movie magazine. With over 20 years of experience as a film journalist, Nick has established himself as an authoritative voice, interviewing hundreds of actors, directors and industry insiders, from James Cameron and Martin Scorsese to Scarlett Johansson and Al Pacino. He has orchestrated several reunions of the stars of iconic movies, including <i>Gremlins</i>, <i>Lethal Weapon</i>, <i>Three Amigos</i> and <i>The Goonies</i>.</p>

<p>During his time at <i>Empire</i>, Nick has won several awards, including Editor of the Year (BSMEs, 2023), Journalist of the Year (Magazine Media Awards, 2018) and Best Writer (Bauer Media Awards, 2015).</p>

<p>In 2019, Nick published his first book, <i>Wild and Crazy Guys</i>, which received acclaim for its comprehensive exploration of the comedy revolution that transformed Hollywood in the 1980s. The book traces the careers and cultural impact of comedic icons like Bill Murray, Steve Martin, Chevy Chase, John Belushi, Dan Aykroyd, and Eddie Murphy.</p>

<p>In 2023, Nick's second book, <i>The Last Action Heroes</i>, was published, charting the rise of such action stars as Arnold Schwarzenegger, Sylvester Stallone, Bruce Willis and Steven Seagal, as well as their feuds and team-ups.</p>

<p>Beyond his work at <i>Empire</i> and as an author, Nick has appeared on television, radio, and podcasts to discuss cinema trends and history.</p>
                </div>
              </div>
              
              <div>
                <div className="space-y-12 pt-12">
                  <div className="max-w-md mx-auto">
                    <img 
                      src="./images/3amigos.jpg" 
                      alt="Three Amigos interview" 
                      className="w-full aspect-video object-cover rounded-lg shadow-xl"
                    />
                    <p className="mt-3 text-sm text-gray-600 italic">
                      Interviewing the stars and director of <i>Three Amigos</i>
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <img 
                      src="./images/burtreynolds.png" 
                      alt="With Burt Reynolds" 
                      className="w-full aspect-video object-cover rounded-lg shadow-xl"
                    />
                    <p className="mt-3 text-sm text-gray-600 italic">
                      With Burt Reynolds at his acting school in Jupiter, Florida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
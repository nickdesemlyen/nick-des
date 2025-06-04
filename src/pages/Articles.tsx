import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import SectionHeading from '../components/SectionHeading';
import Pagination from '../components/Pagination';

const Articles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const allArticles = [
    // Page 1
    {
      title: "Martin Scorsese",
      description: "The auteur on movies, memories and Marvel",
      date: "2019",
      imageUrl: "./images/articles/marty.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/MartinScorsese.pdf",
    },
    {
      title: "The Irishman",
      description: "De Niro, Pacino, Scorsese and Pesci talk",
      date: "2019",
      imageUrl: "./images/articles/Irishman2.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Irishman.pdf",
    },
    {
      title: "Once Upon A Time In Hollywood",
      description: "In the edit suite with Quentin Tarantino",
      date: "2019",
      imageUrl: "./images/articles/onceupon.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/OnceUponATimeInHollywood.pdf",
    },
    {
      title: "Alita: Battle Angel",
      description: "James Cameron and Robert Rodriguez on their cyborg epic",
      date: "2019",
      imageUrl: "./images/articles/alita.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Alita.pdf",
    },
    {
      title: "Kong: Skull Island",
      description: "Shadowing the mighty ape in Hawaii, Australia and Vietnam",
      date: "2017",
      imageUrl: "./images/articles/kongskullisland.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/KongSkullIsland.pdf",
    },
    {
      title: "The Fellowship Of The Ring",
      description: "The Lord of the Rings stars interview each other",
      date: "2017",
      imageUrl: "./images/articles/fellowshipofthering.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/FellowshipOfTheRing.pdf",
    },
    {
      title: "Nicolas Cage",
      description: "Earth's most fearless actor on his boldest performances",
      date: "2016",
      imageUrl: "./images/articles/nicolascage.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/NicolasCage.pdf",
    },
    {
      title: "Ghostbusters",
      description: "Ready for slime time on the set of the spectral reboot",
      date: "2016",
      imageUrl: "./images/articles/ghostbusters.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Ghostbusters.pdf",
    },
    {
      title: "Burt Reynolds",
      description: "A visit to the legend’s home and acting school",
      date: "2015",
      imageUrl: "./images/articles/burtreynolds.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/BurtReynolds.pdf",
    },
    {
      title: "Suicide Squad",
      description: "Three days on set with the supervillain crew",
      date: "2015",
      imageUrl: "./images/articles/suicidesquad.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/SuicideSquad.pdf",
    },
    {
      title: "Ant-Man",
      description: "How Marvel turned a tiny hero into a large hit",
      date: "2015",
      imageUrl: "./images/articles/antman.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Ant-Man.pdf",
    },
    {
      title: "<i>Jurassic World</i>",
      description: "On set of the monster dinosaur reboot",
      date: "2015",
      imageUrl: "./images/articles/jurassicworld.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Jurassic%20World.pdf",
    },
    // Page 2
    {
      title: "<i>Hannibal</i>",
      description: "The stars and creator of the ultra-gory show have their brains picked",
      date: "2015",
      imageUrl: "./images/articles/hannibal.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Hannibal.pdf",
    },
    {
      title: "<i>Bad Taste</i>",
      description: "Peter Jackson reunites with old mates to tell the story of his first film",
      date: "2015",
      imageUrl: "./images/articles/badtaste.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/BadTaste.pdf",
    },
    {
      title: "<i>Gremlins</i>",
      description: "Reuniting the cast, crew and creatures of the '80s classic",
      date: "2014",
      imageUrl: "./images/articles/gremlins.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/gremlins.pdf",
    },
    {
      title: "John McTiernan",
      description: "The Die Hard director at home on his ranch",
      date: "2014",
      imageUrl: "./images/articles/mctiernan.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/mctiernan.pdf",
    },
    {
      title: "<i>Scarface</i>",
      description: "An oral history of the Miami crime masterpiece",
      date: "2014",
      imageUrl: "./images/articles/scarface.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/SCARFACE.pdf",
    },
    {
      title: "Alan Partridge: Alpha Papa",
      description: "The titan of Norfolk hits the big screen",
      date: "2014",
      imageUrl: "./images/articles/alanpartridge.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Partridge.pdf",
    },
    {
      title: "<i>Jurassic Park</i>",
      description: "A 20th anniversary trip through Isla Nublar, paddock by paddock",
      date: "2014",
      imageUrl: "./images/articles/jurassicpark.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/JurassicPark.pdf",
    },
    {
      title: "Rick Moranis",
      description: "At home with the reclusive comedy star",
      date: "2013",
      imageUrl: "./images/articles/rickmoranis.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/RickMoranis.pdf",
    },
    {
      title: "<i>The World's End</i>",
      description: "A photoshoot with the Cornetto Trilogy trio (but who’s that zombie?)",
      date: "2013",
      imageUrl: "./images/articles/theworldsend.jpg",
      url: "https://storage.cloud.google.com/nick-des/pdf/WorldsEnd.pdf",
    },
    {
      title: "Fast Six",
      description: "Two days on set with Toretto and co.",
      date: "2013",
      imageUrl: "./images/articles/fastsix.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/FastSix.pdf",
    },
    {
      title: "<i>Lost</i>",
      description: "An oral history for the pilot of the tropical sci-fi smash",
      date: "2013",
      imageUrl: "./images/articles/lost.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Lost.pdf",
    },
    {
      title: "Ian McKellen",
      description: "Face to face with Gandalf the Grey",
      date: "2012",
      imageUrl: "./images/articles/ianmckellen.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/IanMcKellen.pdf",
    },
    // Page 3
    {
      title: "Timothy Dalton",
      description: "Remembering his stint as 007",
      date: "2011",
      imageUrl: "./images/articles/timothydalton.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/TimothyDalton.pdf",
    },
    {
      title: "<i>The Muppets</i>",
      description: "On set for the fuzzy funsters' return",
      date: "2011",
      imageUrl: "./images/articles/muppets.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Muppets.pdf",
    },
    {
      title: "Joe Pesci",
      description: "His first extensive interview since his '90s heyday",
      date: "2011",
      imageUrl: "./images/articles/joepesci.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/JoePesci.pdf",
    },
    {
      title: "<i>Lethal Weapon</i>",
      description: "Reuniting Mel Gibson, Danny Glover and Richard Donner",
      date: "2011",
      imageUrl: "./images/articles/lethalweapon.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/LethalWeaponReunion.pdf",
    },
    {
      title: "Danny DeVito",
      description: "Interviews with the legend in LA and London",
      date: "2011",
      imageUrl: "./images/articles/dannydevito.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/DannyDeVito.pdf",
    },
    {
      title: "Gary Busey",
      description: "Hanging with Hollywood's wild man at his Malibu home",
      date: "2011",
      imageUrl: "./images/articles/garybusey.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Busey.pdf",
    },
    {
      title: "Super 8 Memories",
      description: "A-list directors on their very first films",
      date: "2011",
      imageUrl: "./images/articles/super8.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Super8.pdf",
    },
    {
      title: "Hugh Jackman",
      description: "An extensive chat with the Australian star",
      date: "2011",
      imageUrl: "./images/articles/hughjackman.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/HughJackman.pdf",
    },
    {
      title: "Ghost Rider 2",
      description: "Nicolas Cage at his loopiest",
      date: "2011",
      imageUrl: "./images/articles/ghostrider2.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/GhostRider.pdf",
    },
    {
      title: "The Change-Up",
      description: "Interviews don't get much more high-concept",
      date: "2011",
      imageUrl: "./images/articles/changeup.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/ChangeUp.pdf",
    },
    {
      title: "Three Amigos Reunion",
      description: "Steve Martin, Chevy Chase and Martin Short",
      date: "2011",
      imageUrl: "./images/articles/threeamigos.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/TheThreeAmigos.pdf",
    },
    {
      title: "Weird Dreams",
      description: "Hollywood stars reveal their strangest dreams",
      date: "2010",
      imageUrl: "./images/articles/weirddreams.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/WeirdDreams.pdf",
    },
    // Page 4
    {
      title: "Jonah Hex",
      description: "Josh Brolin on his fantasy Western",
      date: "2010",
      imageUrl: "./images/articles/jonahhex.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/JonahHex.pdf",
    },
    {
      title: "Troublemaker Studios",
      description: "A look at Robert Rodriguez's rebel base",
      date: "2010",
      imageUrl: "./images/articles/troublemaker.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/TroublemakerStudios.pdf",
    },
    {
      title: "Scott Pilgrim",
      description: "In Toronto for Edgar Wright’s sugar-rush blockbuster",
      date: "2010",
      imageUrl: "./images/articles/scottpilgrim.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/ScottPilgrim.pdf",
    },
    {
      title: "Jackie Chan",
      description: "48 hours in Shanghai with the action legend",
      date: "2010",
      imageUrl: "./images/articles/jackiechan.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/JackieChan.pdf",
    },
    {
      title: "District 9",
      description: "Neill Blomkamp and pals on making sci-fi history",
      date: "2009",
      imageUrl: "./images/articles/district9feature.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/District9.pdf",
    },
    {
      title: "X-Files 2",
      description: "A report from the spooky Vancouver set",
      date: "2009",
      imageUrl: "./images/articles/xfiles2.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/XFiles2.pdf",
    },
    {
      title: "Mulder & Scully",
      description: "David Duchovny and Gillian Anderson talk",
      date: "2009",
      imageUrl: "./images/articles/mulderscully.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/MulderScully.pdf",
    },
    {
      title: "A Serious Man",
      description: "An interview with the Coen brothers",
      date: "2009",
      imageUrl: "./images/articles/aseriousman.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/ASeriousMan.pdf",
    },
    {
      title: "Jerry Seinfeld",
      description: "An extensive interview with the comedy icon",
      date: "2008",
      imageUrl: "./images/articles/jerryseinfeld.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/JerrySeinfeld.pdf",
    },
    {
      title: "Chuck Norris",
      description: "A rare audience with the Lone Wolf",
      date: "2007",
      imageUrl: "./images/articles/chucknorris.jpg",
      url: "https://storage.cloud.google.com/nick-des/pdf/ChuckNorris.pdf",
    },
    {
      title: "Unknown Icons",
      description: "Interviews with cinema's unhailed heroes",
      date: "2007",
      imageUrl: "./images/articles/unknownicons.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/UnknownIcons.pdf",
    },
    {
      title: "Bondathon",
      description: "Three writers watch 20 Bond films in one sleepless session",
      date: "2007",
      imageUrl: "./images/articles/bondathon.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Bondathon.pdf",
    },
  ];

  const articlesPerPage = 12;
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  
  const getCurrentPageArticles = () => {
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    return allArticles.slice(start, end);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Articles"
            className="text-4xl md:text-5xl lg:text-6xl"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {getCurrentPageArticles().map((article, index) => (
              <ArticleCard 
                key={index}
                title={article.title}
                description={article.description}
                date={article.date}
                imageUrl={article.imageUrl}
                url={article.url}
                index={index}
              />
            ))}
          </div>
          
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
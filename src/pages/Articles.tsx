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
      title: "<i>The Irishman</i>",
      description: "De Niro, Pacino, Scorsese and Pesci talk",
      date: "2019",
      imageUrl: "./images/articles/irishman2.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Irishman.pdf",
    },
    {
      title: "Once Upon A Time In Hollywood",
      description: "In the edit with Quentin Tarantino",
      date: "2019",
      imageUrl: "./images/articles/onceupon.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/OnceUponATimeInHollywood.pdf",
    },
    {
      title: "<i>Alita: Battle Angel</i>",
      description: "James Cameron and Robert Rodriguez on their cyborg epic",
      date: "2019",
      imageUrl: "./images/articles/alita.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/Alita.pdf",
    },
    {
      title: "<i>Kong: Skull Island</i>",
      description: "Shadowing the mighty ape in Hawaii, Australia and Vietnam",
      date: "2017",
      imageUrl: "./images/articles/kongskullisland.jpg",
      url: "https://storage.googleapis.com/nick-des/pdf/KongSkullIsland.pdf",
    },
    {
      title: "<i>The Fellowship Of The Ring</i>",
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
      url: "/articles/cage.pdf",
    },
    {
      title: "<i>Ghostbusters</i>",
      description: "Ready for slime time on the set of the spectral reboot",
      date: "2016",
      imageUrl: "./images/articles/ghostbusters.jpg",
      url: "/articles/ghostbusters.pdf",
    },
    {
      title: "Burt Reynolds",
      description: "The legend remembers his wild life and crazy career",
      date: "2015",
      imageUrl: "./images/articles/burtreynolds.jpg",
      url: "/articles/reynolds.pdf",
    },
    {
      title: "<i>Suicide Squad</i>",
      description: "Three days on set with the supervillain crew",
      date: "2015",
      imageUrl: "./images/articles/suicidesquad.jpg",
      url: "/articles/squad.pdf",
    },
    {
      title: "<i>Ant-Man</i>",
      description: "How Marvel turned a tiny hero into a large hit",
      date: "2015",
      imageUrl: "./images/articles/antman.jpg",
      url: "/articles/antman.pdf",
    },
    {
      title: "<i>Jurassic World</i>",
      description: "On set of the monster dinosaur smash",
      date: "2015",
      imageUrl: "./images/articles/jurassicpark.jpg",
      url: "/articles/jurassicworld.pdf",
    },
    // Page 2
    {
      title: "<i>Hannibal</i>",
      description: "The stars and creator of the ultra-gory show have their brains picked",
      date: "2015",
      imageUrl: "./images/articles/hannibal.jpg",
      url: "/articles/hannibal.pdf",
    },
    {
      title: "<i>Bad Taste</i>",
      description: "Peter Jackson reunites with his old mates to tell the story of his first film",
      date: "2015",
      imageUrl: "./images/articles/badtaste.jpg",
      url: "/articles/badtaste.pdf",
    },
    {
      title: "<i>Gremlins</i>",
      description: "Reuniting the cast, crew and creatures of the '80s classic",
      date: "2014",
      imageUrl: "./images/articles/gremlins.jpg",
      url: "/articles/gremlins.pdf",
    },
    {
      title: "John McTiernan",
      description: "The Die Hard director at home on his ranch",
      date: "2014",
      imageUrl: "./images/articles/mctiernan.jpg",
      url: "/articles/mctiernan.pdf",
    },
    {
      title: "<i>Scarface</i>",
      description: "An oral history of the Miami crime masterpiece",
      date: "2014",
      imageUrl: "./images/articles/scarface.jpg",
      url: "/articles/scarface.pdf",
    },
    {
      title: "Alan Partridge: Alpha Papa",
      description: "The titan of Norfolk hits the big screen",
      date: "2014",
      imageUrl: "./images/articles/alanpartridge.jpg",
      url: "/articles/partridge.pdf",
    },
    {
      title: "<i>Jurassic Park</i>",
      description: "A 20th anniversary trip through Isla Nublar, paddock by paddock",
      date: "2014",
      imageUrl: "./images/articles/jurassicpark.jpg",
      url: "/articles/jurassicpark.pdf",
    },
    {
      title: "Rick Moranis",
      description: "At home with the reclusive comedy star",
      date: "2013",
      imageUrl: "./images/articles/rickmoranis.jpg",
      url: "/articles/moranis.pdf",
    },
    {
      title: "<i>The World's End</i>",
      description: "Wright, Pegg and Frost celebrated with a spectacular photoshoot",
      date: "2013",
      imageUrl: "./images/articles/theworldsend.jpg",
      url: "/articles/worldsend.pdf",
    },
    {
      title: "Fast Six",
      description: "Two days on set with Toretto and co.",
      date: "2013",
      imageUrl: "./images/articles/fastsix.jpg",
      url: "/articles/fastsix.pdf",
    },
    {
      title: "<i>Lost</i>",
      description: "Cast and crew look back at the tropical sci-fi smash",
      date: "2013",
      imageUrl: "./images/articles/lost.jpg",
      url: "/articles/lost.pdf",
    },
    {
      title: "Ian McKellen",
      description: "Face to face with Gandalf the Grey",
      date: "2012",
      imageUrl: "./images/articles/ianmckellen.jpg",
      url: "/articles/mckellen.pdf",
    },
    // Page 3
    {
      title: "Timothy Dalton",
      description: "Remembering his stint as 007",
      date: "2011",
      imageUrl: "./images/articles/timothydalton.jpg",
      url: "/articles/dalton.pdf",
    },
    {
      title: "<i>The Muppets</i>",
      description: "On set for the fuzzy funsters' return",
      date: "2011",
      imageUrl: "./images/articles/muppets.jpg",
      url: "/articles/muppets.pdf",
    },
    {
      title: "Joe Pesci",
      description: "His first extensive interview since his '90s heyday",
      date: "2011",
      imageUrl: "./images/articles/joepesci.jpg",
      url: "/articles/pesci.pdf",
    },
    {
      title: "<i>Lethal Weapon</i>",
      description: "Reuniting Mel Gibson, Danny Glover and Richard Donner",
      date: "2011",
      imageUrl: "./images/articles/lethalweapon.jpg",
      url: "/articles/lethalweapon.pdf",
    },
    {
      title: "Danny DeVito",
      description: "Interviews with the legend in LA and London",
      date: "2011",
      imageUrl: "./images/articles/dannydevito.jpg",
      url: "/articles/devito.pdf",
    },
    {
      title: "Gary Busey",
      description: "Hanging with Hollywood's wild man at his Malibu home",
      date: "2011",
      imageUrl: "./images/articles/garybusey.jpg",
      url: "/articles/busey.pdf",
    },
    {
      title: "Super 8 Memories",
      description: "A-list directors on their very first films",
      date: "2011",
      imageUrl: "./images/articles/super8.jpg",
      url: "/articles/super8.pdf",
    },
    {
      title: "Hugh Jackman",
      description: "An extensive chat with the Australian star",
      date: "2011",
      imageUrl: "./images/articles/hughjackman.jpg",
      url: "/articles/jackman.pdf",
    },
    {
      title: "Ghost Rider 2",
      description: "Nicolas Cage at his loopiest",
      date: "2011",
      imageUrl: "./images/articles/ghostrider2.jpg",
      url: "/articles/ghostrider2.pdf",
    },
    {
      title: "The Change-Up",
      description: "Interviews don't get much more high-concept",
      date: "2011",
      imageUrl: "./images/articles/changeup.jpg",
      url: "/articles/changeup.pdf",
    },
    {
      title: "Three Amigos Reunion",
      description: "Steve Martin, Chevy Chase and Martin Short",
      date: "2011",
      imageUrl: "./images/articles/threeamigos.jpg",
      url: "/articles/amigos.pdf",
    },
    {
      title: "Weird Dreams",
      description: "Hollywood stars reveal their strangest dreams",
      date: "2010",
      imageUrl: "./images/articles/weirddreams.jpg",
      url: "/articles/dreams.pdf",
    },
    // Page 4
    {
      title: "Jonah Hex",
      description: "Josh Brolin on his fantasy Western",
      date: "2010",
      imageUrl: "./images/articles/jonahhex.jpg",
      url: "/articles/hex.pdf",
    },
    {
      title: "Troublemaker Studios",
      description: "A look at Robert Rodriguez's rebel base",
      date: "2010",
      imageUrl: "./images/articles/troublemaker.jpg",
      url: "/articles/troublemaker.pdf",
    },
    {
      title: "Scott Pilgrim",
      description: "In Toronto for Edgar Wright’s sugar-rush blockbuster",
      date: "2010",
      imageUrl: "./images/articles/scottpilgrim.jpg",
      url: "/articles/pilgrim.pdf",
    },
    {
      title: "Jackie Chan",
      description: "48 hours in Shanghai with the action legend",
      date: "2010",
      imageUrl: "./images/articles/jackiechan.jpg",
      url: "/articles/chan.pdf",
    },
    {
      title: "District 9",
      description: "Neill Blomkamp and pals on making sci-fi history",
      date: "2009",
      imageUrl: "./images/articles/district9feature.jpg",
      url: "/articles/district9.pdf",
    },
    {
      title: "X-Files 2",
      description: "A report from the spooky Vancouver set",
      date: "2009",
      imageUrl: "./images/articles/xfiles2.jpg",
      url: "/articles/xfiles2.pdf",
    },
    {
      title: "Mulder & Scully",
      description: "David Duchovny and Gillian Anderson talk",
      date: "2009",
      imageUrl: "./images/articles/mulderscully.jpg",
      url: "/articles/xfiles.pdf",
    },
    {
      title: "A Serious Man",
      description: "An interview with the Coen brothers",
      date: "2009",
      imageUrl: "./images/articles/aseriousman.jpg",
      url: "/articles/seriousman.pdf",
    },
    {
      title: "Jerry Seinfeld",
      description: "An extensive interview with the comedy icon",
      date: "2008",
      imageUrl: "./images/articles/jerryseinfeld.jpg",
      url: "/articles/seinfeld.pdf",
    },
    {
      title: "Chuck Norris",
      description: "A rare audience with the Lone Wolf",
      date: "2007",
      imageUrl: "./images/articles/chucknorris.jpg",
      url: "/articles/norris.pdf",
    },
    {
      title: "Unknown Icons",
      description: "Interviews with cinema's unhailed heroes",
      date: "2007",
      imageUrl: "./images/articles/unknownicons.jpg",
      url: "/articles/icons.pdf",
    },
    {
      title: "Bondathon",
      description: "Three writers watch 20 Bond films in one sleepless session",
      date: "2007",
      imageUrl: "./images/articles/bondathon.jpg",
      url: "/articles/bondathon.pdf",
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
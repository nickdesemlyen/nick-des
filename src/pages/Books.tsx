import React from 'react';
import BookCard from '../components/BookCard';
import SectionHeading from '../components/SectionHeading';

const Books: React.FC = () => {
  const books = [
    {
      title: "Wild and Crazy Guys: How The Comedy Mavericks of the '80s Changed Hollywood Forever",
      coverImage: "./images/books/wildandcrazyguys.jpg",
      description: "<i>Wild and Crazy Guys</i> is the larger-than-life story of the much-loved Hollywood comedy stars that ruled the 1980s.\n\nAs well as delving behind the scenes of classic movies such as <i>Ghostbusters</i>, <i>Beverly Hills Cop</i>, <i>The Blues Brothers</i>, <i>Trading Places</i> and dozens more, it chronicles the off-screen, often raucous antics of John Belushi, Dan Aykroyd, Bill Murray, Eddie Murphy, Chevy Chase, Steve Martin, John Candy and Rick Moranis. Based on candid interviews from the stars themselves, as well as those who entered their orbit, it reveals the hidden history behind the most fertile period ever for screen comedy. Audiobook read by Curtis Armstrong.",
      year: "2019",
      amazonUkUrl: "https://amzn.eu/d/5Y5zLdt",
      amazonUsUrl: "https://a.co/d/9Q2Mr47",
      waterstonesUrl: "https://www.barnesandnoble.com/w/the-last-action-heroes-nick-de-semlyen/1142050698?ean=9780593238820",
      barnesNobleUrl: "https://www.barnesandnoble.com/w/the-last-action-heroes-nick-de-semlyen/1142703307",
      audibleUrl: "https://www.audible.co.uk/pd/Wild-and-Crazy-Guys-Audiobook/1509888624",
    },
    {
      title: "The Last Action Heroes: The Triumphs, Flops and Feuds of Hollywood's Kings Of Carnage",
      coverImage: "./images/books/lastactionheroes.jpg",
      description: "This chronicle of the golden age of the action movie charts Sylvester Stallone and Arnold Schwarzenegger's carnage-packed journey from enmity to friendship, against the backdrop of Reagan's America and the Cold War. It also reveals untold stories of the colourful characters who ascended in their wake: high-kickers Chuck Norris and Jackie Chan, glowering tough guys Dolph Lundgren and Steven Seagal, and quipping troublemakers Jean-Claude Van Damme and Bruce Willis. Drawing on candid interviews with the action stars themselves, plus their collaborators, friends, and foes, <i>The Last Action Heroes</i> is a no-holds-barred account of a period in Hollywood history when there were no limits to the heights of fame these men achieved, or to the mayhem they wrought, on-screen and off. Audiobook read by Bronson Pinchot.",
      year: "2023",
      amazonUkUrl: "https://www.amazon.co.uk/Last-Action-Heroes-Triumphs-Hollywoods/dp/0241438152",
      amazonUsUrl: "https://www.amazon.com/Last-Action-Heroes-Triumphs-Hollywoods/dp/0593186427",
      waterstonesUrl: "https://www.waterstones.com/book/the-last-action-heroes/nick-de-semlyen/9780241438152",
      barnesNobleUrl: "https://www.barnesandnoble.com/w/the-last-action-heroes-nick-de-semlyen/1142703307",
      audibleUrl: "https://www.audible.co.uk/pd/The-Last-Action-Heroes-Audiobook/B0BVGGC9MN",
    },
  ];

  const reviews = [
    {
      quote: "<i>[Wild and Crazy Guys is] an enjoyable romp that vividly captures the manic ups and downs of a remarkable group of funny folk.</i>",
      source: "Peter Biskind, author of <i>Easy Riders, Raging Bulls</i>"
    },
    {
      quote: "<i>There is no shortage of excellent critical writing about the US comedy scene in the '80s, and Wild and Crazy Guys is a terrific contribution to the genre.</i>",
      source: "Hadley Freeman, <i>The Guardian</i>"
    },
    {
      quote: "<i>Stories of outsized egos, box-office hits, unexpected flops, and premature deaths. I read [Wild and Crazy Guys] cover to cover and couldn't put it down; it gets my highest recommendation.</i>",
      source: "Leonard Maltin, film historian" 
    },
    {
      quote: "<i>[The Last Action Heroes] takes you so close to the action that you can smell the sweat, cigar smoke, and bad cologne that brought these movies to life.</i>",
      source: "Paul Scheer, host of <i>How Did This Get Made?</i>"
    },
    {
      quote: "<i>The Last Action Heroes is an absolute blast to read, as thrilling as the genre itself.</i>",
      source: "Priscilla Page, film writer"
    },
    {
      quote: "<i>The Last Action Heroes is a hugely entertaining romp through '80s and '90s action cinema, every page riddled with a zillion bullet holes.</i>",
      source: "Edgar Wright, filmmaker"
    },
  ];

  return (
    <>
      {/* Books Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Books"
              className="text-4xl md:text-5xl lg:text-6xl"
            />
            
            <div className="space-y-16">
              {books.map((book, index) => (
                <div key={index}>
                  <BookCard 
                    title={book.title}
                    coverImage={book.coverImage}
                    description={book.description}
                    year={book.year}
                    amazonUkUrl={book.amazonUkUrl}
                    amazonUsUrl={book.amazonUsUrl}
                    waterstonesUrl={book.waterstonesUrl}
                    barnesNobleUrl={book.barnesNobleUrl}
                    audibleUrl={book.audibleUrl}
                    index={index}
                  />
                  {index < books.length - 1 && (
                    <div className="mt-16 border-t border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Reviews & Blurbs" 
            subtitle="What people have said about Nick's books:"
            alignment="center"
            className="text-3xl md:text-4xl font-bold font-serif text-navy-900 mb-4"
          />
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: review.quote }} />
                <p className="text-navy-900 font-medium" dangerouslySetInnerHTML={{ __html: review.source }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Books;
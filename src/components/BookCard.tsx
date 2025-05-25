import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface BookCardProps {
  title: string;
  coverImage: string;
  description: string;
  year: string;
  amazonUkUrl: string;
  amazonUsUrl: string;
  waterstonesUrl: string;
  barnesNobleUrl: string;
  index: number;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  coverImage,
  description,
  year,
  amazonUkUrl,
  amazonUsUrl,
  waterstonesUrl,
  barnesNobleUrl
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="w-full md:w-[300px] aspect-[3/4] relative">
        <img 
          src={coverImage} 
          alt={`${title} book cover`} 
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
        />
      </div>
      
      <div className="flex-1">
        <div className="mb-2 text-gold-600 font-medium">{year}</div>
        <h3 className="text-2xl font-serif font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-gray-700 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        
        <div className="flex flex-wrap gap-5">
          <a 
            href={amazonUkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
          >
            <ShoppingCart size={14} className="mr-1.5 text-black" />
            Amazon UK
          </a>
          
          <a 
            href={amazonUsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
          >
            <ShoppingCart size={14} className="mr-1.5 text-black" />
            Amazon US
          </a>
          
          <a 
            href={waterstonesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
          >
            <ShoppingCart size={14} className="mr-1.5 text-black" />
            Waterstones
          </a>
          
          <a 
            href={barnesNobleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 rounded bg-white border border-gray-300 text-black hover:bg-gray-50 text-sm"
          >
            <ShoppingCart size={14} className="mr-1.5 text-black" />
            Barnes & Noble
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
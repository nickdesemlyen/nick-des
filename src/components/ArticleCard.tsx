import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  url: string;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  description, 
  date, 
  imageUrl, 
  url
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative w-full aspect-[1.54/1] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title.replace(/<\/?i>/g, '')} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 p-6">
        <p className="text-gold-600 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2 font-serif" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-gray-600 mb-4">{description}</p>
        
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-navy-800 font-medium hover:text-gold-600"
        >
          Read Article <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
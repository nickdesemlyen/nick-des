import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  reducedMargin?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  className = '',
  reducedMargin = false
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`${reducedMargin ? 'mb-6' : 'mb-12'} ${alignmentClasses[alignment]}`}>
      <h1 className={`text-3xl md:text-4xl font-bold font-serif text-navy-900 mb-4 ${className}`}>
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-lg text-gray-600">
          {subtitle}
        </p>
      )}
      
      <div 
        className="h-1 w-24 bg-gold-500 mt-4"
        style={{ 
          marginLeft: alignment === 'center' ? 'auto' : undefined,
          marginRight: alignment === 'center' ? 'auto' : undefined
        }}
      />
    </div>
  );
};

export default SectionHeading;
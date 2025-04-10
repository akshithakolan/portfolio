'use client';

import { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard({ frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative h-[300px] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front of card */}
      <div 
        className={`absolute inset-0 backface-hidden transition-all duration-500 ${isFlipped ? 'rotate-y-180' : ''} rounded-lg overflow-hidden`}
      >
        {frontContent}
      </div>
      
      {/* Back of card */}
      <div 
        className={`absolute inset-0 backface-hidden transition-all duration-500 ${isFlipped ? '' : 'rotate-y-180'} rounded-lg overflow-hidden`}
      >
        {backContent}
      </div>
    </div>
  );
} 
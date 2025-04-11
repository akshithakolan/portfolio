'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface AnimatedWindowProps {
  title: string;
  titleAlignment?: 'left' | 'right' | 'center';
  iconSrc?: string;
}

export default function AnimatedWindow({ title, titleAlignment = 'left', iconSrc = '/Naruto.jpeg' }: AnimatedWindowProps) {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bounce-small {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      .animate-bounce-small {
        animation: bounce-small 3s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const alignmentClass = titleAlignment === 'right' ? 'text-right' : 
                         titleAlignment === 'center' ? 'text-center' : 'text-left';

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 animate-bounce-small">
      {/* Window Header */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 rounded-t-lg border-b border-gray-200">
        <div className="flex items-center h-full px-3 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      {/* Window Content */}
      <div className="pt-8">
        <h2 className={`text-3xl font-bold ${alignmentClass} text-gray-800 relative inline-block w-full`}>
          <div className={`flex items-center gap-3 ${titleAlignment === 'right' ? 'justify-end' : titleAlignment === 'center' ? 'justify-center' : 'justify-start'}`}>
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={iconSrc}
                alt="Section Icon"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="relative z-10">{title}</span>
          </div>
        </h2>
      </div>
    </div>
  );
} 
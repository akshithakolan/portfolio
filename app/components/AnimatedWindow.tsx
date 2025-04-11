'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface AnimatedWindowProps {
  title: string;
  titleAlignment?: 'left' | 'right' | 'center';
  iconSrc?: string;
  showQuote?: boolean;
}

export default function AnimatedWindow({ title, titleAlignment = 'left', iconSrc = '/Naruto.jpeg', showQuote = false }: AnimatedWindowProps) {
  const [showPopup, setShowPopup] = useState(false);

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
      {showPopup && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white p-4 rounded-lg z-20 animate-fade-in">
          <p className="text-green-400 font-mono">Shinzou wo Sasageyo! 🗡️</p>
        </div>
      )}
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
        {showQuote && (
          <div className="mt-6 p-4 rounded-lg bg-gray-100/50">
            <blockquote className="text-lg italic text-gray-700">
              {title === "Who am I?" 
                ? '"Protect what you value, build what you believe in, and cherish life, just as Mikasa cherished her scarf."'
                : title === "My Level-Up Journey"
                ? '"No matter how many times you fail, rise again with your army of skills and tools to level up like Jinwoo."'
                : title === "Git Commit – My Creations 🔮"
                ? '"Master your fate, shape your path with every decision, and let your vision lead you."'
                : title === "Mission: Experience"
                ? '"One look, one move—see the flaw before it appears through your Sharingan."'
                : title === "Code Ingredients"
                ? '"Hone your one skill to perfection, and let it shine when you need it most—Thunder Breathing, First Form."'
                : title === "The Credential Collection"
                ? '"Learn fast, adapt faster — given a skill, master it like you’ve known it forever—Copy Ninja Technique."'
                : '"The only way to do great work is to love what you do."'}
              <footer className="mt-2 text-right text-sm text-gray-600">
                {title === "Who am I?" 
                  ? "- Attack on Titan"
                  : title === "My Level-Up Journey"
                  ? "- Solo Leveling"
                  : title === "Git Commit – My Creations 🔮"
                  ? "- Death Note"
                  : title === "Mission: Experience"
                  ? "- Naruto"
                  : title === "Code Ingredients"
                  ? "- Demon Slayer"
                  : title === "The Credential Collection"
                  ? "- Naruto"
                  : "- Steve Jobs"}
              </footer>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
} 
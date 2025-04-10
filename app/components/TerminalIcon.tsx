"use client";

import React, { useEffect, useState } from 'react';

interface TerminalIconProps {
  text: string;
}

const TerminalIcon: React.FC<TerminalIconProps> = ({ text }) => {
  const [blink, setBlink] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className="inline-flex items-start justify-center w-full max-w-xl bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden group hover:scale-[1.02] transition-all duration-200 hover:shadow-xl">
      <div className="w-full relative p-4">
        {/* Terminal Window Controls */}
        <div className="flex gap-1.5 mb-3 absolute top-3 left-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        {/* Terminal Content */}
        <div className="pt-4 font-mono">
          <div className="flex items-center text-green-400 opacity-75">
            <span className="mr-2">$</span>
            <span className="text-blue-400 mr-2">(base)</span>
            <span className="text-white opacity-90">{displayText}</span>
            <span className={`w-2 h-5 ml-1 bg-green-400 ${blink && isTyping ? 'opacity-75' : 'opacity-0'} transition-opacity duration-100`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalIcon; 
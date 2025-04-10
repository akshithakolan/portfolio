"use client";

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      if (isDeleting) {
        // Deleting text
        if (currentIndex > 0) {
          setDisplayText(text.slice(0, currentIndex - 1));
          currentIndex--;
          timeout = setTimeout(animateText, 50); // Faster deletion
        } else {
          isDeleting = false;
          timeout = setTimeout(animateText, 1000); // Pause before typing again
        }
      } else {
        // Typing text
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          timeout = setTimeout(animateText, 100); // Normal typing speed
        } else {
          isDeleting = true;
          timeout = setTimeout(animateText, 2000); // Pause before deleting
        }
      }
    };

    timeout = setTimeout(animateText, 500); // Initial delay

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText; 
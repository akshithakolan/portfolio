"use client";

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export default function TypewriterText({ text, className }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < text.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting phase
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, 50);
    } else if (currentIndex === text.length) {
      // Pause at the end of typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (currentIndex === 0 && isDeleting) {
      // Pause at the beginning after deleting
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
} 
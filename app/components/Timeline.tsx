"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Software Developer",
    company: "Your Current Company",
    description: "Working on full-stack development using React, Next.js, and Node.js. Implementing responsive designs and optimizing application performance."
  },
  // Add more experiences here
];

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } mb-8`}
          >
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-sm text-gray-400">{item.date}</span>
                <h3 className="text-xl font-semibold text-gray-700 mt-2">{item.title}</h3>
                <p className="text-gray-500 mt-1">{item.company}</p>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-200 border-4 border-white"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React.js', level: 90, color: 'bg-blue-500' },
  { name: 'Next.js', level: 85, color: 'bg-black' },
  { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
  { name: 'Python', level: 85, color: 'bg-blue-600' },
  { name: 'Node.js', level: 82, color: 'bg-green-600' },
  { name: 'TypeScript', level: 80, color: 'bg-blue-700' },
];

const SkillBars = () => {
  return (
    <div className="max-w-3xl mx-auto grid gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="group">
          <div className="flex justify-between mb-1">
            <span className="text-gray-700 font-medium">{skill.name}</span>
            <span className="text-gray-600">{skill.level}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars; 
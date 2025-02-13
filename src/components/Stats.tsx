import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    value: '3+',
    label: 'Happy Clients',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    value: '5+',
    label: 'Projects Completed',
  },
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    value: '99%',
    label: 'Client Satisfaction',
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              {stat.icon}
              <div className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
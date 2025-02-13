import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Testimonials Data
const testimonials = {
  'Digital Marketing': [
    {
      name: 'John Smith',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      content: 'The digital marketing strategies implemented by DigitalPro helped us increase our online presence significantly. Our conversion rates improved by 150%!',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      company: 'GrowthHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      content: 'Exceptional SEO services that delivered real results. Our website traffic doubled within three months.',
      rating: 5
    }
  ],
  'Software Development': [
    {
      name: 'Mike Johnson',
      company: 'InnovateTech',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      content: 'The development team created a sophisticated yet user-friendly application that exceeded our expectations. Their technical expertise is outstanding.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'DataFlow Systems',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      content: 'Impressive full-stack development capabilities. They delivered our project on time and within budget.',
      rating: 5
    }
  ],
  'Photo/Videography': [
    {
      name: 'David Lee',
      company: 'Creative Studios',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      content: "The quality of their photography work is exceptional. They captured our company's essence perfectly in their shots.",
      rating: 5
    },
    {
      name: 'Emma Davis',
      company: 'EventPro',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80',
      content: 'Their videography services are top-notch. The promotional video they created for our event was absolutely stunning.',
      rating: 5
    }
  ]
};

// Client Logos
const clientLogos = [
  'src/Images/Wellness Hospitals.png',
  'src/Images/Prodify AI.png',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80'
];

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials[activeCategory].length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials[activeCategory].length - 1 : prev - 1));
  };

  return (
    <div id="client-success-stories" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear what our clients have to say about our services
          </p>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(testimonials).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[activeCategory][currentIndex].image}
                  alt={testimonials[activeCategory][currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {testimonials[activeCategory][currentIndex].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[activeCategory][currentIndex].company}
                  </p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(testimonials[activeCategory][currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-8">
              "{testimonials[activeCategory][currentIndex].content}"
            </blockquote>
            <div className="flex justify-between items-center">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {testimonials[activeCategory].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-center">
                <img src={logo} alt={`Client Logo ${index + 1}`} className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

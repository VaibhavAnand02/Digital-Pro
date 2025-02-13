import React from 'react';
import { Code2, PenTool, Camera, MonitorSmartphone, Database, Video, Search, MousePointer2, PaintBucket } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    icon: <Search className="w-8 h-8 mb-4 text-blue-500" />,
    description: 'Boost your online presence with our comprehensive digital marketing solutions.',
    subServices: [
      { name: 'SEO', description: 'Boost your website rankings with advanced SEO strategies', icon: <MousePointer2 /> },
      { name: 'Google Ads', description: 'Maximize visibility and ROI with expert PPC management', icon: <PenTool /> },
      { name: 'Graphic Design', description: 'Creative designs that make your brand stand out', icon: <PaintBucket /> },
    ]
  },
  {
    title: 'Software Development',
    icon: <Code2 className="w-8 h-8 mb-4 text-purple-500" />,
    description: 'Custom software solutions tailored to your business needs.',
    subServices: [
      { name: 'Frontend Development', description: 'Responsive and interactive UI designs', icon: <MonitorSmartphone /> },
      { name: 'Backend Development', description: 'Secure, scalable backend solutions', icon: <Database /> },
      { name: 'Full Stack Development', description: 'End-to-end web application development', icon: <Code2 /> },
    ]
  },
  {
    title: 'Photo/Videography',
    icon: <Camera className="w-8 h-8 mb-4 text-green-500" />,
    description: 'Professional photo and video services for your brand.',
    subServices: [
      { name: 'Photography', description: 'High-quality photography for events and brands', icon: <Camera /> },
      { name: 'Videography', description: 'Professional video production services', icon: <Video /> },
      { name: 'Video Editing', description: 'Expert post-production and editing', icon: <Video /> },
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive digital solutions for your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-4">
                {service.subServices.map((subService, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-4">
                      {React.cloneElement(subService.icon, {
                        className: 'w-6 h-6 text-blue-500'
                      })}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{subService.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {subService.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
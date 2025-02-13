import React from 'react';
import { Github, Linkedin, Twitter, Award, Target, Heart, Users, Briefcase, Clock, Globe, Zap, Shield } from 'lucide-react';

const timeline = [
  
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Received multiple awards for excellence in digital services.',
    icon: <Award className="w-6 h-6 text-yellow-500" />
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Launched R&D division for cutting-edge digital solutions.',
    icon: <Zap className="w-6 h-6 text-red-500" />
  },
  {
    year: '2025',
    title: 'Sustainable Growth',
    description: 'Achieved 200% year-over-year growth with 500+ satisfied clients.',
    icon: <Briefcase className="w-6 h-6 text-indigo-500" />
  }
];

const teamMembers = [
  {
    name: 'Madugula Vinay',
    role: 'Full Stack Developer',
    image: 'src/Images/Image - 2.JPG',
    experience: '2+ year in Software Developer',
    expertise: ['Full Stack Developer', 'Django', 'Reactjs'],
    bio: 'With over 2+ years of expertise in software development and business transformation, Vinay leads our company’s innovative approach to building cutting-edge solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/vinay-madugula-673897191/',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Vaibhav Anand',
    role: 'Digital Lead',
    image: 'src/Images/Image - 1.jpeg',
    experience: '3+ years in Digital Marketing & Statergies Builting',
    expertise: ['Strategic Planning', 'Team Leadership', 'Digital Innovation'],
    bio: 'Vaibhav Anand brings over 3+ years of experience in digital strategy and business transformation. His vision drives our company\'s innovative approach to digital solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/balgari-sampath/',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Vagdevi Mathangi',
    role: 'Frontend Developer',
    image: 'src/Images/Female.png',
    experience: '2+ years in Frontend Development',
    expertise: ['UI Development', 'Web Performance Optimization', 'Interactive Design'],
    bio: 'As a Frontend Developer with 2+ years of experience, I bring creativity and technical expertise to every project. and frameworks like React and Vue.js, ensuring seamless user experiences across all devices.',
    social: {
      linkedin: 'https://www.linkedin.com/in/mathangi-vagdevi',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Nagesh Shamanthula',
    role: 'Software Developer',
    image: 'src/Images/Male.png',
    experience: '2+ year in Software Developer',
    expertise: ['Full Stack Developer', 'Django', 'Reactjs'],
    bio: 'With over 2+ years of expertise in software development and business transformation, Vinay leads our company’s innovative approach to building cutting-edge solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/shamanthula-nagesh/',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Joseph',
    role: 'Video Content Creater',
    image: 'src/Images/josh.jpg',
    experience: '2+ year in Software Developer',
    expertise: ['Full Stack Developer', 'Django', 'Reactjs'],
    bio: 'With over 2+ years of expertise in software development and business transformation, Vinay leads our company’s innovative approach to building cutting-edge solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/vinay-madugula-673897191/',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Vijay Koppisetti',
    role: 'Graphic Designer',
    image: 'src/Images/Male.png',
    experience: '2+ year in Software Developer',
    expertise: ['Full Stack Developer', 'Django', 'Reactjs'],
    bio: 'With over 2+ years of expertise in software development and business transformation, Vinay leads our company’s innovative approach to building cutting-edge solutions.',
    social: {
      linkedin: 'https://www.linkedin.com/in/vinay-madugula-673897191/',
      twitter: '#',
      github: '#'
    }
  },
];

const values = [
  {
    icon: <Target className="w-12 h-12 text-blue-500" />,
    title: 'Innovation',
    description: 'Pushing boundaries with creative solutions and cutting-edge technology.'
  },
  {
    icon: <Shield className="w-12 h-12 text-purple-500" />,
    title: 'Quality',
    description: 'Delivering excellence in every project with meticulous attention to detail.'
  },
  {
    icon: <Heart className="w-12 h-12 text-red-500" />,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships through trust and results.'
  }
];

export function About() {
  return (
    <div id="about" className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              At DigitalPro, we're passionate about transforming businesses through innovative digital solutions. 
              Our journey began with a simple mission: to help businesses thrive in the digital age by providing 
              comprehensive, cutting-edge services in digital marketing, software development, and creative media.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance visibility, 
                and create meaningful connections with their audience. We strive to be at the forefront of 
                digital transformation, helping our clients navigate and succeed in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the leading force in digital innovation, recognized globally for our exceptional service quality 
                and innovative solutions. We envision a future where every business, regardless of size, can harness 
                the full potential of digital technology to achieve extraordinary success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2 pr-8">
                      <div className={`${index % 2 === 0 ? 'text-right' : ''}`}>
                        <div className="inline-block p-2 rounded-lg bg-white dark:bg-gray-700 shadow-lg mb-3">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.year}</h3>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm mb-4">{member.bio}</p>
                      <div className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="text-sm bg-white/20 px-3 py-1 rounded-full inline-block mr-2">
                            {skill}
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href={member.social.github} className="text-white hover:text-blue-400 transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
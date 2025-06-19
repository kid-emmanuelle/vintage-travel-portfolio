'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Stamp,
  Plane,
  Camera,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Download,
  ExternalLink
} from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format date consistently
  const formatDate = () => {
    if (!mounted) return '--/--/----';
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const travelStamps = [
    { country: 'TOKYO', date: '2025', color: 'bg-travel-stamp', rotation: 'rotate-12' },
    { country: 'PARIS', date: '2020', color: 'bg-vintage-forest', rotation: '-rotate-6' },
    { country: 'DANANG', date: '2001', color: 'bg-travel-visa', rotation: 'rotate-3' },
    // { country: 'LONDON', date: '2019', color: 'bg-travel-postmark', rotation: '-rotate-12' },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Flutter'], level: '75%' },
    { category: 'Backend', items: ['C/C++', 'C#/.NET', 'Java SpringBoot', 'Node.js/Express', 'Python', 'Dart', 'Bash', 'PostgreSQL', 'MongoDB'], level: '92%' },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'RAG'], level: '82%' },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jira'], level: '90%' },
  ];

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '30+', icon: MapPin },
    { label: 'Countries Visited', value: '8', icon: Plane },
    { label: 'Photos Taken', value: '1k+', icon: Camera },
  ];

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Passport Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative overflow-hidden"
        >
          {/* Travel Stamps Decoration */}
          <div className="absolute top-4 right-4 space-y-2">
            {travelStamps.map((stamp, index) => (
              <motion.div
                key={stamp.country}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className={`travel-stamp ${stamp.color} ${stamp.rotation} text-xs font-bold px-2 py-1`}
              >
                <div>{stamp.country}</div>
                <div className="text-xs opacity-80">{stamp.date}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="vintage-border p-1 inline-block">
                <div className="w-48 h-64 bg-gradient-to-br from-paper-aged via-paper-old to-paper-dark flex items-center justify-center">
                  {/* Photo */}
                  <img src="/images/portrait_chibi.png" alt="Emmanuelle" className="w-full h-full object-cover"/>
                  
                  {/* Photo corners */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-ink-brown"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-ink-brown"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-ink-brown"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-ink-brown"></div>
                </div>
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Name & Title */}
              <div className="border-b-2 border-dotted border-ink-faded pb-4">
                <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                  Emmanuelle Nguyen
                </h1>
                <div className="font-script text-2xl text-vintage-burgundy mb-2">
                  "Kid - Emmanuelle"
                </div>
                <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                  Apprentice in Software & AI Engineering
                </div>
              </div>

              {/* Document Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-typewriter text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">DOCUMENT NO:</span>
                    <span className="font-bold text-ink-black">KID-EN-001</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">ISSUE DATE:</span>
                    <span className="font-bold text-ink-black" suppressHydrationWarning>
                      {formatDate()}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">NATIONALITY:</span>
                    <span className="font-bold text-ink-black">VIETNAMESE</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">LOCATION:</span>
                    <span className="font-bold text-ink-black">FRANCE</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">STATUS:</span>
                    <span className="font-bold text-vintage-forest">ACTIVE</span>
                  </div>
                  <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                    <span className="text-ink-faded">CLEARANCE:</span>
                    <span className="font-bold text-travel-passport">ENGINEER</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="aged-paper p-4 rounded-vintage">
                <h3 className="font-serif font-bold text-lg text-ink-black mb-3 border-b border-vintage-brass pb-1">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-typewriter text-sm">
                  <a 
                    href="mailto:kid.nguyenlenganha@gmail.com"
                    className="flex items-center space-x-2 text-ink-brown hover:text-vintage-burgundy transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kid.nguyenlenganha@gmail.com</span>
                  </a>
                  <div className="flex items-center space-x-2 text-ink-brown">
                    <MapPin className="w-4 h-4" />
                    <span>Lille, France</span>
                  </div>
                  <a 
                    href="https://github.com/kid-emmanuelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-ink-brown hover:text-vintage-burgundy transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>@kid-emmanuelle</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/kid-emmanuelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-ink-brown hover:text-vintage-burgundy transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills & Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="vintage-card p-6"
          >
            <h3 className="font-serif font-bold text-xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-l-4 border-vintage-gold pl-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-serif font-semibold text-ink-black">{skill.category}</h4>
                    <span className="font-typewriter text-sm text-vintage-burgundy font-bold">
                      {/* {skill.level} */}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-paper-aged text-ink-brown font-typewriter text-xs rounded-vintage border border-ink-faded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {/* <div className="w-full bg-paper-old rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-vintage-gold to-vintage-brass h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.8 }}
                    />
                  </div> */}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="vintage-card p-4 flex items-center space-x-4 hover:shadow-travel-card transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-vintage-gold rounded-vintage flex items-center justify-center shadow-vintage">
                  <stat.icon className="w-6 h-6 text-vintage-navy" />
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-ink-black">{stat.value}</div>
                  <div className="font-typewriter text-sm text-ink-brown">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/projects" className="vintage-btn flex items-center space-x-2">
            <ExternalLink className="w-5 h-5" />
            <span>Explore My Work</span>
          </Link>
          
          <a href="/cv/CV Resume - Emmanuelle Ngan Ha NGUYEN.pdf" className="vintage-btn bg-vintage-burgundy border-vintage-burgundy hover:bg-vintage-burgundy/80 text-white flex items-center space-x-2" download>
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 pt-8 border-t-2 border-dotted border-ink-faded text-center"
        >
          <div className="font-script text-2xl text-vintage-burgundy mb-2">
            Emmanuelle Nguyen
          </div>
          <div className="font-typewriter text-sm text-ink-faded">
            "Ready for the next adventure in technology"
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 
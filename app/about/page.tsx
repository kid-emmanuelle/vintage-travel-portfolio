'use client';

import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  MapPin,
  Calendar,
  Heart,
  Coffee,
  BookOpen,
  Star,
  Globe,
  Plane,
  Camera,
  Code,
  Mountain
} from 'lucide-react';

export default function AboutPage() {
  const personalDetails = [
    { label: 'Full Name', value: 'Emmanuelle Ngan Ha NGUYEN' },
    { label: 'Profession', value: 'Apprentice Software & AI Engineer' },
    { label: 'Location', value: 'France' },
    { label: 'Languages', value: 'Vietnamese (Native), French & English (Professional)' },
    { label: 'Interests', value: 'Programming, AI, Travel Discovery, Reading' },
    { label: 'Motto', value: '"Code with purpose, travel with wonder"' },
  ];

  const skillsProgress = [
    { skill: 'Software Development', level: 85, color: 'bg-vintage-gold' },
    { skill: 'Backend Systems', level: 78, color: 'bg-travel-passport' },
    { skill: 'AI & Machine Learning', level: 72, color: 'bg-vintage-forest' },
    { skill: 'Database Design', level: 80, color: 'bg-vintage-burgundy' },
    { skill: 'Cloud Platforms', level: 70, color: 'bg-vintage-rust' },
    { skill: 'Problem Solving', level: 90, color: 'bg-travel-stamp' },
  ];

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Software & AI Engineering Apprenticeship',
      location: 'INSA & Data Vision Systems',
      description: 'Pursuing dual education in software development & artificial intelligence at school and in the company.',
      type: 'education',
      stamp: { text: 'CURRENT', color: 'bg-vintage-forest', rotation: 'rotate-12' }
    },
    {
      year: '2022 - 2023',
      title: 'Freelance Developer Journey',
      location: 'Remote & Paris',
      description: 'Building applications and exploring the world of independent development.',
      type: 'work',
      stamp: { text: 'FREELANCE', color: 'bg-travel-passport', rotation: '-rotate-6' }
    },
    {
      year: '2020 - 2022',
      title: 'Self-Taught Programming',
      location: 'Home & Online',
      description: 'Diving deep into computer science fundamentals and modern web technologies.',
      type: 'education',
      stamp: { text: 'LEARNING', color: 'bg-vintage-gold', rotation: 'rotate-3' }
    },
    {
      year: '2019 - 2022',
      title: 'Project Manager & Co-founder',
      location: 'Remote & Da Nang',
      description: 'Developed and launched VR-based platforms for high school science education, offering immersive 3D learning experiences in chemistry and biology.',
      type: 'work',
      stamp: { text: 'CO-FOUNDER', color: 'bg-travel-stamp', rotation: '-rotate-6' }
    },
    {
      year: '2024',
      title: 'First Travel Photography Project',
      location: 'Europe',
      description: 'Combining passion for travel with visual storytelling across European cities.',
      type: 'personal',
      stamp: { text: 'ADVENTURE', color: 'bg-vintage-rust', rotation: '-rotate-12' }
    }
  ];

  const achievements = [
    { title: 'Win 2 challenges in the National Hackathon - La Nuit de l\'Info', year: '2025', icon: '🏆' },
    { title: 'TensorFlow Developer Certificate', year: '2025', icon: '🧠' },
    { title: '1st rank of INSA HDF in Code d\'INSA Competition', year: '2024, 2025', icon: '🥇' },
    { title: 'AWS Cloud Practitioner', year: '2024', icon: '☁️' },
    { title: 'React Developer Certification', year: '2023', icon: '⚛️' },
    { title: '6 Countries Explored', year: '2024', icon: '🌍' },
    { title: '1000+ Photos Captured', year: '2024', icon: '📸' },
  ];

  const personalStats = [
    { label: 'Experience', value: '3+ years', icon: Code },
    { label: 'Countries Visited', value: '6', icon: Globe },
    { label: 'Photos Taken', value: '1000+', icon: Camera },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
    { label: 'Projects Completed', value: '30+', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Personal Document Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative"
        >
          {/* Document Stamps */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className="travel-stamp bg-travel-stamp transform rotate-12 text-xs font-bold px-2 py-1">
              <div>PROFILE</div>
              <div className="text-xs opacity-80">2025</div>
            </div>
            <div className="travel-stamp bg-vintage-burgundy transform -rotate-6 text-xs font-bold px-2 py-1">
              <div>ACTIVE</div>
              <div className="text-xs opacity-80">✓</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dotted border-ink-faded pb-4">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                Personal Biography
              </h1>
              <div className="font-script text-2xl text-vintage-burgundy mb-2">
                "A journey of code and discovery"
              </div>
              <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                The story of a passionate developer and world explorer
              </div>
            </div>

            {/* Vintage Photo Frame */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="vintage-photo-frame relative">
                <div className="w-48 h-64 bg-gradient-to-br from-paper-aged to-paper-old flex items-center justify-center">
                  {/* Photo */}
                  <img src="/images/portrait_chibi.png" alt="Emmanuelle" className="w-full h-full object-cover"/>
                  
                  {/* Photo corners */}
                  <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-ink-brown"></div>
                  <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-ink-brown"></div>
                  <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-ink-brown"></div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-ink-brown"></div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="flex-1 space-y-3">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-dotted border-ink-faded pb-1">
                    <span className="font-typewriter text-sm text-ink-faded">{detail.label}:</span>
                    <span className="font-typewriter text-sm text-ink-black font-semibold text-right">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="vintage-card p-6">
            <h2 className="font-serif font-bold text-2xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-typewriter text-sm text-ink-black">{skill.skill}</span>
                    {/* <span className="font-typewriter text-xs text-ink-faded">{skill.level}%</span> */}
                  </div>
                  <div className="w-full bg-paper-aged rounded-vintage h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${skill.color} rounded-vintage`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="vintage-card p-6">
            <h2 className="font-serif font-bold text-2xl text-ink-black mb-6 border-b-2 border-vintage-brass pb-2">
              Journey Timeline
            </h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-vintage-gold rounded-full border-2 border-ink-brown"></div>
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="aged-paper p-4 rounded-vintage flex-1 relative">
                      {/* Stamp */}
                      <div className={`absolute -top-1 -right-1 travel-stamp ${item.stamp.color} text-xs font-bold px-2 py-1 transform ${item.stamp.rotation}`}>
                        {item.stamp.text}
                      </div>
                      
                      <div className="pr-16">
                        <div className="font-typewriter text-xs text-vintage-burgundy font-semibold mb-1">
                          {item.year}
                        </div>
                        <h3 className="font-serif font-bold text-lg text-ink-black mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-ink-brown mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-typewriter">{item.location}</span>
                        </div>
                        <p className="font-vintage text-sm text-ink-brown leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Line */}
                  {index < timeline.length - 1 && (
                    <div className="ml-2 w-0.5 h-6 bg-vintage-brass opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="vintage-card p-6"
          >
            <h2 className="font-serif font-bold text-xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
              Achievements & Certifications
            </h2>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 aged-paper p-3 rounded-vintage">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className="font-typewriter text-sm text-ink-black font-semibold">
                      {achievement.title}
                    </div>
                    <div className="font-typewriter text-xs text-ink-faded">
                      {achievement.year}
                    </div>
                  </div>
                  <Star className="w-4 h-4 text-vintage-gold" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="vintage-card p-6"
          >
            <h2 className="font-serif font-bold text-xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
              Personal Statistics
            </h2>
            <div className="space-y-4">
              {personalStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-between aged-paper p-3 rounded-vintage">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 text-vintage-gold" />
                      <span className="font-typewriter text-sm text-ink-black">
                        {stat.label}
                      </span>
                    </div>
                    <span className="font-typewriter text-lg font-bold text-vintage-burgundy">
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="aged-paper p-8 rounded-vintage text-center relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-4 left-4">
            <Heart className="w-6 h-6 text-vintage-burgundy opacity-50" />
          </div>
          <div className="absolute top-4 right-4">
            <Mountain className="w-6 h-6 text-vintage-gold opacity-50 transform rotate-12" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="font-script text-2xl text-vintage-burgundy mb-4">
              "Life is a journey of continuous learning and exploration"
            </div>
            <div className="font-vintage text-lg text-ink-brown leading-relaxed mb-6">
              I believe in combining technical expertise with creative exploration. 
              Every line of code I write and every place I visit teaches me something new 
              about the world and myself. My goal is to build meaningful technology 
              while documenting the beauty of our world through photography.
            </div>
            <div className="font-script text-xl text-vintage-burgundy">
              - Emmanuelle Ngan Ha NGUYEN
            </div>
            <div className="font-typewriter text-sm text-ink-faded mt-2">
              Software Engineer • Digital Nomad • Photography Enthusiast
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
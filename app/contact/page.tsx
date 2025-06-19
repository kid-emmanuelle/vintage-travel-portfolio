'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram,
  MessageSquare,
  User,
  Clock,
  CheckCircle,
  Heart,
  Feather,
  Stamp,
  PenTool
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Correspondence',
      value: 'kid.nguyenlenganha@gmail.com',
      href: 'mailto:kid.nguyenlenganha@gmail.com',
      description: 'For professional inquiries and collaborations'
    },
    {
      icon: MapPin,
      label: 'Current Location',
      value: 'France',
      href: null,
      description: 'Based in the heart of Europe'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      description: 'I reply to all messages personally'
    }
  ];

  const socialConnections = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@kid-emmanuelle',
      href: 'https://github.com/kid-emmanuelle',
      description: 'Code repositories & projects',
      stamp: { color: 'bg-vintage-forest', rotation: 'rotate-12' }
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Emmanuelle NGUYEN',
      href: 'https://www.linkedin.com/in/kid-emmanuelle',
      description: 'Professional network',
      stamp: { color: 'bg-travel-passport', rotation: '-rotate-6' }
    },
    {
      icon: Youtube,
      label: 'YouTube',
      username: '@justakid',
      href: 'https://youtube.com/@justakid',
      description: 'Coding tutorials & vlogs',
      stamp: { color: 'bg-vintage-rust', rotation: 'rotate-3' }
    },
    {
      icon: Instagram,
      label: 'Instagram',
      username: '@kid_emmanuelle_',
      href: 'https://instagram.com/kid_emmanuelle_',
      description: 'Travel photography',
      stamp: { color: 'bg-vintage-burgundy', rotation: '-rotate-12' }
    }
  ];

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Correspondence Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative"
        >
          {/* Postal Stamps */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className="travel-stamp bg-travel-stamp transform rotate-12 text-xs font-bold px-2 py-1">
              <div>CONTACT</div>
              <div className="text-xs opacity-80">2025</div>
            </div>
            <div className="travel-stamp bg-vintage-gold transform -rotate-6 text-xs font-bold px-2 py-1">
              <div>OPEN</div>
              <div className="text-xs opacity-80">24/7</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dotted border-ink-faded pb-4">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                Get In Touch
              </h1>
              <div className="font-script text-2xl text-vintage-burgundy mb-2">
                "Let's start a conversation"
              </div>
              <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                Whether you want to collaborate, chat about tech, or share travel stories
              </div>
            </div>

            {/* Contact Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-typewriter text-sm">
              {contactInfo.map((info, index) => (
                <div key={index} className="aged-paper p-3 rounded-vintage">
                  <div className="flex items-center space-x-2 mb-1">
                    <info.icon className="w-4 h-4 text-vintage-gold" />
                    <span className="font-semibold text-ink-black">{info.label}</span>
                  </div>
                  <div className="text-vintage-burgundy font-semibold">{info.value}</div>
                  <div className="text-xs text-ink-faded mt-1">{info.description}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="vintage-card p-8 relative"
          >
            {/* Decorative quill */}
            <div className="absolute top-4 right-4">
              <Feather className="w-6 h-6 text-vintage-gold opacity-50 transform rotate-45" />
            </div>

            <div className="border-b-2 border-vintage-brass pb-3 mb-6">
              <h3 className="font-serif font-bold text-xl text-ink-black">
                Write a Message
              </h3>
              <div className="font-script text-sm text-vintage-burgundy">
                "A handwritten note in digital form"
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="travel-stamp bg-vintage-forest text-white px-4 py-2 mx-auto mb-4 transform rotate-12 inline-block">
                  <div className="font-bold">DELIVERED</div>
                </div>
                <h3 className="font-serif font-bold text-lg text-ink-black mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="font-typewriter text-sm text-ink-brown">
                  Your message has been delivered. I'll respond within 24 hours.
                </p>
                <div className="mt-4">
                  <Heart className="w-8 h-8 text-vintage-burgundy mx-auto" />
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-typewriter text-sm text-ink-black mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-paper-aged border border-ink-faded text-ink-black font-typewriter text-sm focus:border-vintage-gold focus:outline-none transition-colors rounded-vintage"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block font-typewriter text-sm text-ink-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-paper-aged border border-ink-faded text-ink-black font-typewriter text-sm focus:border-vintage-gold focus:outline-none transition-colors rounded-vintage"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-typewriter text-sm text-ink-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-paper-aged border border-ink-faded text-ink-black font-typewriter text-sm focus:border-vintage-gold focus:outline-none transition-colors rounded-vintage"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label className="block font-typewriter text-sm text-ink-black mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-paper-aged border border-ink-faded text-ink-black font-vintage text-sm focus:border-vintage-gold focus:outline-none transition-colors rounded-vintage resize-none"
                    placeholder="Share your thoughts, ideas, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full vintage-btn"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-ink-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information & Social */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="vintage-card p-6"
            >
              <h3 className="font-serif font-bold text-xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="aged-paper p-4 rounded-vintage">
                    <div className="flex items-center space-x-3 mb-2">
                      <info.icon className="w-5 h-5 text-vintage-gold" />
                      <div>
                        <div className="font-typewriter text-sm font-semibold text-ink-black">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-typewriter text-sm text-vintage-burgundy hover:text-vintage-burgundy/80 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="font-typewriter text-sm text-vintage-burgundy">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="font-vintage text-xs text-ink-brown">
                      {info.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="vintage-card p-6"
            >
              <h3 className="font-serif font-bold text-xl text-ink-black mb-4 border-b-2 border-vintage-brass pb-2">
                Connect Online
              </h3>
              <div className="space-y-4">
                {socialConnections.map((social, index) => (
                  <div key={index} className="aged-paper p-4 rounded-vintage relative group">
                    <div className={`absolute -top-1 -right-1 travel-stamp ${social.stamp.color} text-xs font-bold px-2 py-1 transform ${social.stamp.rotation} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <social.icon className="w-3 h-3" />
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <social.icon className="w-5 h-5 text-vintage-gold" />
                      <div className="flex-1">
                        <div className="font-typewriter text-sm font-semibold text-ink-black">
                          {social.label}
                        </div>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-typewriter text-sm text-vintage-burgundy hover:text-vintage-burgundy/80 transition-colors"
                        >
                          {social.username}
                        </a>
                        <div className="font-vintage text-xs text-ink-brown mt-1">
                          {social.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="aged-paper p-6 rounded-vintage text-center relative"
            >
              <div className="absolute top-4 right-4">
                <PenTool className="w-5 h-5 text-vintage-gold opacity-50 transform -rotate-12" />
              </div>
              
              <div className="font-script text-lg text-vintage-burgundy mb-3">
                "I love connecting with fellow developers, travelers, and curious minds"
              </div>
              <div className="font-typewriter text-sm text-ink-brown mb-4">
                Whether you want to discuss a project, share travel experiences, 
                or just say hello - I'm always happy to chat!
              </div>
              <div className="font-script text-base text-vintage-burgundy">
                - Emmanuelle
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Tag, ArrowRight, Feather, MapPin, Coffee } from 'lucide-react';

interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  status: 'Published' | 'Draft';
  location: string;
  mood: string;
}

export default function JournalPage() {
  const journalEntries: JournalEntry[] = [
    {
      id: 'ENTRY-001',
      title: 'Building AI-Powered Applications with Next.js',
      excerpt: 'A comprehensive guide to integrating AI APIs and machine learning models into modern web applications. Discovered while experimenting in my Parisian studio.',
      category: 'AI Adventures',
      date: '2024-12-01',
      readTime: '8 min',
      tags: ['Next.js', 'AI', 'TensorFlow', 'JavaScript'],
      status: 'Published',
      location: 'Paris, France',
      mood: 'Inspired'
    },
    {
      id: 'ENTRY-002',
      title: 'Optimizing React Performance: Advanced Techniques',
      excerpt: 'Deep dive into React optimization strategies, including memo, useMemo, useCallback. Notes from late-night coding sessions.',
      category: 'Code Reflections',
      date: '2024-11-28',
      readTime: '12 min',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript'],
      status: 'Published',
      location: 'Lyon, France',
      mood: 'Focused'
    },
    {
      id: 'ENTRY-003',
      title: 'Microservices Architecture with Docker and Kubernetes',
      excerpt: 'Complete guide to designing and deploying microservices. Written during a weekend retreat in the mountains.',
      category: 'Tech Explorations',
      date: '2024-11-20',
      readTime: '15 min',
      tags: ['Docker', 'Kubernetes', 'Microservices', 'DevOps'],
      status: 'Published',
      location: 'Alps, France',
      mood: 'Contemplative'
    },
    {
      id: 'ENTRY-004',
      title: 'Python for Data Science: Advanced Analytics',
      excerpt: 'Exploring advanced data analysis techniques using pandas and scikit-learn. Insights from working with real datasets.',
      category: 'Data Stories',
      date: '2024-11-15',
      readTime: '10 min',
      tags: ['Python', 'Data Science', 'Pandas', 'Analytics'],
      status: 'Published',
      location: 'Marseille, France',
      mood: 'Curious'
    },
    {
      id: 'ENTRY-005',
      title: 'Securing Modern Web Applications',
      excerpt: 'Best practices for web security including authentication and protection against vulnerabilities. Critical lessons learned.',
      category: 'Security Chronicles',
      date: '2024-11-10',
      readTime: '14 min',
      tags: ['Security', 'Authentication', 'Web Security', 'Best Practices'],
      status: 'Published',
      location: 'Nice, France',
      mood: 'Vigilant'
    },
    {
      id: 'ENTRY-006',
      title: 'The Future of Prompt Engineering',
      excerpt: 'Exploring advanced prompt engineering techniques and AI interaction patterns. Still drafting these thoughts...',
      category: 'AI Adventures',
      date: '2024-12-15',
      readTime: '6 min',
      tags: ['Prompt Engineering', 'AI', 'GPT', 'LLM'],
      status: 'Draft',
      location: 'Toulouse, France',
      mood: 'Thoughtful'
    }
  ];

  const categories = ['All Entries', 'AI Adventures', 'Code Reflections', 'Tech Explorations', 'Data Stories', 'Security Chronicles'];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'Inspired': return '✨';
      case 'Focused': return '🎯';
      case 'Contemplative': return '🤔';
      case 'Curious': return '🔍';
      case 'Vigilant': return '🛡️';
      case 'Thoughtful': return '💭';
      default: return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Journal Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative"
        >
          {/* Journal Stamps */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className="travel-stamp bg-travel-stamp transform rotate-12 text-xs font-bold px-2 py-1">
              <div>JOURNAL</div>
              <div className="text-xs opacity-80">2024</div>
            </div>
            <div className="travel-stamp bg-vintage-burgundy transform -rotate-6 text-xs font-bold px-2 py-1">
              <div>ENTRIES</div>
              <div className="text-xs opacity-80">{journalEntries.length}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dotted border-ink-faded pb-4">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                Technical Journal
              </h1>
              <div className="font-script text-2xl text-vintage-burgundy mb-2">
                "Documenting the Digital Journey"
              </div>
              <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                Personal notes, discoveries, and reflections from my coding adventures
              </div>
            </div>

            {/* Journal Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-typewriter text-sm">
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">TOTAL ENTRIES:</span>
                <span className="font-bold text-ink-black">{journalEntries.length}</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">PUBLISHED:</span>
                <span className="font-bold text-vintage-forest">
                  {journalEntries.filter(p => p.status === 'Published').length}
                </span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">DRAFT:</span>
                <span className="font-bold text-vintage-rust">
                  {journalEntries.filter(p => p.status === 'Draft').length}
                </span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">LAST ENTRY:</span>
                <span className="font-bold text-travel-passport">
                  {new Date(Math.max(...journalEntries.map(e => new Date(e.date).getTime()))).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="aged-paper p-4 rounded-vintage">
            <h3 className="font-serif font-bold text-sm text-ink-black mb-3 border-b border-vintage-brass pb-1">
              Journal Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-2 font-typewriter text-xs font-semibold tracking-wide bg-paper-aged text-ink-brown border border-ink-faded rounded-vintage hover:bg-vintage-gold hover:text-ink-black transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="vintage-card p-6 hover:shadow-travel-card transition-all duration-300 group relative"
            >
              {/* Status Corner */}
              <div className={`absolute -top-2 -right-2 travel-stamp text-xs font-bold px-2 py-1 transform rotate-12 ${
                entry.status === 'Published' ? 'bg-vintage-forest' : 'bg-vintage-rust'
              }`}>
                {entry.status === 'Published' ? 'PUBLISHED' : 'DRAFT'}
              </div>

              {/* Entry Header */}
              <div className="border-b-2 border-vintage-brass pb-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Feather className="w-4 h-4 text-vintage-gold" />
                    <span className="font-typewriter font-bold text-xs tracking-wider text-ink-black">
                      {entry.id}
                    </span>
                  </div>
                  <div className="font-typewriter text-xs text-ink-faded">
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>

                <div className="text-xs font-typewriter text-vintage-burgundy font-semibold mb-2">
                  {entry.category}
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="mb-4">
                <h2 className="font-serif font-bold text-lg text-ink-black mb-2 group-hover:text-vintage-burgundy transition-colors leading-tight">
                  {entry.title}
                </h2>
                <p className="font-vintage text-sm text-ink-brown leading-relaxed">
                  {entry.excerpt}
                </p>
              </div>

              {/* Location & Mood */}
              <div className="aged-paper p-3 rounded-vintage mb-4">
                <div className="grid grid-cols-2 gap-3 font-typewriter text-xs">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 text-vintage-gold" />
                    <span className="text-ink-brown">{entry.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getMoodIcon(entry.mood)}</span>
                    <span className="text-ink-brown">{entry.mood}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-vintage-gold" />
                    <span className="text-ink-brown">{entry.readTime} read</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-3 h-3 text-vintage-gold" />
                    <span className="text-ink-brown">Study session</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <h4 className="font-serif font-semibold text-xs text-ink-black mb-2">
                  Topics covered:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-paper-aged text-ink-brown font-typewriter text-xs rounded-vintage border border-ink-faded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More */}
              <div className="pt-4 border-t border-dotted border-ink-faded">
                <button className="flex items-center space-x-2 text-vintage-burgundy hover:text-vintage-burgundy/80 font-typewriter text-sm font-semibold transition-colors group">
                  <span>Read full entry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Writer's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="aged-paper p-6 rounded-vintage text-center relative"
        >
          {/* Decorative quill */}
          <div className="absolute top-4 right-4">
            <Feather className="w-6 h-6 text-vintage-gold opacity-50 transform rotate-45" />
          </div>
          
          <div className="font-script text-xl text-vintage-burgundy mb-2">
            "Writing is thinking on paper"
          </div>
          <div className="font-typewriter text-sm text-ink-faded mb-4">
            Each entry captures a moment of discovery in my coding journey
          </div>
          <div className="font-script text-lg text-vintage-burgundy">
            - Emmanuelle
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
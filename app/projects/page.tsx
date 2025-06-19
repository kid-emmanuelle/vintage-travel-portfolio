'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  Users, 
  Globe,
  Smartphone,
  Brain,
  Zap,
  Star,
  Briefcase,
  Award,
  Target
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: 'Web Development' | 'AI/ML' | 'Mobile' | 'Tools' | 'Blockchain';
  status: 'Completed' | 'In Progress' | 'Deployed';
  duration: string;
  teamSize: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  highlights: string[];
  location: string;
  year: string;
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: 'EXP-001',
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot using OpenAI GPT with custom knowledge base and real-time learning capabilities.',
      techStack: ['Next.js', 'Python', 'OpenAI API', 'PostgreSQL', 'Docker'],
      category: 'AI/ML',
      status: 'Completed',
      duration: '6 weeks',
      teamSize: 'Solo Expedition',
      location: 'Paris, France',
      year: '2024',
      demoUrl: 'https://ai-chat-demo.vercel.app',
      githubUrl: 'https://github.com/kid-emmanuelle/ai-chat',
      features: ['Real-time chat', 'Context awareness', 'Multi-language', 'Custom training'],
      highlights: ['98% accuracy', '< 200ms response', '10k+ conversations']
    },
    {
      id: 'EXP-002',
      title: 'E-Commerce Analytics',
      description: 'Real-time dashboard for e-commerce metrics with predictive analytics and automated reporting.',
      techStack: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS'],
      category: 'Web Development',
      status: 'Deployed',
      duration: '8 weeks',
      teamSize: '3 explorers',
      location: 'Remote',
      year: '2024',
      demoUrl: 'https://analytics-dashboard.demo.com',
      githubUrl: 'https://github.com/kid-emmanuelle/ecommerce-analytics',
      features: ['Real-time metrics', 'Predictive analytics', 'Custom reports', 'API integration'],
      highlights: ['40% performance boost', '99.9% uptime', '5M+ data points']
    },
    {
      id: 'EXP-003',
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding neural network architectures and training processes.',
      techStack: ['Three.js', 'Python', 'PyTorch', 'WebGL', 'FastAPI'],
      category: 'AI/ML',
      status: 'In Progress',
      duration: '4 weeks',
      teamSize: 'Solo Expedition',
      location: 'Lyon, France',
      year: '2024',
      githubUrl: 'https://github.com/kid-emmanuelle/nn-visualizer',
      features: ['3D visualization', 'Real-time training', 'Interactive layers', 'Export models'],
      highlights: ['15 layer types', '60fps rendering', 'Educational tool']
    },
    {
      id: 'EXP-004',
      title: 'Smart Task Scheduler',
      description: 'AI-powered task management system with intelligent scheduling and priority optimization.',
      techStack: ['Flutter', 'Firebase', 'Python', 'ML Kit', 'Cloud Functions'],
      category: 'Mobile',
      status: 'Completed',
      duration: '5 weeks',
      teamSize: '2 explorers',
      location: 'Marseille, France',
      year: '2023',
      demoUrl: 'https://apps.demo.com/task-scheduler',
      githubUrl: 'https://github.com/kid-emmanuelle/smart-scheduler',
      features: ['AI scheduling', 'Priority optimization', 'Cross-platform', 'Offline sync'],
      highlights: ['85% efficiency gain', '4.8/5 rating', '1k+ users']
    },
    {
      id: 'EXP-005',
      title: 'API Performance Monitor',
      description: 'Comprehensive monitoring solution for API performance, uptime, and error tracking with alerts.',
      techStack: ['Go', 'Redis', 'Grafana', 'Prometheus', 'Kubernetes'],
      category: 'Tools',
      status: 'Deployed',
      duration: '3 weeks',
      teamSize: 'Solo Expedition',
      location: 'Nice, France',
      year: '2023',
      githubUrl: 'https://github.com/kid-emmanuelle/api-monitor',
      features: ['Real-time monitoring', 'Custom alerts', 'Performance metrics', 'Historical data'],
      highlights: ['Sub-second detection', '99.99% accuracy', 'DevOps integration']
    },
    {
      id: 'EXP-006',
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology with voter verification.',
      techStack: ['Solidity', 'Web3.js', 'React', 'IPFS', 'MetaMask'],
      category: 'Blockchain',
      status: 'Completed',
      duration: '7 weeks',
      teamSize: '4 explorers',
      location: 'Toulouse, France',
      year: '2023',
      demoUrl: 'https://vote-blockchain.demo.com',
      githubUrl: 'https://github.com/kid-emmanuelle/blockchain-voting',
      features: ['Blockchain security', 'Anonymous voting', 'Result transparency', 'Audit trail'],
      highlights: ['Zero tampering', '100% transparency', 'Academic project']
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return Brain;
      case 'Web Development': return Globe;
      case 'Mobile': return Smartphone;
      case 'Tools': return Zap;
      case 'Blockchain': return Target;
      default: return Briefcase;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-vintage-forest';
      case 'In Progress': return 'text-vintage-rust';
      case 'Deployed': return 'text-travel-passport';
      default: return 'text-ink-faded';
    }
  };

  const getStatusStamp = (status: string) => {
    switch (status) {
      case 'Completed': return { text: 'COMPLETE', color: 'bg-vintage-forest' };
      case 'In Progress': return { text: 'ACTIVE', color: 'bg-vintage-rust' };
      case 'Deployed': return { text: 'LIVE', color: 'bg-travel-passport' };
      default: return { text: 'DRAFT', color: 'bg-ink-faded' };
    }
  };

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Travel Document Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative"
        >
          {/* Expedition Stamps */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className="travel-stamp bg-travel-stamp transform rotate-12 text-xs font-bold px-2 py-1">
              <div>PORTFOLIO</div>
              <div className="text-xs opacity-80">2024</div>
            </div>
            <div className="travel-stamp bg-vintage-forest transform -rotate-6 text-xs font-bold px-2 py-1">
              <div>PROJECTS</div>
              <div className="text-xs opacity-80">{projects.length}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dotted border-ink-faded pb-4">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                Project Expeditions
              </h1>
              <div className="font-script text-2xl text-vintage-burgundy mb-2">
                "Technical Adventures & Discoveries"
              </div>
              <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                A collection of coding journeys and digital explorations
              </div>
            </div>

            {/* Document Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-typewriter text-sm">
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">TOTAL EXPEDITIONS:</span>
                <span className="font-bold text-ink-black">{projects.length}</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">ACTIVE PROJECTS:</span>
                <span className="font-bold text-vintage-rust">
                  {projects.filter(p => p.status === 'In Progress').length}
                </span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">COMPLETION RATE:</span>
                <span className="font-bold text-vintage-forest">
                  {Math.round((projects.filter(p => p.status === 'Completed').length / projects.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const statusStamp = getStatusStamp(project.status);
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="vintage-card p-6 hover:shadow-travel-card transition-all duration-300 group relative"
              >
                {/* Status Stamp */}
                <div className={`absolute -top-2 -right-2 travel-stamp ${statusStamp.color} text-xs font-bold px-2 py-1 transform rotate-12`}>
                  {statusStamp.text}
                </div>

                {/* Project Header */}
                <div className="border-b-2 border-vintage-brass pb-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <CategoryIcon className="w-5 h-5 text-vintage-gold" />
                      <div className="font-typewriter font-bold text-sm tracking-wider text-ink-black">
                        {project.id}
                      </div>
                    </div>
                    <div className="font-typewriter text-xs text-ink-faded">
                      {project.year}
                    </div>
                  </div>
                  
                  <h3 className="font-serif font-bold text-xl text-ink-black mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-ink-brown">
                    <MapPin className="w-4 h-4" />
                    <span className="font-typewriter">{project.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-vintage text-sm text-ink-brown mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Expedition Details */}
                <div className="aged-paper p-3 rounded-vintage mb-4">
                  <div className="grid grid-cols-2 gap-3 font-typewriter text-xs">
                    <div className="flex justify-between">
                      <span className="text-ink-faded">Duration:</span>
                      <span className="text-ink-black font-semibold">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-faded">Team:</span>
                      <span className="text-ink-black font-semibold">{project.teamSize}</span>
                    </div>
                    <div className="flex justify-between col-span-2">
                      <span className="text-ink-faded">Category:</span>
                      <span className="text-vintage-burgundy font-semibold">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-serif font-semibold text-sm text-ink-black mb-2">
                    Technical Equipment:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-paper-aged text-ink-brown font-typewriter text-xs rounded-vintage border border-ink-faded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-serif font-semibold text-sm text-ink-black mb-2">
                    Key Discoveries:
                  </h4>
                  <div className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-vintage-gold" />
                        <span className="font-typewriter text-xs text-ink-brown">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex space-x-2 pt-4 border-t border-dotted border-ink-faded">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-vintage-gold text-ink-black font-typewriter text-xs rounded-vintage hover:bg-vintage-brass transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 bg-vintage-burgundy text-white font-typewriter text-xs rounded-vintage hover:bg-vintage-burgundy/80 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explorer's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 aged-paper p-6 rounded-vintage text-center"
        >
          <div className="font-script text-xl text-vintage-burgundy mb-2">
            "Every project is a new adventure"
          </div>
          <div className="font-typewriter text-sm text-ink-faded">
            - Emmanuelle, Digital Explorer
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage; 
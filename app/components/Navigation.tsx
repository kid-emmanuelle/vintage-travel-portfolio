'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  Compass,
  MapPin,
  Notebook,
  Camera,
  User,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Plane
} from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState('--:--:--');

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { 
        hour12: false,
        timeZone: 'Europe/Paris'
      });
      setCurrentTime(time);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: '/', label: 'HOME', icon: Compass, stamp: 'ENTRY' },
    { href: '/projects', label: 'PROJECTS', icon: MapPin, stamp: 'WORK' },
    { href: '/blog', label: 'JOURNAL', icon: Notebook, stamp: 'NOTES' },
    { href: '/gallery', label: 'TRAVELS', icon: Camera, stamp: 'PHOTO' },
    { href: '/about', label: 'ABOUT', icon: User, stamp: 'PROFILE' },
    { href: '/contact', label: 'CONTACT', icon: Mail, stamp: 'MAIL' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 document-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-vintage-gold text-vintage-navy flex items-center justify-center rounded-vintage font-serif font-bold text-lg shadow-vintage">
                K
              </div>
              <div className="hidden sm:block">
                <div className="font-serif font-bold text-lg text-vintage-gold">
                  KIDFARFROMHOME
                </div>
                <div className="font-typewriter text-xs text-vintage-gold/70 tracking-wider">
                  TRAVEL PORTFOLIO
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group px-4 py-2 rounded-vintage transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-vintage-gold/20 text-vintage-gold shadow-vintage'
                      : 'text-vintage-gold/80 hover:text-vintage-gold hover:bg-vintage-gold/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-typewriter text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Travel stamp effect on hover/active */}
                  {isActive(item.href) && (
                    <div className="absolute -top-1 -right-1 travel-stamp text-xs font-bold transform rotate-12 animate-stamp">
                      {item.stamp}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              
              {/* Time & Location */}
              <div className="hidden md:block text-right">
                <div className="font-typewriter text-xs text-vintage-gold/70 tracking-wider">
                  FRANCE
                </div>
                <div 
                  className="font-typewriter text-sm text-vintage-gold font-semibold"
                  suppressHydrationWarning
                >
                  {currentTime}
                </div>
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-vintage bg-vintage-gold/10 hover:bg-vintage-gold/20 text-vintage-gold transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-vintage bg-vintage-gold/10 hover:bg-vintage-gold/20 text-vintage-gold transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/20 bg-vintage-navy/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-vintage transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-vintage-gold/20 text-vintage-gold shadow-vintage'
                      : 'text-vintage-gold/80 hover:text-vintage-gold hover:bg-vintage-gold/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-typewriter font-semibold tracking-wide">
                    {item.label}
                  </span>
                  {isActive(item.href) && (
                    <div className="ml-auto travel-stamp text-xs font-bold">
                      {item.stamp}
                    </div>
                  )}
                </Link>
              ))}
              
              {/* Mobile Time & Location */}
              <div className="px-4 py-3 border-t border-white/20 mt-4">
                <div className="flex items-center justify-between text-vintage-gold/70">
                  <div className="flex items-center space-x-2">
                    <Plane className="w-4 h-4" />
                    <span className="font-typewriter text-sm">PARIS, FRANCE</span>
                  </div>
                  <div 
                    className="font-typewriter text-sm font-semibold text-vintage-gold"
                    suppressHydrationWarning
                  >
                    {currentTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation; 
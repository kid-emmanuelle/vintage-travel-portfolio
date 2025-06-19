'use client';

import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar, Plane, Mountain, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface TravelCollection {
  id: string;
  location: string;
  country: string;
  coordinates: string;
  visitDate: string;
  duration: string;
  transport: string;
  imageCount: number;
  highlights: string[];
  description: string;
  mood: string;
  weather: string;
  memorable: string;
  stamp: { text: string; color: string; rotation: string };
  image: string;
}

export default function TravelsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const collections: TravelCollection[] = [
    {
      id: 'ALBUM-001',
      location: 'Paris',
      country: 'France',
      coordinates: '48.8566° N, 2.3522° E',
      visitDate: '2024-03-15',
      duration: '5 days',
      transport: 'Train',
      imageCount: 127,
      highlights: ['Eiffel Tower at sunrise', 'Louvre reflections', 'Seine river walks'],
      description: 'The city of lights never fails to inspire. Wandering through cobblestone streets with my camera, capturing both the iconic monuments and quiet moments in hidden cafés.',
      mood: 'Romantic',
      weather: 'Spring breeze',
      memorable: 'Sunset picnic by the Seine',
      stamp: { text: 'PARIS', color: 'bg-travel-stamp', rotation: 'rotate-12' },
      image: '/images/paris.png'
    },
    {
      id: 'ALBUM-002',
      location: 'Tokyo',
      country: 'Japan',
      coordinates: '35.6762° N, 139.6503° E',
      visitDate: '2024-01-20',
      duration: '10 days',
      transport: 'Flight',
      imageCount: 284,
      highlights: ['Shibuya crossing chaos', 'Cherry blossom temples', 'Neon night streets'],
      description: 'A mesmerizing blend of ancient traditions and futuristic innovation. Every corner tells a story, from quiet temples to bustling streets alive with neon dreams.',
      mood: 'Energetic',
      weather: 'Cool winter',
      memorable: 'Sushi breakfast at Tsukiji',
      stamp: { text: 'TOKYO', color: 'bg-vintage-forest', rotation: '-rotate-6' },
      image: '/images/tokyo.jpg'
    },
    {
      id: 'ALBUM-003',
      location: 'Da Nang',
      country: 'Vietnam',
      coordinates: '16.0544° N, 108.2022° E',
      visitDate: '2019-01-01',
      duration: '4 days',
      transport: 'Plane',
      imageCount: 93,
      highlights: ['Sunset on the beach', 'Local food', 'Mountains'],
      description: 'Royal elegance meets modern creativity in this timeless city. Autumn colors in Hyde Park and the Thames reflecting centuries of history.',
      mood: 'Nostalgic',
      weather: 'Sunny',
      memorable: 'Diving in the Cu Lao Cham Islands',
      stamp: { text: 'DANANG', color: 'bg-vintage-navy', rotation: '-rotate-3' },
      image: '/images/danang.jpg'
    },
    {
      id: 'ALBUM-004',
      location: 'Barcelona',
      country: 'Spain',
      coordinates: '41.3851° N, 2.1734° E',
      visitDate: '2024-07-12',
      duration: '6 days',
      transport: 'Train',
      imageCount: 156,
      highlights: ['Gaudí architecture', 'Beach sunsets', 'Street art'],
      description: 'The vibrant soul of Catalonia captured through architectural marvels and Mediterranean sunsets. Gaudí\'s genius meets modern street art in perfect harmony.',
      mood: 'Vibrant',
      weather: 'Warm summer',
      memorable: 'Sagrada Familia at golden hour',
      stamp: { text: 'BCN', color: 'bg-vintage-rust', rotation: '-rotate-12' },
      image: '/images/barcelona.jpg'
    },
    {
      id: 'ALBUM-005',
      location: 'Reykjavik',
      country: 'Iceland',
      coordinates: '64.1466° N, -21.9426° W',
      visitDate: '2024-09-03',
      duration: '8 days',
      transport: 'Flight',
      imageCount: 201,
      highlights: ['Northern lights', 'Glacier landscapes', 'Geothermal springs'],
      description: 'Land of fire and ice, where nature puts on the most spectacular show. Chasing aurora borealis and capturing the raw beauty of untouched landscapes.',
      mood: 'Adventurous',
      weather: 'Crisp autumn',
      memorable: 'Northern lights at midnight',
      stamp: { text: 'REY', color: 'bg-travel-postmark', rotation: 'rotate-6' },
      image: '/images/reykjavik.jpg'
    },
    {
      id: 'ALBUM-006',
      location: 'Amsterdam',
      country: 'Netherlands',
      coordinates: '52.3676° N, 4.9041° E',
      visitDate: '2024-05-08',
      duration: '3 days',
      transport: 'Bus',
      imageCount: 89,
      highlights: ['Canal reflections', 'Bike culture', 'Tulip season'],
      description: 'Cycling through canal-lined streets, discovering the Dutch way of life. The city\'s charm lies in its relaxed atmosphere and stunning waterway reflections.',
      mood: 'Peaceful',
      weather: 'Sunny days',
      memorable: 'Bike ride through Vondelpark',
      stamp: { text: 'AMS', color: 'bg-travel-visa', rotation: 'rotate-3' },
      image: '/images/amsterdam.jpg'
    },
    {
      id: 'ALBUM-007',
      location: 'London',
      country: 'United Kingdom',
      coordinates: '51.5074° N, -0.1278° W',
      visitDate: '2024-11-15',
      duration: '4 days',
      transport: 'Eurostar',
      imageCount: 93,
      highlights: ['Thames bridges', 'Autumn parks', 'Historic architecture'],
      description: 'Royal elegance meets modern creativity in this timeless city. Autumn colors in Hyde Park and the Thames reflecting centuries of history.',
      mood: 'Nostalgic',
      weather: 'Foggy mornings',
      memorable: 'Afternoon tea in Covent Garden',
      stamp: { text: 'LON', color: 'bg-vintage-navy', rotation: '-rotate-3' },
      image: '/images/london.jpg'
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(collections.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCollections = collections.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'Romantic': return '💕';
      case 'Energetic': return '⚡';
      case 'Peaceful': return '🕊️';
      case 'Vibrant': return '🌈';
      case 'Adventurous': return '🗻';
      case 'Nostalgic': return '🍂';
      default: return '📸';
    }
  };

  const getWeatherIcon = (weather: string) => {
    if (weather.includes('sun') || weather.includes('Sunny')) return '☀️';
    if (weather.includes('spring') || weather.includes('Spring')) return '🌸';
    if (weather.includes('winter') || weather.includes('Cool')) return '❄️';
    if (weather.includes('warm') || weather.includes('summer')) return '🌞';
    if (weather.includes('autumn') || weather.includes('Crisp')) return '🍁';
    if (weather.includes('fog') || weather.includes('Foggy')) return '🌫️';
    return '🌤️';
  };

  return (
    <div className="min-h-screen bg-paper-light bg-paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Travel Album Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="passport-page mb-12 relative"
        >
          {/* Travel Stamps */}
          <div className="absolute top-4 right-4 space-y-2">
            <div className="travel-stamp bg-travel-stamp transform rotate-12 text-xs font-bold px-2 py-1">
              <div>TRAVELS</div>
              <div className="text-xs opacity-80">2024</div>
            </div>
            <div className="travel-stamp bg-vintage-gold transform -rotate-6 text-xs font-bold px-2 py-1">
              <div>PHOTOS</div>
              <div className="text-xs opacity-80">{collections.reduce((acc, col) => acc + col.imageCount, 0)}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-b-2 border-dotted border-ink-faded pb-4">
              <h1 className="font-serif font-bold text-4xl lg:text-5xl text-ink-black mb-2">
                Travel Memories
              </h1>
              <div className="font-script text-2xl text-vintage-burgundy mb-2">
                "Collecting moments, not things"
              </div>
              <div className="font-typewriter text-lg text-ink-brown tracking-wide">
                A visual diary of adventures across Europe and beyond
              </div>
            </div>

            {/* Travel Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-typewriter text-sm">
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">DESTINATIONS:</span>
                <span className="font-bold text-ink-black">{collections.length}</span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">TOTAL PHOTOS:</span>
                <span className="font-bold text-vintage-gold">
                  {collections.reduce((acc, col) => acc + col.imageCount, 0)}
                </span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">COUNTRIES:</span>
                <span className="font-bold text-travel-passport">
                  {Array.from(new Set(collections.map(c => c.country))).length}
                </span>
              </div>
              <div className="flex justify-between border-b border-dotted border-ink-faded pb-1">
                <span className="text-ink-faded">MILES TRAVELED:</span>
                <span className="font-bold text-vintage-forest">12,450</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo Albums Grid - 3 columns, max 4 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="vintage-card hover:shadow-travel-card transition-all duration-300 group relative overflow-hidden"
            >
              {/* Travel Stamp */}
              <div className={`absolute -top-2 -right-2 travel-stamp ${collection.stamp.color} text-xs font-bold px-2 py-1 transform ${collection.stamp.rotation}`}>
                {collection.stamp.text}
              </div>

              {/* Photo Placeholder */}
              <div className="h-32 bg-gradient-to-br from-paper-aged via-paper-old to-paper-dark flex items-center justify-center relative overflow-hidden">
                <a href={collection.image} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                  <img 
                    src={collection.image} 
                    alt={collection.location} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback content when image fails to load */}
                  <div className="w-full h-full flex items-center justify-center text-center text-vintage-brass" style={{ display: 'none' }}>
                    <div>
                      <Camera className="w-8 h-8 mx-auto mb-1" />
                      <div className="font-typewriter text-xs">{collection.location.toUpperCase()}</div>
                      <div className="font-typewriter text-xs opacity-70">{collection.imageCount} photos</div>
                    </div>
                  </div>
                </a>
                
                {/* Photo corners */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-ink-brown opacity-60"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-ink-brown opacity-60"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-ink-brown opacity-60"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-ink-brown opacity-60"></div>
              </div>

              <div className="p-4">
                {/* Album Header */}
                <div className="border-b-2 border-vintage-brass pb-2 mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1">
                      <Mountain className="w-3 h-3 text-vintage-gold" />
                      <span className="font-typewriter font-bold text-xs tracking-wider text-ink-black">
                        {collection.id}
                      </span>
                    </div>
                    <div className="font-typewriter text-xs text-ink-faded">
                      {new Date(collection.visitDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-ink-black mb-1">
                    {collection.location}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-ink-brown">
                    <MapPin className="w-3 h-3" />
                    <span className="font-typewriter text-xs">{collection.country}</span>
                  </div>
                </div>

                {/* Travel Story */}
                <p className="font-vintage text-xs text-ink-brown leading-relaxed mb-3 line-clamp-2">
                  {collection.description}
                </p>

                {/* Trip Details */}
                <div className="aged-paper p-2 rounded-vintage mb-3">
                  <div className="grid grid-cols-2 gap-2 font-typewriter text-xs">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{getMoodIcon(collection.mood)}</span>
                      <span className="text-ink-brown text-xs">{collection.mood}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{getWeatherIcon(collection.weather)}</span>
                      <span className="text-ink-brown text-xs">{collection.weather}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Plane className="w-3 h-3 text-vintage-gold" />
                      <span className="text-ink-brown text-xs">{collection.transport}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-vintage-gold" />
                      <span className="text-ink-brown text-xs">{collection.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Most Memorable */}
                <div className="mb-3">
                  <h4 className="font-serif font-semibold text-xs text-ink-black mb-1 flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-vintage-burgundy" />
                    <span>Most memorable:</span>
                  </h4>
                  <div className="font-script text-xs text-vintage-burgundy italic line-clamp-1">
                    "{collection.memorable}"
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-2">
                  <h4 className="font-serif font-semibold text-xs text-ink-black mb-1">
                    Photo highlights:
                  </h4>
                  <div className="space-y-1">
                    {collection.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <Star className="w-2 h-2 text-vintage-gold" />
                        <span className="font-typewriter text-xs text-ink-brown line-clamp-1">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`vintage-button flex items-center space-x-2 px-4 py-2 rounded-vintage font-typewriter text-sm transition-all duration-300 ${
                currentPage === 1 
                  ? 'opacity-50 cursor-not-allowed bg-paper-aged text-ink-faded' 
                  : 'bg-vintage-gold text-ink-black hover:bg-vintage-brass'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full font-typewriter text-sm transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-vintage-burgundy text-paper-light'
                      : 'bg-paper-aged text-ink-brown hover:bg-vintage-gold hover:text-ink-black'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`vintage-button flex items-center space-x-2 px-4 py-2 rounded-vintage font-typewriter text-sm transition-all duration-300 ${
                currentPage === totalPages 
                  ? 'opacity-50 cursor-not-allowed bg-paper-aged text-ink-faded' 
                  : 'bg-vintage-gold text-ink-black hover:bg-vintage-brass'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-8"
          >
            <div className="font-typewriter text-sm text-ink-faded">
              Showing {startIndex + 1}-{Math.min(endIndex, collections.length)} of {collections.length} travel albums
            </div>
          </motion.div>
        )}

        {/* Traveler's Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="aged-paper p-6 rounded-vintage text-center relative"
        >
          {/* Decorative camera */}
          <div className="absolute top-4 right-4">
            <Camera className="w-6 h-6 text-vintage-gold opacity-50 transform -rotate-12" />
          </div>
          
          <div className="font-script text-xl text-vintage-burgundy mb-2">
            "To travel is to live"
          </div>
          <div className="font-typewriter text-sm text-ink-faded mb-4">
            Each destination teaches us something new about the world and ourselves
          </div>
          <div className="font-script text-lg text-vintage-burgundy">
            - Emmanuelle, wandering photographer
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
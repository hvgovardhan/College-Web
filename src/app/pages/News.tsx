import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHero } from '../components/PageHero';

const newsItems = [
  {
    id: 1,
    title: 'Elite University Ranks #1 in National Innovation Index',
    excerpt: 'Our commitment to research and innovation has earned us the top position...',
    date: 'March 25, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQ1MDg4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: true,
  },
  {
    id: 2,
    title: 'New AI Research Lab Inaugurated with $10M Funding',
    excerpt: 'State-of-the-art facility to advance artificial intelligence research...',
    date: 'March 20, 2026',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3NDU0NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 3,
    title: 'Annual Tech Fest "Innovate 2026" Registration Opens',
    excerpt: 'Join us for three days of technology, innovation, and networking...',
    date: 'March 18, 2026',
    category: 'Event',
    image: 'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzc0NTAxNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 4,
    title: 'Students Win International Hackathon Competition',
    excerpt: 'Team Elite secures first place at Global Hack 2026...',
    date: 'March 15, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1565902608227-5b6c311817a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQ1MTI0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 5,
    title: 'Admissions Open for Fall 2026 Semester',
    excerpt: 'Applications are now being accepted for undergraduate and graduate programs...',
    date: 'March 10, 2026',
    category: 'Admissions',
    image: 'https://images.unsplash.com/photo-1752920299180-e8fd9276c202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NzQ1MDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 6,
    title: 'Professor Dr. Smith Receives Nobel Prize in Physics',
    excerpt: 'Groundbreaking work in quantum mechanics recognized globally...',
    date: 'March 5, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NTg4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 7,
    title: 'New Partnership with Silicon Valley Tech Companies',
    excerpt: 'Collaborative programs to enhance student internship opportunities...',
    date: 'March 1, 2026',
    category: 'Partnership',
    image: 'https://images.unsplash.com/photo-1762341118920-0b65e8d88aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzQ1ODA5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
  {
    id: 8,
    title: 'Campus Sustainability Initiative Launched',
    excerpt: 'Ambitious plan to achieve carbon neutrality by 2030...',
    date: 'February 28, 2026',
    category: 'Campus',
    image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    featured: false,
  },
];

const categories = ['All', 'Achievement', 'Research', 'Event', 'Admissions', 'Partnership', 'Campus'];

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div>
      <PageHero
        title="News & Announcements"
        subtitle="Stay updated with the latest from our campus"
        image="https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-orange-900/85 via-red-800/75 to-rose-900/80"
        icon={<Calendar className="w-10 h-10 text-white" />}
        badge="Latest Updates · Events · Achievements"
      />

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 sticky top-[73px] z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid grid-cols-4 md:grid-cols-7 w-full">
                {categories.map(cat => (
                  <TabsTrigger key={cat} value={cat} className="text-xs md:text-sm">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && selectedCategory === 'All' && !searchTerm && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-96 lg:h-auto">
                    <ImageWithFallback
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300">
                      Featured
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                      {featuredNews.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <Badge variant="secondary">{featuredNews.category}</Badge>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition cursor-pointer">
                    <div className="h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                        {item.excerpt}
                      </p>
                      <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                        Read More →
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No news found matching your criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-orange-100 mb-6">
              Subscribe to our newsletter for the latest news and events
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <button className="px-6 py-2 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

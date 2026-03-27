import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Play, Calendar } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHero } from '../components/PageHero';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc0NTMzNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Campus', title: 'Main Campus Building' },
  { id: 2, src: 'https://images.unsplash.com/photo-1752920299180-e8fd9276c202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NzQ1MDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Academics', title: 'Central Library' },
  { id: 3, src: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Student Life', title: 'Student Community' },
  { id: 4, src: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3NDU0NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Research', title: 'Research Laboratory' },
  { id: 5, src: 'https://images.unsplash.com/photo-1562506265-8de78e8c8f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzQ1NDAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Sports', title: 'Sports Complex' },
  { id: 6, src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Academics', title: 'Lecture Hall' },
  { id: 7, src: 'https://images.unsplash.com/photo-1700710909700-d026edc77079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZG9ybWl0b3J5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc0NTg4Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Campus', title: 'Student Housing' },
  { id: 8, src: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxhYm9yYXRvcnklMjBleHBlcmltZW50fGVufDF8fHx8MTc3NDU4ODI5Nnww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Research', title: 'Lab Experiment' },
  { id: 9, src: 'https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzQ1MDg4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Events', title: 'Graduation Ceremony' },
  { id: 10, src: 'https://images.unsplash.com/photo-1565902608227-5b6c311817a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzQ1MTI0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Campus', title: 'Campus Architecture' },
  { id: 11, src: 'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzc0NTAxNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Student Life', title: 'Classroom Discussion' },
  { id: 12, src: 'https://images.unsplash.com/photo-1764885518782-5d301f23f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXVkaXRvcml1bSUyMGV2ZW50fGVufDF8fHx8MTc3NDU4ODI5Nnww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Events', title: 'Auditorium Event' },
];

const videos = [
  { id: 1, title: 'Virtual Campus Tour', thumbnail: 'https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc0NTMzNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080', duration: '5:30' },
  { id: 2, title: 'Student Life at Elite University', thumbnail: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080', duration: '8:15' },
  { id: 3, title: 'Research Excellence', thumbnail: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3NDU0NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080', duration: '6:45' },
  { id: 4, title: 'Annual Fest Highlights', thumbnail: 'https://images.unsplash.com/photo-1764885518782-5d301f23f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXVkaXRvcml1bSUyMGV2ZW50fGVufDF8fHx8MTc3NDU4ODI5Nnww&ixlib=rb-4.1.0&q=80&w=1080', duration: '12:20' },
];

const categories = ['All', 'Campus', 'Academics', 'Student Life', 'Research', 'Sports', 'Events'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = images.filter(img =>
    selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="Explore campus life through our lens"
        gradient="bg-gradient-to-r from-pink-700 via-purple-600 to-indigo-700"
        icon={<ImageIcon className="w-10 h-10 text-white" />}
        badge="Campus · Events · Research · Sports"
      />

      {/* Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            {/* Photos Tab */}
            <TabsContent value="photos">
              {/* Category Filter */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                      selectedCategory === cat
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Image Grid - Masonry Style */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredImages.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="break-inside-avoid"
                  >
                    <Card
                      className="overflow-hidden cursor-pointer hover:shadow-xl transition group"
                      onClick={() => setSelectedImage(img.id)}
                    >
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={img.src}
                          alt={img.title}
                          className="w-full h-auto object-cover transition-transform group-hover:scale-110 duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <div className="text-white">
                            <h3 className="font-bold mb-1">{img.title}</h3>
                            <Badge variant="secondary">{img.category}</Badge>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition group">
                      <div className="relative">
                        <ImageWithFallback
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                            <Play className="w-8 h-8 text-pink-600 ml-1" />
                          </div>
                        </div>
                        <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {video.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-800 dark:to-purple-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Experience Our Campus Virtually</h3>
              <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                Take an immersive 360° virtual tour of our beautiful campus from the comfort of your home
              </p>
              <button className="px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                Start Virtual Tour
              </button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Modal (simplified) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-5xl w-full"
          >
            <ImageWithFallback
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt={images.find(img => img.id === selectedImage)?.title || ''}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}

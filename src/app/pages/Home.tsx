import React from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ArrowRight, Users, BookOpen, Award, TrendingUp, Calendar, Bell, GraduationCap, MapPin, Phone, ChevronRight, Clock, Flame, Trophy, Cpu } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Newsletter } from '../components/Newsletter';

const stats = [
  { label: 'Students Enrolled', value: 15000, display: '15,000+', icon: Users },
  { label: 'Programs Offered', value: 200, display: '200+', icon: BookOpen },
  { label: 'Awards Won', value: 500, display: '500+', icon: Award },
  { label: 'Placement Rate', value: 95, display: '95%', icon: TrendingUp },
];

const announcements = [
  { title: 'Admissions Open for 2026', date: 'March 15, 2026', type: 'Admissions' },
  { title: 'Annual Tech Fest - Innovate 2026', date: 'April 10, 2026', type: 'Event' },
  { title: 'Research Grant Winners Announced', date: 'March 20, 2026', type: 'Research' },
  { title: 'New AI & Data Science Lab Inaugurated', date: 'March 12, 2026', type: 'Facilities' },
];

const upcomingEvents = [
  { title: 'Innovate 2026 – Tech Fest', date: 'Apr 10', day: 'Thu', category: 'Tech', icon: Cpu, color: 'from-violet-500 to-purple-600' },
  { title: 'Inter-College Hackathon', date: 'Apr 18', day: 'Fri', category: 'Competition', icon: Trophy, color: 'from-orange-500 to-amber-500' },
  { title: 'Industry Connect Summit', date: 'May 3', day: 'Sat', category: 'Career', icon: Flame, color: 'from-blue-500 to-cyan-500' },
];

const highlights = [
  {
    title: 'World-Class Faculty',
    description: 'Learn from renowned professors and industry experts',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Cutting-Edge Research',
    description: 'State-of-the-art labs and research facilities',
    image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3NDU0NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Vibrant Campus Life',
    description: 'Over 100 clubs and organizations to join',
    image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const heroImages = [
  'https://images.unsplash.com/photo-1764885518782-5d301f23f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBlbnRyYW5jZXxlbnwxfHx8fDE3NzQ1OTI5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1623156167557-281309073eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2FtcHVzJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NTkyOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBtb2Rlcm4lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NTkyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

// Animated counter hook
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

function StatCard({ stat, idx }: { stat: typeof stats[0]; idx: number }) {
  const { count, ref } = useCounter(stat.value);
  const suffix = stat.display.replace(/[0-9,]/g, '');
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
    >
      <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
        <CardContent className="pt-8 pb-6">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <stat.icon className="w-7 h-7 text-white" />
          </div>
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1 tabular-nums">
            {count.toLocaleString()}{suffix}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {stat.label}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroImages[currentSlide]}
                alt="RNS Institute Of Technology Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent dark:from-blue-950/95 dark:via-blue-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-4 bg-blue-500/30 text-white border-blue-400">
                Ranked #1 in Innovation
              </Badge>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shape Your Future at RNS Institute Of Technology
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Where excellence meets opportunity. Join thousands of students in pursuing academic excellence and innovation.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/admissions">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button size="lg" variant="outline" className="border-white text-white bg-black/20 hover:bg-white hover:text-blue-900">
                  Explore Programs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Live Announcements Ticker */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-3 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...announcements, ...announcements].map((announcement, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4">
              <Bell className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">{announcement.title}</span>
              <span className="text-blue-200">•</span>
              <span className="text-blue-200 text-sm">{announcement.date}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-indigo-50/60 dark:from-blue-950/20 dark:to-indigo-950/20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <StatCard key={stat.label} stat={stat} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-950 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-purple-900/30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Don't Miss Out</span>
              <h2 className="text-3xl font-bold text-white mt-1">Upcoming Events</h2>
            </div>
            <Link to="/news">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10 hover:text-white gap-2 group">
                All Events <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/60 border border-gray-700/50 p-5 hover:border-gray-500 transition-all duration-300 group cursor-pointer">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 rounded-full -translate-y-8 translate-x-8 group-hover:opacity-20 transition`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex flex-col items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white text-xs font-bold">{event.day}</span>
                      <span className="text-white text-sm font-extrabold leading-none">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{event.category}</span>
                      <h3 className="text-white font-bold mt-0.5 group-hover:text-blue-300 transition">{event.title}</h3>
                      <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{event.date}, 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose RNS Institute Of Technology?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience world-class education with unmatched opportunities for growth and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 dark:from-gray-900 dark:via-blue-950/30 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">What's Happening</span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                Latest Announcements
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Stay updated with our latest news and events
              </p>
            </div>
            <Link to="/news">
              <Button variant="outline" className="group gap-2">
                View All
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {announcements.map((announcement, idx) => {
              const typeColors: Record<string, { bg: string; text: string; border: string; icon: string }> = {
                Admissions: { bg: 'bg-blue-50 dark:bg-blue-950/50', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', icon: 'bg-blue-500' },
                Event:      { bg: 'bg-purple-50 dark:bg-purple-950/50', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', icon: 'bg-purple-500' },
                Research:   { bg: 'bg-emerald-50 dark:bg-emerald-950/50', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800', icon: 'bg-emerald-500' },
                Facilities: { bg: 'bg-orange-50 dark:bg-orange-950/50', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', icon: 'bg-orange-500' },
              };
              const colors = typeColors[announcement.type] ?? typeColors['Event'];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                    <div className={`w-11 h-11 rounded-xl ${colors.icon} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${colors.text} bg-white/60 dark:bg-black/20`}>
                        {announcement.type}
                      </span>
                      <h3 className={`font-bold text-base mb-1 ${colors.text} group-hover:underline`}>
                        {announcement.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {announcement.date}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 mt-1 ${colors.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest">Navigate</span>
            <h2 className="text-4xl font-bold mt-1 text-gray-900 dark:text-white">
              Quick Access
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                name: 'Apply Now',
                desc: 'Start your journey',
                path: '/admissions',
                icon: GraduationCap,
                gradient: 'from-blue-500 to-blue-700',
                glow: 'hover:shadow-blue-200 dark:hover:shadow-blue-900',
              },
              {
                name: 'Programs',
                desc: 'Explore academics',
                path: '/academics',
                icon: BookOpen,
                gradient: 'from-indigo-500 to-purple-600',
                glow: 'hover:shadow-indigo-200 dark:hover:shadow-indigo-900',
              },
              {
                name: 'Campus Tour',
                desc: 'See our campus',
                path: '/gallery',
                icon: MapPin,
                gradient: 'from-emerald-500 to-teal-600',
                glow: 'hover:shadow-emerald-200 dark:hover:shadow-emerald-900',
              },
              {
                name: 'Contact Us',
                desc: 'Get in touch',
                path: '/contact',
                icon: Phone,
                gradient: 'from-orange-500 to-rose-500',
                glow: 'hover:shadow-orange-200 dark:hover:shadow-orange-900',
              },
            ].map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Link to={link.path}>
                  <div className={`relative overflow-hidden bg-gradient-to-br ${link.gradient} text-white p-6 rounded-2xl shadow-lg ${link.glow} hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-6 -left-4 w-24 h-24 bg-black/10 rounded-full" />
                    <div className="relative z-10">
                      <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition">
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-lg font-bold leading-tight">{link.name}</div>
                      <div className="text-xs text-white/70 mt-1">{link.desc}</div>
                    </div>
                    <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Alumni Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from those who've walked these halls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Arjun Sharma',
                role: 'Software Engineer at Microsoft, Hyderabad',
                avatar: 'AS',
                color: 'from-blue-500 to-indigo-600',
                text: 'RNSIT gave me the technical foundation and industry exposure I needed. The faculty mentorship and lab facilities are truly exceptional.',
              },
              {
                name: 'Priya Nair',
                role: 'Data Scientist at Infosys, Bengaluru',
                avatar: 'PN',
                color: 'from-purple-500 to-pink-500',
                text: 'The research culture here is outstanding. I published two papers during my final year and landed my dream job through the placement cell.',
              },
              {
                name: 'Rohan Kulkarni',
                role: 'Co-founder, TechVenture Startup',
                avatar: 'RK',
                color: 'from-emerald-500 to-teal-500',
                text: 'The entrepreneurship support and E-Cell at RNSIT helped me launch my startup. The mentors here genuinely invest in your success.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-sm font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates and news
            </p>
          </motion.div>

          <Newsletter />
        </div>
      </section>
    </div>
  );
}
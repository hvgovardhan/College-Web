import { motion } from 'motion/react';
import { Users, Music, Trophy, Heart, Coffee, Dumbbell, BookOpen, Palette, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { PageHero } from '../components/PageHero';

const clubGradients = [
  'from-blue-500 to-indigo-600', 'from-purple-500 to-pink-500', 'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-500', 'from-rose-500 to-pink-600', 'from-cyan-500 to-blue-500',
  'from-violet-500 to-purple-600', 'from-green-500 to-emerald-600',
];

const facilityGradients = [
  'from-blue-500 to-indigo-600', 'from-emerald-500 to-teal-600', 'from-orange-500 to-amber-500',
  'from-purple-500 to-pink-500', 'from-rose-500 to-red-500', 'from-violet-500 to-purple-600',
];

const eventTypeColors: Record<string, string> = {
  Cultural: 'bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
  Technical: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
  Sports: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
  Professional: 'bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400',
};

const clubs = [
  { name: 'Robotics Club', category: 'Technical', icon: Users, members: 150 },
  { name: 'Music Society', category: 'Cultural', icon: Music, members: 200 },
  { name: 'Drama Club', category: 'Cultural', icon: Palette, members: 120 },
  { name: 'Coding Club', category: 'Technical', icon: BookOpen, members: 300 },
  { name: 'Photography Club', category: 'Arts', icon: Palette, members: 180 },
  { name: 'Debate Society', category: 'Literary', icon: Users, members: 100 },
  { name: 'Dance Troupe', category: 'Cultural', icon: Music, members: 150 },
  { name: 'Environmental Club', category: 'Social', icon: Heart, members: 90 },
];

const facilities = [
  { name: 'Modern Library', description: '50,000+ books, digital resources, and study spaces', icon: BookOpen },
  { name: 'Sports Complex', description: 'Cricket ground, indoor courts, and fitness center', icon: Trophy },
  { name: 'Student Center', description: 'Cafeterias, lounges, and recreational areas', icon: Coffee },
  { name: 'Fitness Center', description: 'State-of-the-art gym equipment and yoga studio', icon: Dumbbell },
  { name: 'Medical Center', description: '24/7 healthcare services for students', icon: Heart },
  { name: 'Arts Complex', description: 'Auditorium, music rooms, and art studios', icon: Palette },
];

const events = [
  { name: 'Annual Fest - Innovate 2026', date: 'April 10-12, 2026', type: 'Cultural' },
  { name: 'Tech Symposium', date: 'March 25, 2026', type: 'Technical' },
  { name: 'Sports Week', date: 'May 5-10, 2026', type: 'Sports' },
  { name: 'Hackathon 2026', date: 'April 20-21, 2026', type: 'Technical' },
  { name: 'Music Concert', date: 'March 30, 2026', type: 'Cultural' },
  { name: 'Career Fair', date: 'April 15, 2026', type: 'Professional' },
];

export default function CampusLife() {
  return (
    <div>
      <PageHero
        title="Campus Life"
        subtitle="More than just academics — a vibrant, thriving community"
        image="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-purple-900/85 via-pink-800/75 to-rose-900/80"
        icon={<Users className="w-10 h-10 text-white" />}
        badge="100+ Clubs · 500+ Events Annually"
      />

      {/* Overview Stats */}
      <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: '100+', label: 'Student Clubs' },
              { value: '500+', label: 'Events Annually' },
              { value: '50+', label: 'Sports Teams' },
            ].map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 text-center shadow-lg">
                  <div className="text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/40 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Get Involved</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Student Clubs</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Find your passion and connect with like-minded peers</p>
          </motion.div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8 rounded-2xl">
              {['all', 'technical', 'cultural', 'arts', 'social'].map(cat => (
                <TabsTrigger key={cat} value={cat} className="rounded-xl capitalize">{cat === 'all' ? 'All Clubs' : cat}</TabsTrigger>
              ))}
            </TabsList>
            {['all', 'technical', 'cultural', 'arts', 'social'].map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {clubs.filter(c => category === 'all' || c.category.toLowerCase() === category).map((club, idx) => (
                    <motion.div key={club.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="hover-lift">
                      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 text-center shadow-lg group cursor-pointer">
                        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${clubGradients[idx % clubGradients.length]}`} />
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${clubGradients[idx % clubGradients.length]} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                          <club.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{club.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">{club.category}</span>
                        <p className="text-xs text-gray-400 mt-2">{club.members} Members</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Infrastructure</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Campus Facilities</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">World-class amenities for your comfort and growth</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div key={facility.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="hover-lift">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-lg h-full">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${facilityGradients[idx]} opacity-5 rounded-full translate-x-6 -translate-y-6`} />
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${facilityGradients[idx]} flex items-center justify-center mb-4 shadow-lg`}>
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{facility.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/30 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">What's On</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Upcoming Events</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Don't miss out on exciting activities throughout the year</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 shadow-lg group cursor-pointer">
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${eventTypeColors[event.type] ?? 'bg-gray-100 text-gray-600'}`}>{event.type}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{event.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Accommodation</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Student Housing</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Comfortable and safe accommodations for all students</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Boys Hostel', capacity: '1,200 students', features: ['Shared rooms', 'Common areas', 'Study lounges'], gradient: 'from-blue-500 to-indigo-600' },
              { name: 'Girls Hostel', capacity: '800 students', features: ['Private rooms', 'Kitchen facilities', 'Recreation room'], gradient: 'from-purple-500 to-pink-500' },
              { name: 'Day Scholar Lounge', capacity: 'Open to all', features: ['Rest areas', 'Lockers', 'Cafeteria access'], gradient: 'from-emerald-500 to-teal-600' },
            ].map((housing, idx) => (
              <motion.div key={housing.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-lg h-full">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${housing.gradient}`} />
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{housing.name}</h3>
                  <p className="text-sm font-semibold mb-4 gradient-text">{housing.capacity}</p>
                  <ul className="space-y-2">
                    {housing.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${housing.gradient}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

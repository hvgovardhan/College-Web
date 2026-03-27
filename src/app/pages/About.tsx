import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, Globe, Rocket, Star, Zap, CheckCircle } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const leadership = [
  { name: 'Dr. R. N. Shetty', role: 'Chancellor', gradient: 'from-blue-600 to-indigo-700', dept: 'Founder & Visionary' },
  { name: 'Dr. Priya Menon', role: 'Vice Chancellor', gradient: 'from-purple-600 to-pink-600', dept: 'Administration' },
  { name: 'Prof. Suresh Kumar', role: 'Dean of Academics', gradient: 'from-emerald-500 to-teal-600', dept: 'Academics' },
  { name: 'Dr. Anitha Rao', role: 'Dean of Research', gradient: 'from-orange-500 to-rose-500', dept: 'Research & Innovation' },
];

const milestones = [
  { year: '2001', event: 'RNSIT Founded by R. N. Shetty Trust', detail: 'Established with a vision to provide quality technical education in Bengaluru', gradient: 'from-blue-500 to-indigo-600', icon: Rocket },
  { year: '2006', event: 'Affiliated to VTU', detail: 'Formally affiliated to Visvesvaraya Technological University, Belagavi', gradient: 'from-purple-500 to-violet-600', icon: CheckCircle },
  { year: '2010', event: 'NAAC Accreditation Received', detail: 'Recognized for academic quality and institutional excellence', gradient: 'from-emerald-500 to-teal-600', icon: Star },
  { year: '2015', event: 'New Research & Innovation Centre', detail: 'State-of-the-art research facility inaugurated with modern labs', gradient: 'from-orange-500 to-amber-500', icon: Zap },
  { year: '2020', event: 'Top Engineering College in Karnataka', detail: 'Ranked among the best engineering institutions in the state', gradient: 'from-rose-500 to-pink-600', icon: Award },
  { year: '2025', event: 'AI & Data Science Lab Inaugurated', detail: 'Cutting-edge AI lab launched with industry partnerships', gradient: 'from-cyan-500 to-blue-600', icon: Rocket },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'Pursuing the highest standards in engineering education and research', gradient: 'from-blue-500 to-indigo-600' },
  { icon: Users, title: 'Diversity', description: 'Fostering an inclusive community of students from across India', gradient: 'from-purple-500 to-pink-500' },
  { icon: Globe, title: 'Global Impact', description: 'Preparing graduates to make a difference in the global tech landscape', gradient: 'from-emerald-500 to-teal-600' },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="About RNSIT"
        subtitle="Shaping engineers, transforming lives since 2001"
        image="https://images.unsplash.com/photo-1752920299180-e8fd9276c202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3NzQ1MDY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-indigo-900/80"
        badge="Est. 2001 · Bengaluru, Karnataka"
      />

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-label">Our Purpose</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Eye, gradient: 'from-blue-500 to-indigo-600', title: 'Our Vision',
                text: 'To be a globally recognized institution that cultivates innovative engineers, groundbreaking researchers, and ethical leaders who address the world\'s most pressing technological challenges.',
              },
              {
                icon: Target, gradient: 'from-emerald-500 to-teal-600', title: 'Our Mission',
                text: 'To provide exceptional engineering education combining theoretical knowledge with practical experience, fostering critical thinking, creativity, and social responsibility in every student.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="hover-lift"
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-lg h-full">
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full translate-x-16 -translate-y-16`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">What Drives Us</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Our Core Values</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 text-center shadow-lg h-full">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${value.gradient}`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(99,102,241,0.25) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(168,85,247,0.2) 0%, transparent 55%), radial-gradient(circle at 50% 90%, rgba(6,182,212,0.15) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Top fade from previous section */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 dark:from-gray-900 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block text-blue-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3">Our Story</span>
            <h2 className="text-5xl font-extrabold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Over two decades of shaping engineers and innovators</p>
          </motion.div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-cyan-500 -translate-x-px" />

            <div className="space-y-8">
              {milestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row gap-0`}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pl-14 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 shadow-2xl group cursor-default"
                      >
                        {/* Glow on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        {/* Top accent bar */}
                        <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${milestone.gradient}`} />

                        <div className="flex items-start gap-4">
                          {/* Year badge */}
                          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center shadow-lg`}>
                            <milestone.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-3xl font-black bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent mb-1`}>
                              {milestone.year}
                            </div>
                            <h3 className="text-white font-bold text-lg leading-tight mb-2">{milestone.event}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{milestone.detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 items-center justify-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${milestone.gradient} shadow-lg ring-4 ring-gray-950`} />
                      <div className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${milestone.gradient} opacity-20 animate-ping`} style={{ animationDuration: '3s', animationDelay: `${idx * 0.5}s` }} />
                    </div>

                    {/* Mobile dot */}
                    <div className={`md:hidden absolute left-4 top-6 z-10`}>
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${milestone.gradient} shadow-lg ring-2 ring-gray-950`} />
                    </div>

                    {/* Mobile line */}
                    <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />

                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-gray-900 to-transparent" />
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Meet the Team</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Our Leadership</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Experienced leaders committed to excellence</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg text-center group">
                  {/* Avatar area */}
                  <div className={`relative h-44 bg-gradient-to-br ${leader.gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Decorative circles */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-black/10 rounded-full" />
                    {/* Initials */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl">
                      <span className="text-white text-3xl font-extrabold tracking-tight">
                        {leader.name.split(' ').filter(n => n.startsWith('Dr') || n.startsWith('Prof') ? false : true).slice(0, 2).map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">{leader.dept}</p>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${leader.gradient} text-white text-xs font-semibold shadow-sm`}>{leader.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '25+', label: 'Years of Excellence' },
              { number: '500+', label: 'Faculty Members' },
              { number: '15,000+', label: 'Students' },
              { number: '20+', label: 'Departments' },
            ].map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="text-5xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Award, TrendingUp, Lightbulb, Users, DollarSign, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PageHero } from '../components/PageHero';

const areaGradients = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-blue-600',
];

const researchAreas = [
  { name: 'Artificial Intelligence & Machine Learning', icon: Lightbulb, projects: 45, funding: '₹3.5Cr' },
  { name: 'Biotechnology & Healthcare', icon: Microscope, projects: 38, funding: '₹2.8Cr' },
  { name: 'Sustainable Energy Systems', icon: TrendingUp, projects: 30, funding: '₹2.5Cr' },
  { name: 'Quantum Computing', icon: Lightbulb, projects: 25, funding: '₹3Cr' },
  { name: 'Nanotechnology', icon: Microscope, projects: 20, funding: '₹1.8Cr' },
  { name: 'IoT & Embedded Systems', icon: TrendingUp, projects: 28, funding: '₹2.2Cr' },
];

const publications = [
  { title: 'Advances in Neural Network Architecture for Medical Imaging', journal: 'Nature AI', year: 2026 },
  { title: 'Sustainable Urban Planning with Smart Grid Technology', journal: 'Science Direct', year: 2026 },
  { title: 'Quantum Algorithm for Drug Discovery', journal: 'Physical Review', year: 2026 },
  { title: 'CRISPR Applications in Cancer Treatment', journal: 'Cell Journal', year: 2025 },
];

const achievements = [
  { title: 'Top Research College in Karnataka', description: 'State ranking in research output', gradient: 'from-blue-500 to-indigo-600' },
  { title: '₹15Cr+ Research Funding', description: 'Secured in the past academic year', gradient: 'from-emerald-500 to-teal-600' },
  { title: '500+ Publications', description: 'In peer-reviewed international journals', gradient: 'from-purple-500 to-pink-500' },
  { title: '15 Patents Filed', description: 'Innovative discoveries commercialized', gradient: 'from-orange-500 to-amber-500' },
];

export default function Research() {
  return (
    <div>
      <PageHero
        title="Research & Innovation"
        subtitle="Pioneering discoveries that shape the future of technology"
        image="https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NTg4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-indigo-900/90 via-purple-800/80 to-indigo-900/70"
        icon={<Microscope className="w-10 h-10 text-white" />}
        badge="Innovation · Discovery · Impact"
      />

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '₹15Cr+', label: 'Annual Research Funding', icon: DollarSign, gradient: 'from-blue-500 to-indigo-600' },
              { value: '200+', label: 'Active Research Projects', icon: Lightbulb, gradient: 'from-purple-500 to-pink-500' },
              { value: '500+', label: 'Research Publications', icon: Award, gradient: 'from-emerald-500 to-teal-600' },
              { value: '100+', label: 'Research Scholars', icon: Users, gradient: 'from-orange-500 to-amber-500' },
            ].map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 text-center shadow-lg">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Focus Areas</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Research Areas</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Cutting-edge research across diverse fields of engineering</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <motion.div key={area.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="hover-lift">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-lg h-full group">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${areaGradients[idx]}`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${areaGradients[idx]} flex items-center justify-center mb-4 shadow-md`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{area.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold">{area.projects} Projects</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold">{area.funding} Funding</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Knowledge Output</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Recent Publications</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Our research making an impact worldwide</p>
          </motion.div>
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{pub.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Published in <span className="font-semibold text-indigo-600 dark:text-indigo-400">{pub.journal}</span></p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold whitespace-nowrap">{pub.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50/40 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Recognition</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Research Achievements</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((a, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-lg flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{a.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{a.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Lightbulb className="w-14 h-14 mx-auto mb-4 opacity-90" />
            <h3 className="text-4xl font-extrabold mb-4">Join Our Research Community</h3>
            <p className="text-white/80 text-lg mb-8">Be part of groundbreaking research. Explore opportunities for collaboration, funding, and innovation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">Research Opportunities</button>
              <button className="px-6 py-3 border-2 border-white text-white bg-black/20 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition">Contact Research Office</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const researchAreas = [
  { name: 'Artificial Intelligence & Machine Learning', icon: Lightbulb, projects: 45, funding: '$5M' },
  { name: 'Biotechnology & Healthcare', icon: Microscope, projects: 38, funding: '$4.2M' },
  { name: 'Sustainable Energy', icon: TrendingUp, projects: 30, funding: '$3.8M' },
  { name: 'Quantum Computing', icon: Lightbulb, projects: 25, funding: '$4.5M' },
  { name: 'Nanotechnology', icon: Microscope, projects: 20, funding: '$2.5M' },
  { name: 'Climate Science', icon: TrendingUp, projects: 28, funding: '$3.2M' },
];

const publications = [
  { title: 'Advances in Neural Network Architecture for Medical Imaging', journal: 'Nature AI', year: 2026 },
  { title: 'Sustainable Urban Planning with Smart Grid Technology', journal: 'Science Direct', year: 2026 },
  { title: 'Quantum Algorithm for Drug Discovery', journal: 'Physical Review', year: 2026 },
  { title: 'CRISPR Applications in Cancer Treatment', journal: 'Cell Journal', year: 2025 },
];

const achievements = [
  { title: 'Top 10 Research University', description: 'National ranking in research output', year: 2025 },
  { title: '$50M Research Funding', description: 'Secured in the past year', year: 2025 },
  { title: '500+ Publications', description: 'In peer-reviewed journals', year: 2025 },
  { title: '15 Patents Filed', description: 'Innovative discoveries commercialized', year: 2025 },
];

export default function Research() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NTg4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80 dark:from-indigo-950/95 dark:to-purple-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Microscope className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Research & Innovation</h1>
            <p className="text-xl text-indigo-100">
              Pioneering discoveries that shape the future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '$50M+', label: 'Annual Research Funding', icon: DollarSign },
              { value: '200+', label: 'Active Research Projects', icon: Lightbulb },
              { value: '500+', label: 'Research Publications', icon: Award },
              { value: '100+', label: 'Research Scholars', icon: Users },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6 pb-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cutting-edge research across diverse fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {area.name}
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      <Badge variant="secondary">{area.projects} Projects</Badge>
                      <Badge variant="outline">{area.funding} Funding</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Recent Publications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our research making an impact worldwide
            </p>
          </motion.div>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Published in <span className="font-medium">{pub.journal}</span>
                        </p>
                      </div>
                      <Badge>{pub.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition and milestones in our research journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Join Our Research Community</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Be part of groundbreaking research that makes a difference. Explore opportunities 
                for collaboration, funding, and innovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Research Opportunities
                </button>
                <button className="px-6 py-3 border-2 border-white text-white bg-black/20 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                  Contact Research Office
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

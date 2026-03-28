import { motion } from 'motion/react';
import { Microscope, Award, TrendingUp, Lightbulb, Users, DollarSign, ExternalLink } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const areaGradients = [
  'from-violet-500 to-purple-600',
  'from-blue-500 to-cyan-500',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-pink-500',
  'from-indigo-500 to-blue-600',
];
const areaGlows = ['icon-glow-purple','icon-glow-blue','icon-glow-green','icon-glow-orange','icon-glow-orange','icon-glow-blue'];

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
  { title: 'Top Research College in Karnataka', description: 'State ranking in research output', gradient: 'from-blue-500 to-indigo-600', glow: 'icon-glow-blue' },
  { title: '₹15Cr+ Research Funding', description: 'Secured in the past academic year', gradient: 'from-emerald-500 to-teal-600', glow: 'icon-glow-green' },
  { title: '500+ Publications', description: 'In peer-reviewed international journals', gradient: 'from-purple-500 to-pink-500', glow: 'icon-glow-purple' },
  { title: '15 Patents Filed', description: 'Innovative discoveries commercialized', gradient: 'from-orange-500 to-amber-500', glow: 'icon-glow-orange' },
];

const statCards = [
  { value: '₹15Cr+', label: 'Annual Research Funding', icon: DollarSign, gradient: 'from-blue-500 to-indigo-600', glow: 'icon-glow-blue', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { value: '200+', label: 'Active Research Projects', icon: Lightbulb, gradient: 'from-violet-500 to-purple-600', glow: 'icon-glow-purple', bg: 'bg-purple-50 dark:bg-purple-950/30' },
  { value: '500+', label: 'Research Publications', icon: Award, gradient: 'from-emerald-500 to-teal-600', glow: 'icon-glow-green', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { value: '100+', label: 'Research Scholars', icon: Users, gradient: 'from-orange-500 to-amber-500', glow: 'icon-glow-orange', bg: 'bg-orange-50 dark:bg-orange-950/30' },
];

export default function Research() {
  return (
    <div>
      <PageHero
        title="Research & Innovation"
        subtitle="Pioneering discoveries that shape the future of technology"
        image="https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
        gradient="bg-gradient-to-r from-indigo-900/90 via-purple-800/80 to-indigo-900/70"
        icon={<Microscope className="w-10 h-10 text-white" />}
        badge="Innovation · Discovery · Impact"
      />

      {/* Stats */}
      <section className="py-20 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statCards.map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className={`card-base card-hover p-6 text-center ${stat.bg}`}>
                  <div className={`icon-box-lg bg-gradient-to-br ${stat.gradient} ${stat.glow} mx-auto mb-4`}>
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
      <section className="py-24 section-soft relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Focus Areas</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Research Areas</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Cutting-edge research across diverse fields of engineering</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <motion.div key={area.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <div className="card-base card-hover card-accent-top p-6 h-full group">
                  <div className={`icon-box bg-gradient-to-br ${areaGradients[idx]} ${areaGlows[idx]} mb-4`}>
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">{area.name}</h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="badge-blue">{area.projects} Projects</span>
                    <span className="badge-green">{area.funding} Funding</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Knowledge Output</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Recent Publications</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Our research making an impact worldwide</p>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {publications.map((pub, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 icon-glow-purple flex items-center justify-center flex-shrink-0 shadow-md">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm leading-snug">{pub.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Published in <span className="font-semibold text-indigo-600 dark:text-indigo-400">{pub.journal}</span></p>
                    </div>
                  </div>
                  <span className="badge-purple whitespace-nowrap flex-shrink-0">{pub.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 section-soft relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Recognition</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Research Achievements</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Milestones in our research journey</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((a, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base card-hover flex items-start gap-4 p-5">
                  <div className={`icon-box bg-gradient-to-br ${a.gradient} ${a.glow} flex-shrink-0`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{a.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{a.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Lightbulb className="w-14 h-14 mx-auto mb-4 opacity-90" />
            <h3 className="text-4xl font-extrabold mb-4">Join Our Research Community</h3>
            <p className="text-white/80 text-lg mb-8">Be part of groundbreaking research. Explore opportunities for collaboration, funding, and innovation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-7 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">Research Opportunities</button>
              <button className="px-7 py-3 border-2 border-white/60 text-white bg-white/10 rounded-xl font-bold hover:bg-white/20 transition">Contact Research Office</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

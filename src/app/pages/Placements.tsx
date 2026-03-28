import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Building2, Users, FileText, MessageSquare, Compass, Network } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PageHero } from '../components/PageHero';

const placementData = [
  { year: '2022', students: 850, avgPackage: 12 },
  { year: '2023', students: 920, avgPackage: 14 },
  { year: '2024', students: 980, avgPackage: 16 },
  { year: '2025', students: 1050, avgPackage: 18 },
  { year: '2026', students: 1100, avgPackage: 20 },
];

const sectorData = [
  { name: 'IT & Software', value: 45, color: '#3b82f6' },
  { name: 'Finance', value: 20, color: '#10b981' },
  { name: 'Consulting', value: 15, color: '#f59e0b' },
  { name: 'Manufacturing', value: 12, color: '#8b5cf6' },
  { name: 'Others', value: 8, color: '#6b7280' },
];

const topRecruiters = [
  'Infosys', 'TCS', 'Wipro', 'Accenture', 'IBM',
  'Cognizant', 'HCL', 'Tech Mahindra', 'Capgemini', 'Oracle',
  'Amazon', 'Microsoft', 'Deloitte', 'KPMG', 'Bosch',
];

const testimonials = [
  { name: 'Arjun Mehta', company: 'Infosys', role: 'Software Engineer', package: '₹12 LPA', initials: 'AM', gradient: 'from-blue-500 to-indigo-600', quote: 'The placement cell provided excellent guidance throughout the process. Mock interviews were very helpful.' },
  { name: 'Priya Sharma', company: 'Wipro Technologies', role: 'Systems Analyst', package: '₹10 LPA', initials: 'PS', gradient: 'from-emerald-500 to-teal-600', quote: 'Resume workshops and aptitude training gave me the edge I needed to crack my dream company.' },
  { name: 'Rohan Kulkarni', company: 'TCS', role: 'Associate Consultant', package: '₹11 LPA', initials: 'RK', gradient: 'from-purple-500 to-pink-500', quote: 'The career services team was incredibly supportive right from day one of the placement season.' },
];

const services = [
  { title: 'Resume Building', description: 'Professional resume reviews and workshops by industry experts', icon: FileText, gradient: 'from-blue-500 to-indigo-600', glow: 'icon-glow-blue' },
  { title: 'Mock Interviews', description: 'Practice sessions with HR professionals and technical panels', icon: MessageSquare, gradient: 'from-purple-500 to-violet-600', glow: 'icon-glow-purple' },
  { title: 'Career Counseling', description: 'One-on-one guidance to help you find the right career path', icon: Compass, gradient: 'from-emerald-500 to-teal-600', glow: 'icon-glow-green' },
  { title: 'Networking Events', description: 'Connect with alumni, recruiters, and industry leaders', icon: Network, gradient: 'from-orange-500 to-amber-500', glow: 'icon-glow-orange' },
];

const statCards = [
  { label: 'Placement Rate', value: '95%', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600', glow: 'icon-glow-green', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { label: 'Average Package', value: '₹8.5 LPA', icon: Award, gradient: 'from-blue-500 to-indigo-600', glow: 'icon-glow-blue', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { label: 'Highest Package', value: '₹42 LPA', icon: TrendingUp, gradient: 'from-purple-500 to-pink-500', glow: 'icon-glow-purple', bg: 'bg-purple-50 dark:bg-purple-950/30' },
  { label: 'Companies Visited', value: '250+', icon: Building2, gradient: 'from-orange-500 to-amber-500', glow: 'icon-glow-orange', bg: 'bg-orange-50 dark:bg-orange-950/30' },
];

export default function Placements() {
  return (
    <div>
      <PageHero
        title="Placements & Careers"
        subtitle="Launching successful careers at top companies across India and the world"
        image="https://images.unsplash.com/photo-1762341118920-0b65e8d88aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-emerald-900/90 via-teal-800/80 to-emerald-900/70"
        icon={<Briefcase className="w-10 h-10 text-white" />}
        badge="95% Placement Rate · 250+ Recruiters"
      />

      {/* Key Statistics */}
      <section className="py-20 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Results</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Placement Highlights 2026</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Outstanding placement records year after year</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

      {/* Placement Trends */}
      <section className="py-24 section-soft relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Analytics</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Placement Trends</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Growth in placements and packages over the years</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card-base p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Students Placed</h3>
                <p className="text-xs text-gray-400 mb-5">5-Year Trend</p>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={placementData} barSize={36}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.1)" />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', fontSize: 13 }} />
                    <Bar dataKey="students" name="Students Placed" radius={[8, 8, 0, 0]}
                      fill="url(#barGrad)" />
                    <defs>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card-base p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Placement by Sector</h3>
                <p className="text-xs text-gray-400 mb-5">Industry distribution 2026</p>
                <div className="flex items-center gap-6">
                  <ResponsiveContainer width="55%" height={220}>
                    <PieChart>
                      <Pie data={sectorData} cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3} dataKey="value">
                        {sectorData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', fontSize: 13 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2">
                    {sectorData.map(s => (
                      <div key={s.name} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                        <span className="text-xs text-gray-600 dark:text-gray-400 flex-1">{s.name}</span>
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{s.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="section-label">Our Recruiters</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Top Recruiters</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Leading companies that trust our talent</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {topRecruiters.map((company, idx) => (
              <motion.div key={company} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} whileHover={{ scale: 1.06, y: -2 }}>
                <div className="card-base px-4 py-2.5 flex items-center gap-2.5 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 icon-glow-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-sm">{company.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 section-soft relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Alumni Voices</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Success Stories</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Hear from our students about their placement journey</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base card-hover card-accent-top p-6 h-full flex flex-col">
                  {/* Quote marks */}
                  <div className="text-5xl font-black text-emerald-200 dark:text-emerald-900 leading-none mb-2">"</div>
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-blue-900/30">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <span className="text-white font-bold">{t.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="badge-green text-[10px]">{t.company}</span>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">{t.package}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Services */}
      <section className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Support</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Career Services</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Comprehensive support for your career journey</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base card-hover card-accent-top p-6 text-center h-full">
                  <div className={`icon-box-lg bg-gradient-to-br ${service.gradient} ${service.glow} mx-auto mb-4`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Briefcase className="w-14 h-14 mx-auto mb-4 opacity-90" />
            <h2 className="text-4xl font-extrabold mb-4">Ready to Launch Your Career?</h2>
            <p className="text-white/80 text-lg mb-8">Register with our placement cell and get access to 250+ top recruiters</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-7 py-3 bg-white text-emerald-700 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">Register Now</button>
              <button className="px-7 py-3 border-2 border-white/60 text-white bg-white/10 rounded-xl font-bold hover:bg-white/20 transition">View Brochure</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

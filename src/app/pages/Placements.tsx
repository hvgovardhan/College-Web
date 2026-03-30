import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, TrendingUp, Award, Building2, Users, FileText, MessageSquare, Compass, Network, X } from 'lucide-react';
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
  { name: 'Infosys', domain: 'infosys.com', recruited: 48, avgPackage: '₹6.5 LPA', roles: ['Software Engineer', 'Systems Analyst', 'DevOps'], color: 'from-blue-500 to-indigo-600' },
  { name: 'TCS', domain: 'tcs.com', recruited: 62, avgPackage: '₹7 LPA', roles: ['Associate Engineer', 'Business Analyst', 'QA'], color: 'from-indigo-500 to-blue-600' },
  { name: 'Wipro', domain: 'wipro.com', recruited: 35, avgPackage: '₹6.8 LPA', roles: ['Project Engineer', 'Tech Lead', 'Data Analyst'], color: 'from-violet-500 to-purple-600' },
  { name: 'Accenture', domain: 'accenture.com', recruited: 41, avgPackage: '₹8 LPA', roles: ['Software Developer', 'Consultant', 'Cloud Engineer'], color: 'from-purple-500 to-pink-500' },
  { name: 'IBM', domain: 'ibm.com', recruited: 22, avgPackage: '₹9.5 LPA', roles: ['Cloud Architect', 'AI Engineer', 'Security Analyst'], color: 'from-blue-600 to-cyan-500' },
  { name: 'Cognizant', domain: 'cognizant.com', recruited: 38, avgPackage: '₹7.2 LPA', roles: ['Programmer Analyst', 'Test Engineer', 'UI Developer'], color: 'from-cyan-500 to-teal-600' },
  { name: 'HCL', domain: 'hcltech.com', recruited: 29, avgPackage: '₹7.5 LPA', roles: ['Software Engineer', 'Network Engineer', 'SAP Consultant'], color: 'from-teal-500 to-emerald-600' },
  { name: 'Tech Mahindra', domain: 'techmahindra.com', recruited: 31, avgPackage: '₹7 LPA', roles: ['Software Developer', 'Network Admin', 'Data Engineer'], color: 'from-emerald-500 to-green-600' },
  { name: 'Capgemini', domain: 'capgemini.com', recruited: 26, avgPackage: '₹8.2 LPA', roles: ['Software Engineer', 'Business Analyst', 'Cloud Developer'], color: 'from-green-500 to-teal-500' },
  { name: 'Oracle', domain: 'oracle.com', recruited: 18, avgPackage: '₹12 LPA', roles: ['Database Engineer', 'Java Developer', 'Cloud Architect'], color: 'from-orange-500 to-red-500' },
  { name: 'Amazon', domain: 'amazon.com', recruited: 14, avgPackage: '₹18 LPA', roles: ['SDE-1', 'Cloud Support Engineer', 'Data Scientist'], color: 'from-orange-400 to-amber-500' },
  { name: 'Microsoft', domain: 'microsoft.com', recruited: 11, avgPackage: '₹22 LPA', roles: ['Software Engineer', 'Program Manager', 'Cloud Engineer'], color: 'from-blue-500 to-sky-500' },
  { name: 'Deloitte', domain: 'deloitte.com', recruited: 20, avgPackage: '₹10 LPA', roles: ['Technology Analyst', 'Consultant', 'Risk Analyst'], color: 'from-green-600 to-emerald-500' },
  { name: 'KPMG', domain: 'kpmg.com', recruited: 15, avgPackage: '₹9 LPA', roles: ['Technology Consultant', 'Data Analyst', 'Cyber Security'], color: 'from-blue-700 to-indigo-500' },
  { name: 'Bosch', domain: 'bosch.com', recruited: 19, avgPackage: '₹8.5 LPA', roles: ['Embedded Engineer', 'IoT Developer', 'Firmware Engineer'], color: 'from-red-500 to-rose-600' },
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

type Recruiter = { name: string; domain: string; recruited: number; avgPackage: string; roles: string[]; color: string };

function RecruiterCard({ company, onClick }: { company: Recruiter; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex-shrink-0"
      onClick={onClick}
    >
      <div className={`relative group flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-gradient-to-r ${company.color} shadow-lg cursor-pointer overflow-hidden`}>
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', repeatDelay: 2 }}
        />
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
        {/* Logo */}
        <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-white flex-shrink-0 shadow-md relative z-10">
          <img
            src={`https://logo.clearbit.com/${company.domain}`}
            alt={company.name}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fb = e.currentTarget.nextElementSibling as HTMLElement;
              if (fb) fb.style.display = 'flex';
            }}
          />
          <div className="w-8 h-8 rounded-lg bg-white items-center justify-center hidden">
            <span className="font-black text-xs text-gray-700">{company.name.charAt(0)}</span>
          </div>
        </div>
        <span className="font-bold text-white text-sm relative z-10 drop-shadow-sm">{company.name}</span>
        <span className="relative z-10 text-[10px] font-black bg-white/25 text-white px-2 py-0.5 rounded-full border border-white/30">
          {company.recruited}+
        </span>
      </div>
    </motion.div>
  );
}

export default function Placements() {
  const [activeRecruiter, setActiveRecruiter] = useState<Recruiter | null>(null);
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(99,102,241,0.15) 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-2">Analytics</span>
            <h2 className="text-4xl font-extrabold text-white mt-2 mb-3">Placement Trends</h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">Growth in placements and packages over the years</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative overflow-hidden rounded-3xl bg-gray-900/80 border border-emerald-500/20 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Students Placed</h3>
                    <p className="text-xs text-gray-400">5-Year Trend</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={placementData} barSize={38}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{ borderRadius: '14px', border: '1px solid rgba(16,185,129,0.3)', background: '#0f1e35', color: '#fff', fontSize: 13, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
                      cursor={{ fill: 'rgba(16,185,129,0.08)' }}
                    />
                    <Bar dataKey="students" name="Students Placed" radius={[10, 10, 0, 0]} fill="url(#barGrad2)" />
                    <defs>
                      <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity={1} />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity={0.7} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative overflow-hidden rounded-3xl bg-gray-900/80 border border-indigo-500/20 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Placement by Sector</h3>
                    <p className="text-xs text-gray-400">Industry distribution 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ResponsiveContainer width="50%" height={200}>
                    <PieChart>
                      <Pie data={sectorData} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={4} dataKey="value" strokeWidth={0}>
                        {sectorData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: '14px', border: '1px solid rgba(99,102,241,0.3)', background: '#0f1e35', color: '#fff', fontSize: 13 }} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex-1 space-y-2.5">
                    {sectorData.map(s => (
                      <div key={s.name} className="flex items-center gap-2.5">
                        <div className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}80` }} />
                        <span className="text-xs text-gray-400 flex-1">{s.name}</span>
                        <span className="text-sm font-extrabold text-white">{s.value}%</span>
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
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Leading companies that trust our talent year after year</p>
          </motion.div>

          {/* Marquee row 1 — left to right */}
          <div className="relative overflow-hidden mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
            >
              {[...topRecruiters, ...topRecruiters].map((company, idx) => (
                <RecruiterCard key={idx} company={company} onClick={() => setActiveRecruiter(company)} />
              ))}
            </motion.div>
          </div>

          {/* Marquee row 2 — right to left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ repeat: Infinity, duration: 52, ease: 'linear' }}
            >
              {[...topRecruiters.slice().reverse(), ...topRecruiters.slice().reverse()].map((company, idx) => (
                <RecruiterCard key={idx} company={company} onClick={() => setActiveRecruiter(company)} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruiter Detail Popup */}
      <AnimatePresence>
        {activeRecruiter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveRecruiter(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-[#0f1e35] border border-blue-100 dark:border-blue-900/40"
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${activeRecruiter.color} p-6 overflow-hidden`}>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black/10 rounded-full" />
                <button onClick={() => setActiveRecruiter(null)} className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition z-10">
                  <X className="w-4 h-4 text-white" />
                </button>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl flex-shrink-0">
                    <img
                      src={`https://logo.clearbit.com/${activeRecruiter.domain}`}
                      alt={activeRecruiter.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fb = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fb) fb.style.display = 'flex';
                      }}
                    />
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeRecruiter.color} items-center justify-center hidden`}>
                      <span className="text-white font-black text-xl">{activeRecruiter.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-white">{activeRecruiter.name}</h2>
                    <p className="text-white/70 text-sm">RNSIT Placement Partner</p>
                  </div>
                </div>
                {/* Big recruited number */}
                <div className="relative z-10 mt-5 flex items-end gap-1">
                  <span className="text-6xl font-black text-white leading-none">{activeRecruiter.recruited}</span>
                  <div className="mb-2">
                    <p className="text-white/80 text-sm font-semibold leading-tight">students</p>
                    <p className="text-white/80 text-sm font-semibold leading-tight">recruited</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                {/* Avg Package */}
                <div className={`flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-r ${activeRecruiter.color} bg-opacity-10`}
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))' }}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeRecruiter.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Average Package Offered</p>
                    <p className="text-xl font-extrabold text-gray-900 dark:text-white">{activeRecruiter.avgPackage}</p>
                  </div>
                </div>

                {/* Roles */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Roles Offered</p>
                  <div className="flex flex-wrap gap-2">
                    {activeRecruiter.roles.map(role => (
                      <span key={role} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">{role}</span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveRecruiter(null)}
                  className={`w-full py-3 rounded-xl bg-gradient-to-r ${activeRecruiter.color} text-white font-bold text-sm hover:opacity-90 transition shadow-lg`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

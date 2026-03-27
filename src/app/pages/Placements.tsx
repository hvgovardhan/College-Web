import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Building2, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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
  'Google', 'Microsoft', 'Amazon', 'Apple', 'Goldman Sachs',
  'McKinsey', 'Deloitte', 'IBM', 'Intel', 'JP Morgan',
  'Tesla', 'Meta', 'Netflix', 'Adobe', 'Salesforce',
];

const testimonials = [
  {
    name: 'Arjun Mehta',
    company: 'Infosys',
    role: 'Software Engineer',
    package: '₹12 LPA',
    initials: 'AM',
    quote: 'The placement cell provided excellent guidance throughout the process. Mock interviews were very helpful.',
  },
  {
    name: 'Priya Sharma',
    company: 'Wipro Technologies',
    role: 'Systems Analyst',
    package: '₹10 LPA',
    initials: 'PS',
    quote: 'Resume workshops and aptitude training gave me the edge I needed to crack my dream company.',
  },
  {
    name: 'Rohan Kulkarni',
    company: 'TCS',
    role: 'Associate Consultant',
    package: '₹11 LPA',
    initials: 'RK',
    quote: 'The career services team was incredibly supportive right from day one of the placement season.',
  },
];

export default function Placements() {
  return (
    <div>
      <PageHero
        title="Placements & Careers"
        subtitle="Launching successful careers at top companies across India and the world"
        image="https://images.unsplash.com/photo-1762341118920-0b65e8d88aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzQ1ODA5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-emerald-900/90 via-teal-800/80 to-emerald-900/70"
        icon={<Briefcase className="w-10 h-10 text-white" />}
        badge="95% Placement Rate · 250+ Recruiters"
      />

      {/* Key Statistics */}
      <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Results</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Placement Highlights 2026</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Outstanding placement records year after year</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Placement Rate', value: '95%', icon: TrendingUp, gradient: 'from-emerald-500 to-teal-600' },
              { label: 'Average Package', value: '₹8.5 LPA', icon: Award, gradient: 'from-blue-500 to-indigo-600' },
              { label: 'Highest Package', value: '₹42 LPA', icon: TrendingUp, gradient: 'from-purple-500 to-pink-500' },
              { label: 'Companies Visited', value: '250+', icon: Building2, gradient: 'from-orange-500 to-amber-500' },
            ].map((stat, idx) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 text-center shadow-lg">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-md`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Trends */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/40 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Analytics</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Placement Trends</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Growth in placements and packages over the years</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Students Placed (5-Year Trend)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={placementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#10b981" name="Students Placed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Placement by Sector</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Building2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Top Recruiters</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leading companies that trust our talent
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {topRecruiters.map((company, idx) => (
              <motion.div key={company} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} whileHover={{ scale: 1.05 }}>
                <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-5 py-3 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{company.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/30 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Alumni Voices</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Success Stories</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Hear from our students about their placement journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 shadow-lg h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-600 dark:text-slate-300 font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold">{testimonial.company}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold">{testimonial.package}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Services */}
      <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Support</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Career Services</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Comprehensive support for your career journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Resume Building', description: 'Professional resume reviews and workshops' },
              { title: 'Mock Interviews', description: 'Practice with industry experts' },
              { title: 'Career Counseling', description: 'One-on-one guidance from advisors' },
              { title: 'Networking Events', description: 'Connect with alumni and recruiters' },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

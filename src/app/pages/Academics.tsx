import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Code, Beaker, Building, Palette, Calculator, Search, Clock, ArrowRight, GraduationCap, Microscope, X, Users, Award, Cpu, Zap, Layers, GitBranch } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { PageHero } from '../components/PageHero';
import { Link } from 'react-router';
import { toast } from 'sonner';

const deptGradients = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-amber-500',
  'from-rose-500 to-pink-600',
  'from-cyan-500 to-blue-500',
];

type Department = {
  name: string;
  icon: React.ElementType;
  description: string;
  courses: number;
  intake: number;
  hod: string;
  established: string;
  highlights: string[];
  labs: string[];
  achievements: string[];
};

const departments: Department[] = [
  {
    name: 'Computer Science & Engineering',
    icon: Code,
    description: 'Cutting-edge technology and software development',
    courses: 15,
    intake: 180,
    hod: 'Dr. Suresh Babu',
    established: '2001',
    highlights: ['AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'Full Stack Development'],
    labs: ['Advanced Computing Lab', 'AI Research Lab', 'Networking Lab', 'Software Engineering Lab'],
    achievements: ['NBA Accredited', 'Best Department Award 2024', '95% Placement Rate', '20+ Research Papers'],
  },
  {
    name: 'Electronics & Communication',
    icon: Cpu,
    description: 'VLSI, Embedded Systems, and Signal Processing',
    courses: 12,
    intake: 120,
    hod: 'Prof. Kavitha Rao',
    established: '2001',
    highlights: ['VLSI Design', 'Embedded Systems', 'IoT', 'Signal Processing'],
    labs: ['VLSI Lab', 'Embedded Systems Lab', 'Communication Lab', 'Microwave Lab'],
    achievements: ['NBA Accredited', 'Best Research Lab 2023', '90% Placement Rate', '15+ Patents'],
  },
  {
    name: 'Mechanical Engineering',
    icon: Beaker,
    description: 'Design, Manufacturing, and Thermal Engineering',
    courses: 18,
    intake: 120,
    hod: 'Prof. Anand Kumar',
    established: '2001',
    highlights: ['CAD/CAM', 'Robotics', 'Thermal Engineering', '3D Printing'],
    labs: ['CAD/CAM Lab', 'Fluid Mechanics Lab', 'Heat Transfer Lab', 'Robotics Lab'],
    achievements: ['NBA Accredited', 'Industry Collaboration Award', '88% Placement Rate', '10+ Patents'],
  },
  {
    name: 'Civil Engineering',
    icon: Building,
    description: 'Structural, Environmental, and Transportation',
    courses: 10,
    intake: 60,
    hod: 'Dr. Ramesh Nair',
    established: '2001',
    highlights: ['Structural Analysis', 'Environmental Engineering', 'GIS & Remote Sensing', 'Smart Infrastructure'],
    labs: ['Structural Lab', 'Geotechnical Lab', 'Environmental Lab', 'Survey Lab'],
    achievements: ['NBA Accredited', 'Green Campus Initiative', '85% Placement Rate', '8+ Research Projects'],
  },
  {
    name: 'Information Science',
    icon: Layers,
    description: 'Data Science, AI, and Cloud Computing',
    courses: 14,
    intake: 60,
    hod: 'Dr. Priya Menon',
    established: '2008',
    highlights: ['Data Science', 'Artificial Intelligence', 'Cloud Computing', 'Big Data Analytics'],
    labs: ['Data Science Lab', 'Cloud Computing Lab', 'AI/ML Lab', 'Database Lab'],
    achievements: ['NBA Accredited', 'Best Innovation Award 2024', '92% Placement Rate', '12+ Research Papers'],
  },
  {
    name: 'Electrical Engineering',
    icon: Zap,
    description: 'Power Systems, Control, and Drives',
    courses: 20,
    intake: 60,
    hod: 'Prof. Rajesh Kumar',
    established: '2001',
    highlights: ['Power Systems', 'Electric Drives', 'Renewable Energy', 'Smart Grid'],
    labs: ['Power Systems Lab', 'Electrical Machines Lab', 'Control Systems Lab', 'PLC Lab'],
    achievements: ['NBA Accredited', 'Energy Conservation Award', '87% Placement Rate', '6+ Industry Projects'],
  },
];

const programs = [
  {
    level: 'Undergraduate',
    degrees: [
      { name: 'B.E. in Computer Science & Engineering', duration: '4 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'B.E. in Electronics & Communication', duration: '4 years', department: 'Engineering', type: 'Full-time' },
      { name: 'B.E. in Mechanical Engineering', duration: '4 years', department: 'Engineering', type: 'Full-time' },
      { name: 'B.E. in Civil Engineering', duration: '4 years', department: 'Engineering', type: 'Full-time' },
      { name: 'B.E. in Information Science', duration: '4 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'B.E. in Electrical Engineering', duration: '4 years', department: 'Engineering', type: 'Full-time' },
    ],
  },
  {
    level: 'Postgraduate',
    degrees: [
      { name: 'M.Tech in Computer Science & Engineering', duration: '2 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'M.Tech in VLSI Design', duration: '2 years', department: 'Engineering', type: 'Full-time' },
      { name: 'M.Tech in Machine Design', duration: '2 years', department: 'Engineering', type: 'Full-time' },
      { name: 'M.Tech in Structural Engineering', duration: '2 years', department: 'Engineering', type: 'Full-time' },
      { name: 'M.Tech in Digital Electronics', duration: '2 years', department: 'Engineering', type: 'Full-time' },
    ],
  },
  {
    level: 'Doctoral',
    degrees: [
      { name: 'Ph.D in Computer Science', duration: '3-5 years', department: 'Computer Science', type: 'Research' },
      { name: 'Ph.D in Electronics', duration: '3-5 years', department: 'Engineering', type: 'Research' },
      { name: 'Ph.D in Mechanical Engineering', duration: '3-5 years', department: 'Engineering', type: 'Research' },
      { name: 'Ph.D in Civil Engineering', duration: '3-5 years', department: 'Engineering', type: 'Research' },
    ],
  },
];

const faculty = [
  { name: 'Dr. Suresh Babu', specialization: 'Machine Learning', department: 'Computer Science', publications: 50 },
  { name: 'Prof. Kavitha Rao', specialization: 'VLSI Design', department: 'Electronics', publications: 45 },
  { name: 'Dr. Ramesh Nair', specialization: 'Structural Engineering', department: 'Civil', publications: 38 },
  { name: 'Prof. Anand Kumar', specialization: 'Robotics & Automation', department: 'Mechanical', publications: 60 },
];

const levelConfig: Record<string, { icon: React.ElementType; gradient: string; glow: string; badge: string }> = {
  'Undergraduate': { icon: GraduationCap, gradient: 'from-blue-500 to-indigo-600', glow: 'icon-glow-blue', badge: 'badge-blue' },
  'Postgraduate':  { icon: BookOpen,      gradient: 'from-purple-500 to-violet-600', glow: 'icon-glow-purple', badge: 'badge-purple' },
  'Doctoral':      { icon: Microscope,    gradient: 'from-emerald-500 to-teal-600', glow: 'icon-glow-green', badge: 'badge-green' },
};

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-pink-500',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-rose-500',
];

export default function Academics() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [activeDept, setActiveDept] = useState<Department | null>(null);

  const filteredPrograms = programs.map(level => ({
    ...level,
    degrees: level.degrees.filter(degree =>
      degree.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedDepartment || degree.department === selectedDepartment)
    ),
  }));

  return (
    <div>
      <PageHero
        title="Academics"
        subtitle="World-class engineering education across diverse disciplines"
        image="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-blue-900/85 via-indigo-800/75 to-purple-900/80"
        icon={<BookOpen className="w-10 h-10 text-white" />}
        badge="VTU Affiliated · NAAC Accredited"
      />

      {/* Departments */}
      <section id="departments" className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Explore</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Our Departments</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Comprehensive range of engineering and technology departments</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <motion.div key={dept.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <div
                  onClick={() => setActiveDept(dept)}
                  className="card-base card-hover card-accent-top p-6 h-full group cursor-pointer"
                >
                  <div className={`icon-box bg-gradient-to-br ${deptGradients[idx]} mb-4 ${['icon-glow-blue','icon-glow-purple','icon-glow-green','icon-glow-orange','icon-glow-blue','icon-glow-purple'][idx]}`}>
                    <dept.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{dept.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{dept.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="badge-blue">{dept.courses} Courses</span>
                    <span className="text-xs text-blue-500 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Detail Popover */}
      <AnimatePresence>
        {activeDept && (() => {
          const idx = departments.findIndex(d => d.name === activeDept.name);
          const gradient = deptGradients[idx];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]"
              onClick={() => setActiveDept(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 16 }}
                transition={{ type: 'spring', damping: 22, stiffness: 320 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-sm rounded-2xl bg-white dark:bg-[#0f1e35] shadow-2xl border border-blue-100 dark:border-blue-900/40 overflow-hidden"
              >
                {/* Colored top strip */}
                <div className={`bg-gradient-to-r ${gradient} px-5 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                      <activeDept.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{activeDept.name}</p>
                      <p className="text-white/70 text-xs">Est. {activeDept.established}</p>
                    </div>
                  </div>
                  <button onClick={() => setActiveDept(null)} className="w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

                <div className="p-4 space-y-3">
                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Intake', value: activeDept.intake },
                      { label: 'Courses', value: activeDept.courses },
                      { label: 'HOD', value: activeDept.hod.split(' ').slice(-1)[0] },
                    ].map(s => (
                      <div key={s.label} className="bg-blue-50 dark:bg-blue-950/40 rounded-xl p-2.5 text-center">
                        <div className="text-base font-extrabold text-gray-900 dark:text-white">{s.value}</div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Focus areas */}
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Focus Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDept.highlights.map(h => (
                        <span key={h} className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">{h}</span>
                      ))}
                    </div>
                  </div>

                  {/* Top achievement */}
                  <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-950/30 rounded-xl px-3 py-2 border border-amber-100 dark:border-amber-900/30">
                    <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">{activeDept.achievements[0]}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* Programs */}
      <section id="programs" className="py-24 section-soft relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Programs</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Academic Programs</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Find the perfect program to match your aspirations</p>
          </motion.div>
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search programs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 rounded-xl" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {([null, 'Computer Science', 'Engineering'] as (string | null)[]).map((dept, i) => (
                <Button key={i} variant={selectedDepartment === dept ? 'default' : 'outline'} size="sm" onClick={() => setSelectedDepartment(dept)} className="whitespace-nowrap rounded-xl">
                  {dept ?? 'All'}
                </Button>
              ))}
            </div>
          </div>
          <Tabs defaultValue="Undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 rounded-2xl p-1 bg-blue-50 dark:bg-[#0f1e35] border border-blue-100 dark:border-blue-900/30 h-auto">
              {['Undergraduate', 'Postgraduate', 'Doctoral'].map(level => {
                const cfg = levelConfig[level];
                return (
                  <TabsTrigger key={level} value={level} className="rounded-xl py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-[#1a2f50] data-[state=active]:shadow-md flex items-center gap-2 font-semibold">
                    <cfg.icon className="w-4 h-4" />
                    {level}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {filteredPrograms.map(level => {
              const cfg = levelConfig[level.level];
              return (
                <TabsContent key={level.level} value={level.level}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {level.degrees.length > 0 ? level.degrees.map((degree, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}>
                        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0f1e35] border border-blue-100/60 dark:border-blue-900/30 p-5 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                          {/* Left accent bar */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cfg.gradient} rounded-l-2xl`} />
                          <div className="pl-3 flex items-start gap-4">
                            {/* Number badge */}
                            <div className={`icon-box w-10 h-10 rounded-xl bg-gradient-to-br ${cfg.gradient} ${cfg.glow} flex-shrink-0 mt-0.5`}>
                              <span className="text-white text-sm font-black">{idx + 1}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{degree.name}</h3>
                                <span className={`${cfg.badge} whitespace-nowrap flex-shrink-0`}>{degree.type}</span>
                              </div>
                              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1 bg-gray-100 dark:bg-[#1a2f50] px-2 py-1 rounded-lg">
                                  <Clock className="w-3 h-3" />{degree.duration}
                                </span>
                                <span className="flex items-center gap-1 bg-gray-100 dark:bg-[#1a2f50] px-2 py-1 rounded-lg">
                                  {degree.department}
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Hover glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${cfg.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl`} />
                        </div>
                      </motion.div>
                    )) : (
                      <div className="col-span-2 text-center py-16 text-gray-400">
                        <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                        <p>No programs found matching your criteria</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Our Experts</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Distinguished Faculty</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Learn from world-renowned experts and researchers</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, idx) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base card-hover p-6 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${avatarGradients[idx]} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg ${['icon-glow-blue','icon-glow-purple','icon-glow-green','icon-glow-orange'][idx]}`}>
                    <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">{member.specialization}</p>
                  <p className="text-gray-400 text-xs mb-3">{member.department}</p>
                  <span className="badge-purple">{member.publications} Publications</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold mb-4">Ready to Begin Your Academic Journey?</h2>
            <p className="text-xl text-white/80 mb-8">Join thousands of students pursuing excellence in engineering</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admissions#apply">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold rounded-xl">Apply Now</Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-black/20 hover:bg-white hover:text-blue-900 rounded-xl"
                onClick={() => toast.success('📄 Brochure downloaded successfully!', { description: 'RNSIT Academic Brochure 2026.pdf' })}
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

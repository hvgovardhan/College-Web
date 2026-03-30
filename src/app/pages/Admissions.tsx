import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, FileText, CheckCircle, AlertCircle, Download, Upload, ClipboardList, BookMarked, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { PageHero } from '../components/PageHero';

const stepGradients = [
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-purple-600',
  'from-purple-500 to-pink-500',
  'from-pink-500 to-rose-500',
  'from-emerald-500 to-teal-600',
  'from-teal-500 to-cyan-600',
];
const stepGlows = ['icon-glow-blue','icon-glow-purple','icon-glow-purple','icon-glow-orange','icon-glow-green','icon-glow-green'];

const admissionProcess = [
  { step: 1, title: 'Online Application', description: 'Fill out the online application form with your personal and academic details', icon: ClipboardList },
  { step: 2, title: 'Document Submission', description: 'Upload required documents — transcripts, certificates, and ID proof', icon: Upload },
  { step: 3, title: 'Entrance Exam', description: 'Appear for CET / COMED-K or the university entrance examination', icon: BookMarked },
  { step: 4, title: 'Interview', description: 'Attend the personal interview if shortlisted for your program', icon: FileText },
  { step: 5, title: 'Admission Decision', description: 'Receive your admission decision via email within 7 working days', icon: CheckCircle },
  { step: 6, title: 'Enrollment', description: 'Complete enrollment, pay fees, and get your student ID', icon: GraduationCap },
];

const importantDates = [
  { event: 'Application Opens', date: 'January 1, 2026', status: 'completed' },
  { event: 'Application Deadline (Early)', date: 'March 15, 2026', status: 'completed' },
  { event: 'Application Deadline (Regular)', date: 'May 31, 2026', status: 'upcoming' },
  { event: 'Entrance Exam', date: 'June 15–20, 2026', status: 'upcoming' },
  { event: 'Results Announcement', date: 'July 10, 2026', status: 'upcoming' },
  { event: 'Classes Begin', date: 'August 1, 2026', status: 'upcoming' },
];

const eligibilityCriteria = [
  {
    program: 'Undergraduate (B.E.)',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'icon-glow-blue',
    icon: GraduationCap,
    requirements: [
      '12th grade with minimum 75% marks (PCM)',
      'Valid CET / COMED-K score',
      'Karnataka domicile or NRI quota',
      'Age: 17–21 years',
    ],
  },
  {
    program: 'Postgraduate (M.Tech)',
    gradient: 'from-purple-500 to-violet-600',
    glow: 'icon-glow-purple',
    icon: BookMarked,
    requirements: [
      'B.E./B.Tech in relevant field with 60%+ marks',
      'Valid GATE score (preferred)',
      'Work experience preferred for some programs',
      'Interview with department panel',
    ],
  },
  {
    program: 'Doctoral (Ph.D)',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'icon-glow-green',
    icon: FileText,
    requirements: [
      'M.Tech/M.E. with 65%+ marks',
      'Research proposal submission',
      'Publications or research experience preferred',
      'Interview with potential supervisor',
    ],
  },
];

export default function Admissions() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  return (
    <div>
      <PageHero
        title="Admissions"
        subtitle="Begin your journey to excellence at RNSIT"
        image="https://images.unsplash.com/photo-1752920299180-e8fd9276c202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-green-900/85 via-teal-800/75 to-blue-900/80"
        badge="Applications Open for 2026"
      />

      {/* Admission Process */}
      <section className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">How It Works</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Admission Process</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">A simple, transparent process to help you join our community</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcess.map((step, idx) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                <div className="card-base card-hover card-accent-top p-6 h-full group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`icon-box bg-gradient-to-br ${stepGradients[idx]} ${stepGlows[idx]} flex-shrink-0`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-3xl font-black bg-gradient-to-r ${stepGradients[idx]} bg-clip-text text-transparent`}>0{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 section-soft relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Key Deadlines</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Important Dates</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Mark your calendar with these crucial deadlines</p>
          </motion.div>
          <div className="space-y-3">
            {importantDates.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}>
                <div className={`card-base flex items-center justify-between p-4 gap-4 ${item.status === 'completed' ? 'opacity-70' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-950/50' : 'bg-blue-100 dark:bg-blue-950/50'}`}>
                      {item.status === 'completed'
                        ? <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        : <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.event}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" />{item.date}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${item.status === 'completed' ? 'badge-green' : 'badge-blue'}`}>
                    {item.status === 'completed' ? 'Done' : 'Upcoming'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-24 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Requirements</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Eligibility Criteria</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Requirements for different programs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, idx) => (
              <motion.div key={criteria.program} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div className="card-base card-hover h-full overflow-hidden">
                  <div className={`bg-gradient-to-br ${criteria.gradient} p-5 flex items-center gap-3`}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <criteria.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold">{criteria.program}</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      {criteria.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${criteria.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 section-soft relative">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="section-label">Get Started</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Apply Now</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Take the first step towards your future</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="card-base overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 p-5">
                <h3 className="text-white font-bold text-lg">Admission Application Form</h3>
                <p className="text-white/70 text-sm">Fill in your details below</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Arjun Sharma" required className="mt-1 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" required className="mt-1 rounded-xl" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="arjun@example.com" required className="mt-1 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="program" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Program of Interest *</Label>
                  <Select value={formData.program} onValueChange={(v) => setFormData({ ...formData, program: v })}>
                    <SelectTrigger className="mt-1 rounded-xl"><SelectValue placeholder="Select a program" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">B.E. (Undergraduate)</SelectItem>
                      <SelectItem value="postgraduate">M.Tech (Postgraduate)</SelectItem>
                      <SelectItem value="doctoral">Ph.D (Doctoral)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Additional Information</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your academic interests and goals..." rows={3} className="mt-1 rounded-xl" />
                </div>
                <div className="border-2 border-dashed border-blue-200 dark:border-blue-900/50 rounded-2xl p-6 text-center bg-blue-50/50 dark:bg-blue-950/20">
                  <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Upload Documents</p>
                  <p className="text-xs text-gray-400 mb-3">Transcripts, certificates, and supporting documents</p>
                  <Button type="button" variant="outline" size="sm" className="rounded-xl">Choose Files</Button>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:opacity-90 text-white rounded-xl font-bold py-3 flex items-center justify-center gap-2">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-gray-400 text-center">By submitting, you agree to our terms and conditions</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-dark opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Download className="w-14 h-14 mx-auto mb-4 opacity-90" />
            <h3 className="text-4xl font-extrabold mb-4">Download Our Prospectus</h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Get detailed information about programs, faculty, campus facilities, and the admission process</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl shadow-lg"
                onClick={() => toast.success('📄 Brochure downloaded!', { description: 'RNSIT Prospectus 2026.pdf has been saved.' })}
              >
                Download PDF
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 hover:bg-white/20 rounded-xl font-bold"
                onClick={() => toast.info('📬 Request received!', { description: 'We\'ll mail the physical copy to your address within 5 working days.' })}
              >
                Request Physical Copy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

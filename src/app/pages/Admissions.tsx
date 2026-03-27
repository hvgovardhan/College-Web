import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, FileText, CheckCircle, AlertCircle, Download, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { PageHero } from '../components/PageHero';

const admissionProcess = [
  { step: 1, title: 'Online Application', description: 'Fill out the online application form with your details' },
  { step: 2, title: 'Document Submission', description: 'Upload required documents and transcripts' },
  { step: 3, title: 'Entrance Exam', description: 'Take the university entrance examination' },
  { step: 4, title: 'Interview', description: 'Attend the personal interview (if shortlisted)' },
  { step: 5, title: 'Admission Decision', description: 'Receive your admission decision via email' },
  { step: 6, title: 'Enrollment', description: 'Complete enrollment and pay fees' },
];

const importantDates = [
  { event: 'Application Opens', date: 'January 1, 2026', status: 'completed' },
  { event: 'Application Deadline (Early)', date: 'March 15, 2026', status: 'completed' },
  { event: 'Application Deadline (Regular)', date: 'May 31, 2026', status: 'upcoming' },
  { event: 'Entrance Exam', date: 'June 15-20, 2026', status: 'upcoming' },
  { event: 'Results Announcement', date: 'July 10, 2026', status: 'upcoming' },
  { event: 'Classes Begin', date: 'August 1, 2026', status: 'upcoming' },
];

const eligibilityCriteria = [
  {
    program: 'Undergraduate',
    requirements: [
      'Completed high school (12th grade) with minimum 75% marks',
      'Valid entrance exam score (SAT/ACT/University Entrance)',
      'English proficiency (TOEFL/IELTS for international students)',
      'Age: 17-20 years',
    ],
  },
  {
    program: 'Postgraduate',
    requirements: [
      'Bachelor\'s degree in relevant field with minimum 60% marks',
      'Valid entrance exam score (GRE/GMAT/University Entrance)',
      'Work experience (preferred for MBA programs)',
      'English proficiency (TOEFL/IELTS for international students)',
    ],
  },
  {
    program: 'Doctoral (Ph.D)',
    requirements: [
      'Master\'s degree in relevant field with minimum 65% marks',
      'Research proposal',
      'Publications or research experience (preferred)',
      'Interview with potential supervisor',
    ],
  },
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  return (
    <div>
      <PageHero
        title="Admissions"
        subtitle="Begin your journey to excellence at RNSIT"
        gradient="bg-gradient-to-r from-green-700 via-teal-600 to-blue-700"
        badge="Applications Open for 2026"
      />

      {/* Admission Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Admission Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple, transparent process to help you join our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcess.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xl font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Important Dates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mark your calendar with these crucial deadlines
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {importantDates.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-blue-600" />
                      )}
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {item.event}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.date}</p>
                      </div>
                    </div>
                    <Badge variant={item.status === 'completed' ? 'secondary' : 'default'}>
                      {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Eligibility Criteria</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Requirements for different programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, idx) => (
              <motion.div
                key={criteria.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {criteria.program}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {criteria.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Apply Now</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Take the first step towards your future
            </p>
          </motion.div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="program">Program of Interest *</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate Programs</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate Programs</SelectItem>
                      <SelectItem value="doctoral">Doctoral Programs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your academic interests and goals..."
                    rows={4}
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-2">Upload Documents</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    Transcripts, certificates, and other supporting documents
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                  By submitting this form, you agree to our terms and conditions
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Brochure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <Download className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Download Our Prospectus</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get detailed information about our programs, faculty, campus facilities, and admission process
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Download PDF
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-black/20 hover:bg-white hover:text-blue-900">
                  Request Physical Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

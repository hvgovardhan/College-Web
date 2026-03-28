import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { toast } from 'sonner';
import { PageHero } from '../components/PageHero';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 80 2860 7999', link: 'tel:+918028607999' },
  { icon: Mail, label: 'Email', value: 'principal@rnsit.ac.in', link: 'mailto:principal@rnsit.ac.in' },
  { icon: MapPin, label: 'Address', value: 'Dr. Vishnuvardhan Road, R.R. Nagar, Bengaluru, Karnataka – 560 098', link: null },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Sat: 9:00 AM – 5:00 PM', link: null },
];

const departments = [
  { name: 'Admissions Office', email: 'admissions@rnsit.ac.in', phone: '+91 80 2860 7999' },
  { name: 'Academic Affairs', email: 'academics@rnsit.ac.in', phone: '+91 80 2860 7998' },
  { name: 'Student Services', email: 'studentservices@rnsit.ac.in', phone: '+91 80 2860 7997' },
  { name: 'Examination Cell', email: 'examcell@rnsit.ac.in', phone: '+91 80 2860 7996' },
  { name: 'Placement Cell', email: 'placements@rnsit.ac.in', phone: '+91 80 2860 7995' },
  { name: 'Research & Development', email: 'research@rnsit.ac.in', phone: '+91 80 2860 7994' },
];

const faqs = [
  {
    category: 'Admissions',
    questions: [
      {
        question: 'What are the admission requirements?',
        answer: 'Admission requirements vary by program. Generally, you need a high school diploma or equivalent for undergraduate programs, a bachelor\'s degree for graduate programs, standardized test scores, recommendation letters, and a statement of purpose.',
      },
      {
        question: 'When is the application deadline?',
        answer: 'For Fall 2026 admission, the early application deadline is March 15, 2026, and the regular deadline is May 31, 2026. We recommend applying early to maximize your chances of acceptance and financial aid.',
      },
      {
        question: 'Can international students apply?',
        answer: 'Yes! We welcome international students from around the world. International applicants need to submit TOEFL/IELTS scores and may require a student visa. Our International Office provides comprehensive support.',
      },
    ],
  },
  {
    category: 'Academics',
    questions: [
      {
        question: 'How many programs do you offer?',
        answer: 'We offer over 200 programs across undergraduate, graduate, and doctoral levels, spanning fields like Engineering, Business, Sciences, Arts, and more.',
      },
      {
        question: 'What is the student-to-faculty ratio?',
        answer: 'Our student-to-faculty ratio is 15:1, ensuring personalized attention and mentorship for every student.',
      },
      {
        question: 'Are there online programs available?',
        answer: 'Yes, we offer select online and hybrid programs for working professionals. Contact Academic Affairs for details on available online programs.',
      },
    ],
  },
  {
    category: 'Campus Life',
    questions: [
      {
        question: 'Is on-campus housing available?',
        answer: 'Yes, we provide on-campus housing for undergraduate and graduate students. Housing options include dormitories, apartments, and family housing.',
      },
      {
        question: 'What clubs and activities are available?',
        answer: 'We have over 100 student clubs covering technical, cultural, sports, and social interests. There\'s something for everyone!',
      },
      {
        question: 'Do you have sports facilities?',
        answer: 'Absolutely! Our campus features a sports complex with an Olympic-size pool, basketball and tennis courts, a fitness center, and a stadium.',
      },
    ],
  },
  {
    category: 'Financial',
    questions: [
      {
        question: 'What is the tuition cost?',
        answer: 'Tuition varies by program. Undergraduate tuition is approximately $35,000 per year, while graduate tuition ranges from $25,000 to $45,000. Visit our Financial Aid office for detailed information.',
      },
      {
        question: 'Are scholarships available?',
        answer: 'Yes! We offer merit-based, need-based, and diversity scholarships. Financial aid packages are available for eligible students. Apply early to be considered for all scholarships.',
      },
      {
        question: 'Can I work on campus?',
        answer: 'Yes, we offer work-study programs and part-time job opportunities for students. International students can work up to 20 hours per week on campus.',
      },
    ],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help answer your questions"
        image="https://images.unsplash.com/photo-1762341118920-0b65e8d88aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="bg-gradient-to-r from-teal-900/85 via-cyan-800/75 to-blue-900/80"
        icon={<MessageSquare className="w-10 h-10 text-white" />}
        badge="Mon–Sat · 9:00 AM – 5:00 PM"
      />

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="hover-lift">
                <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 text-center shadow-lg h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{info.label}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-sm text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 section-light relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card-base overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 p-5">
                  <h3 className="text-white font-bold text-lg">Send Us a Message</h3>
                  <p className="text-white/70 text-sm">We'll get back to you within 24 hours</p>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Arjun Sharma" required className="mt-1 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" className="mt-1 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="arjun@example.com" required className="mt-1 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject *</Label>
                    <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" required className="mt-1 rounded-xl" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more about your inquiry..." rows={4} required className="mt-1 rounded-xl" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:opacity-90 text-white rounded-xl font-bold py-3 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map + Dept Contacts */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="card-base overflow-hidden">
                <div className="h-56 relative">
                  <iframe
                    src="https://maps.google.com/maps?q=RNS+Institute+of+Technology,+Dr.+Vishnuvardhan+Road,+RR+Nagar,+Bengaluru,+Karnataka+560098&output=embed&z=16"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title="RNS Institute of Technology, Bangalore"
                  />
                </div>
              </div>

              <div className="card-base overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-5 py-3">
                  <h4 className="text-white font-bold text-sm">Department Contacts</h4>
                </div>
                <div className="p-4 space-y-3">
                  {departments.map((dept, idx) => (
                    <div key={idx} className={`flex items-start gap-3 p-3 rounded-xl ${idx % 2 === 0 ? 'bg-teal-50 dark:bg-teal-950/30' : 'bg-blue-50 dark:bg-blue-950/30'}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${idx % 2 === 0 ? 'bg-teal-500' : 'bg-blue-500'}`}>
                        <span className="text-white text-xs font-black">{dept.name.charAt(0)}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 dark:text-white text-xs mb-1">{dept.name}</p>
                        <a href={`mailto:${dept.email}`} className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline block truncate">{dept.email}</a>
                        <a href={`tel:${dept.phone}`} className="text-[11px] text-gray-500 dark:text-gray-400">{dept.phone}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 section-soft relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="section-label">Got Questions?</span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Find answers to common questions about RNSIT</p>
          </motion.div>

          {faqs.map((section, idx) => (
            <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-black">{section.category.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.category}</h3>
              </div>
              <div className="card-base overflow-hidden">
                <Accordion type="single" collapsible>
                  {section.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`${section.category}-${qIdx}`} className="border-blue-100 dark:border-blue-900/30 px-5">
                      <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 text-sm">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
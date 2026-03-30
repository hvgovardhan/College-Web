import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Search, Moon, Sun, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';
import { Input } from './ui/input';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about', submenu: [
    { name: 'Vision & Mission', path: '/about#vision' },
    { name: 'Leadership', path: '/about#leadership' },
    { name: 'History', path: '/about#history' },
  ]},
  { name: 'Academics', path: '/academics', submenu: [
    { name: 'Departments', path: '/academics#departments' },
    { name: 'Programs', path: '/academics#programs' },
    { name: 'Faculty', path: '/academics#faculty' },
  ]},
  { name: 'Admissions', path: '/admissions' },
  { name: 'Campus Life', path: '/campus-life' },
  { name: 'Research', path: '/research' },
  { name: 'Placements', path: '/placements' },
  { name: 'News', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const socialPaths = [
  { label: 'Facebook', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Twitter', d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const openSubmenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveSubmenu(name);
  };

  const closeSubmenu = () => {
    closeTimer.current = setTimeout(() => setActiveSubmenu(null), 120);
  };

  // Scroll to hash section after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const navHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Top bar */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90"><Phone className="w-3 h-3" />+91 80 2860 7999</span>
            <span className="flex items-center gap-1.5 opacity-90"><Mail className="w-3 h-3" />info@rnsit.ac.in</span>
            <span className="flex items-center gap-1.5 opacity-90"><MapPin className="w-3 h-3" />R.R. Nagar, Bengaluru – 560 098</span>
          </div>
          <span className="opacity-80 font-medium">Autonomous Institution · VTU Affiliated · NAAC Accredited</span>
        </div>
      </div>

      {/* Navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0f1829]/95 backdrop-blur-xl shadow-lg shadow-blue-900/10 border-b border-blue-100 dark:border-blue-900/30'
            : 'bg-white dark:bg-[#0f1829] border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
                <span className="text-white text-xl font-black">R</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-extrabold text-gray-900 dark:text-white leading-tight">RNS Institute Of Technology</h1>
                <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold tracking-wide">Excellence in Education</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navigationLinks.map((link) => (
                <div key={link.path} className="relative"
                  onMouseEnter={() => link.submenu && openSubmenu(link.name)}
                  onMouseLeave={() => link.submenu && closeSubmenu()}
                >
                  <Link to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1 ${
                      location.pathname === link.path
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-blue-950/40'
                    }`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className={`w-3 h-3 opacity-60 transition-transform duration-200 ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />}
                  </Link>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      onMouseEnter={() => openSubmenu(link.name)}
                      onMouseLeave={() => closeSubmenu()}
                      className="absolute top-full left-0 mt-1 bg-white dark:bg-[#0f1829] rounded-2xl shadow-2xl shadow-blue-900/15 border border-blue-100 dark:border-blue-900/40 py-2 min-w-[200px] z-50"
                    >
                      {link.submenu.map((item) => (
                        <Link key={item.path} to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(!isSearchOpen)} className="rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40">
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden rounded-xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
              <Link to="/admissions" className="hidden md:block">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-md shadow-blue-500/25 font-semibold px-4">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>

          <AnimatePresence>
            {isSearchOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="pt-3 pb-1">
                  <Input type="search" placeholder="Search courses, programs, departments..." className="w-full rounded-xl" autoFocus />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t border-blue-100 dark:border-blue-900/30 overflow-hidden bg-white dark:bg-[#0f1829]">
              <div className="px-4 py-4 space-y-1">
                {navigationLinks.map((link) => (
                  <div key={link.path}>
                    <Link to={link.path}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                        location.pathname === link.path
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50/70 dark:hover:bg-blue-950/40 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.submenu.map((item) => (
                          <Link key={item.path} to={item.path} className="block px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-950 via-blue-950/80 to-gray-950 text-gray-400 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.3) 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white text-lg font-black">R</span>
                </div>
                <h3 className="text-white font-bold text-base leading-tight">RNS Institute<br />Of Technology</h3>
              </div>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">Empowering minds, shaping futures. Join us in the pursuit of engineering excellence.</p>
              <div className="flex gap-2">
                {socialPaths.map(s => (
                  <a key={s.label} href="#" className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-200">
                    <span className="sr-only">{s.label}</span>
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {([['About Us', '/about'], ['Academics', '/academics'], ['Admissions', '/admissions'], ['Research', '/research'], ['Placements', '/placements']] as [string, string][]).map(([label, path]) => (
                  <li key={path}>
                    <Link to={path} className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />{label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 text-sm">
                {([['Campus Life', '/campus-life'], ['Gallery', '/gallery'], ['News & Events', '/news'], ['Contact Us', '/contact'], ['FAQ', '#']] as [string, string][]).map(([label, path]) => (
                  <li key={path}>
                    <Link to={path} className="hover:text-blue-400 transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />{label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
                  <span className="leading-relaxed">Dr. Vishnuvardhan Road, R.R. Nagar,<br />Bengaluru, Karnataka – 560 098</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span>+91 80 2860 7999</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 flex-shrink-0 text-blue-500" />
                  <span>info@rnsit.ac.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} RNS Institute Of Technology. All rights reserved.</p>
            <p>Autonomous Institution · VTU Affiliated · NAAC Accredited</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

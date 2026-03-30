# RNS Institute Of Technology — Official Website

A modern, production-ready college website for **RNS Institute Of Technology, Bengaluru** built with React, TypeScript, Tailwind CSS, and Framer Motion.

![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38bdf8)
![VTU Affiliated](https://img.shields.io/badge/VTU-Affiliated-green)
![NAAC Accredited](https://img.shields.io/badge/NAAC-Accredited-blue)

## Overview

A fully responsive, feature-rich website for RNSIT that provides a seamless experience for prospective students, current students, faculty, and visitors. Built with a modern design system, smooth animations, dark mode support, and interactive features.

## Pages

| Page | Description |
|------|-------------|
| Home | Hero carousel, stats, announcements, quick access |
| About | Vision & Mission, timeline, leadership |
| Academics | Departments with modal details, programs, faculty |
| Admissions | Process steps, important dates, application form |
| Campus Life | Clubs, facilities, events, housing |
| Research | Research areas, publications, achievements |
| Placements | Stats, charts, recruiters, success stories |
| News | Filtered news grid, search |
| Gallery | Photo & video gallery with categories |
| Contact | Form, map, department contacts, FAQ |

## Tech Stack

- **React 18** + **TypeScript**
- **React Router 7** — client-side routing with hash scroll
- **Tailwind CSS 4** — utility-first styling with custom design tokens
- **Framer Motion** — animations and transitions
- **Recharts** — placement data visualization
- **Radix UI / shadcn/ui** — accessible component primitives
- **Sonner** — toast notifications
- **Vite** — build tool

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Dev server runs at `http://localhost:5173`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Layout.tsx     # Navbar + Footer
│   │   ├── Chatbot.tsx    # Animated chatbot assistant
│   │   ├── PageHero.tsx   # Reusable page hero
│   │   └── Newsletter.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── pages/             # All 10 page components
│   └── routes.tsx
└── styles/
    ├── index.css          # Global styles + design system utilities
    ├── tailwind.css
    └── theme.css          # CSS variables / color tokens
```

## Key Features

- Animated chatbot with cartoon robot face
- Department detail popover on click
- Hash-based smooth scroll navigation from dropdowns
- Dark / light mode toggle
- Placement charts with dark themed cards
- Toast notifications for form actions
- Fully mobile responsive

## Deployment

Deploy to **Vercel** or **Netlify**:

```bash
npm run build
# Upload dist/ folder or connect GitHub repo
```

## Contact

**RNS Institute Of Technology**  
Dr. Vishnuvardhan Road, R.R. Nagar, Bengaluru, Karnataka – 560 098  
📞 +91 80 2860 7999 | ✉️ info@rnsit.ac.in

# Hamza Hassan | Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Static export hota hai, yani kisi bhi free host par deploy ho jati hai.

## Run karna

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site /out folder mein
npm run typecheck
```

## Folder structure

```
portfolio/
├── public/
│   └── resume.pdf              # Download CV button isi ko serve karta hai
├── src/
│   ├── app/
│   │   ├── layout.tsx          # metadata, theme script
│   │   ├── page.tsx            # sections ko jodta hai
│   │   ├── globals.css         # theme colors (dark/light) aur animations
│   │   └── icon.svg            # favicon
│   ├── components/
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Hero, About, Skills, Experience, Projects, Education, Contact
│   │   └── ui/                 # Tag, SectionHeading, Reveal, ThemeToggle, Icons
│   ├── data/                   # SAARA CONTENT YAHAN: profile, skills, experience, projects, education
│   ├── lib/nav.ts              # navbar links
│   └── types/index.ts          # TypeScript types
├── next.config.mjs             # output: "export"
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Content kaise badalna hai

Components ko chhedne ki zaroorat nahi. Sirf `src/data/` ki files edit karein:

- `profile.ts`: naam, headline, about text, stats, email. Phone number comment mein hai; public karna ho to uncomment karein.
- `projects.ts`: naye projects add karein. `repoUrl` aur `liveUrl` set karte hi Code/Live buttons nazar aane lagte hain. **Restaurant Menu Assistant** ki description aur tech stack ko apne asal kaam ke mutabiq update karein (TODO likha hua hai).
- `skills.ts`, `experience.ts`, `education.ts`: seedhi lists hain.

CV update karni ho to naya PDF `public/resume.pdf` par replace kar dein.

## Deploy

**Vercel (sabse asaan):** repo GitHub par push karein, Vercel par import karein. Koi setting badalne ki zaroorat nahi.

**GitHub Pages:** `next.config.mjs` mein `basePath: "/repo-name"` add karein, build karein, aur `out/` folder publish karein. Hero mein `/resume.pdf` link ko bhi basePath ke saath adjust karna hoga.

## Theme

Colors `src/app/globals.css` ke CSS variables mein hain (`--accent` waghera). Wahan se dark aur light dono theme ka accent colour badal sakte hain.

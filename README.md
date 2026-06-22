<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
#  Personal Portfolio Website

A modern, responsive, and interactive portfolio website built with **React.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase skills, projects, certifications, and professional experience with a clean UI/UX and smooth animations.


##  Features

*  Dark & Light Theme Toggle
* Fully Responsive Design
*  Modern Glassmorphism UI
*  Smooth Animations with Framer Motion
*  Professional Hero Section
*  About & Education Section
*  Skills Showcase with Progress Bars
*  Services Section
*  Projects Portfolio
*  Contact Form & Social Links
*  Floating WhatsApp Button
*  Resume Download Option

---

##  Tech Stack

### Frontend

* React.js
* TypeScript
* Tailwind CSS

### Animation

* Framer Motion

### Icons

* Lucide React
* React Icons

### Build Tool

* Vite

### Deployment

* Vercel
* Netlify

### Version Control

* Git & GitHub

---

##  Project Structure

```text
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── ThemeProvider.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

##  Design Highlights

* Neon Glow Effects
* Glassmorphism Cards
* Modern Typography
* Smooth Hover Animations
* Mobile-First Responsive Layout
* Professional UI/UX

---

##  Sections Included

* Home
* About
* Skills
* Services
* Projects
* Certifications
* Contact


### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

##  Contact

Feel free to connect with me:

* LinkedIn
* GitHub
* Instagram
* Etsy

---

##  Acknowledgement

Developed as **Task 1** during the internship program at **Arch Technologies**.

⭐ If you like this project, don't forget to star the repository!
>>>>>>> 4eb4af2be30911d4b6b8864c83944dfab30ad0ca

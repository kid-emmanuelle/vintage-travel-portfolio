# Kid - Emmanuelle Portfolio

A vintage travel journal-inspired portfolio website

## 🎯 About This Project

This portfolio website presents professional journey through a unique vintage travel journal aesthetic, complete with passport-style layouts, travel stamps, and typewriter fonts. The site serves as both a professional showcase and a creative expression of her personality and interests.

## ✨ Features

- **Vintage Travel Journal Design**: Passport-style layouts with travel stamps and vintage typography
- **Responsive Design**: Optimized for all devices with a mobile-first approach
- **Portfolio Sections**:
  - 🏠 **Home**: Hero section with passport-style profile
  - 👤 **About**: Personal background and journey
  - 🚀 **Projects**: Technical projects and achievements
  - 📝 **Blog**: Technical articles and insights
  - 📸 **Gallery**: Personal photography and creative work
  - 📧 **Contact**: Get in touch form with EmailJS integration
- **Interactive Elements**: 
  - QR codes and barcodes for tech aesthetic
  - Framer Motion animations
  - Travel stamp decorations
- **MDX Support**: Blog posts written in MDX with syntax highlighting
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom vintage theme
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Content & Data
- **Blog**: MDX with `@next/mdx` and `next-mdx-remote`
- **Markdown**: Gray Matter for frontmatter parsing
- **Syntax Highlighting**: Remark Prism

### Additional Features
- **Email**: EmailJS for contact form
- **QR Codes**: qrcode.react for generating QR codes
- **Barcodes**: JSBarcode for barcode generation
- **Theme**: next-themes for dark/light mode

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kid-emmanuelle/vintage-portfolio.git
cd vintage-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 📁 Project Structure

```
vintage-portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── components/        # Reusable React components
│   │   ├── Barcode.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── QRCode.tsx
│   │   └── SpecCard.tsx
│   ├── contact/           # Contact form page
│   ├── gallery/           # Photo gallery
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   ├── cv/               # Resume/CV files
│   └── images/           # Images and photos
```

## 🎨 Design System

The portfolio uses a custom vintage travel journal theme with:

- **Color Palette**: Vintage burgundy, forest green, brass, and aged paper tones
- **Typography**: 
  - Serif fonts for headers
  - Script fonts for signatures
  - Typewriter fonts for technical content
- **Components**: Passport-style cards, travel stamps, vintage borders
- **Interactive Elements**: Hover effects, smooth animations, theme transitions

## 🚀 Deployment

The portfolio is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

For other platforms, ensure Node.js 18+ support and proper environment variable configuration.

## 🔧 Customization

### Themes
Modify the Tailwind configuration in `tailwind.config.ts` to customize the vintage color palette and typography.

### Content
- Update personal information in `app/components/HeroSection.tsx`
- Modify navigation in `app/components/Navigation.tsx`
- Customize metadata in `app/layout.tsx`

## 📄 License
MIT License

## 📧 Contact
- 📧 Email: kid.nguyenlenganha@gmail.com
- 💼 LinkedIn: [linkedin.com/in/kid-emmanuelle](https://linkedin.com/in/kid-emmanuelle)
- 💻 GitHub: [@kid-emmanuelle](https://github.com/kid-emmanuelle)

---

*Crafted with passion • Designed like a vintage travel journal* ✈️

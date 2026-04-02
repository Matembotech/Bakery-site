# 🥖 Jeje Bakery Website

A modern, responsive bakery website built with Next.js 16, React 19, and Tailwind CSS. Jeje Bakery showcases premium baked goods with elegant design and smooth animations.

---

## 📋 Overview

Jeje Bakery is a professional bakery website that allows customers to browse products, view services, learn about the bakery's story, and get in touch. The site features an intuitive user interface with responsive design, smooth animations, and direct WhatsApp integration for easy ordering.

---

## ✨ Features

- **Homepage**: Hero section with engaging visuals and call-to-action
- **About Page**: Bakery story, mission, and team information
- **Products Gallery**: Showcase of baked goods with filtering capabilities
- **Services Page**: Information about catering, custom orders, and delivery
- **Contact Page**: Contact form and bakery location details
- **FAQ Section**: Answers to common customer questions
- **WhatsApp Integration**: Direct messaging for orders and inquiries
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion for polished user experience

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16.2.2](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2.4](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Development Tools

- **Linting**: [ESLint 9](https://eslint.org/)
- **Configuration**: Next.js ESLint config
- **CSS Processing**: PostCSS with Tailwind plugin

---

## 📁 Project Structure

```
bakery-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page (/about)
│   ├── contact/           # Contact page (/contact)
│   ├── gallery/           # Gallery page (/gallery)
│   ├── products/          # Products page (/products)
│   ├── services/          # Services page (/services)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services listing
│   ├── Products.tsx       # Products grid
│   ├── GalleryGrid.tsx    # Image gallery
│   ├── FAQ.tsx            # Frequently asked questions
│   ├── ReadyToStart.tsx   # CTA section
│   ├── Footer.tsx         # Footer with links
│   ├── WhatsAppCTA.tsx    # Floating WhatsApp button
│   ├── ProductCard.tsx    # Product card component
│   └── ServiceCard.tsx    # Service card component
├── public/                # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .next/                 # Next.js build output (gitignored)
├── node_modules/          # Dependencies (gitignored)
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mls      # ESLint configuration
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.x or higher
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:

```bash
cd bakery-site
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Start the production server      |
| `npm run lint`  | Run ESLint to check code quality |

---

## 🎨 Design & Styling

- **Typography**: Uses Google Fonts (Inter & Poppins) for clean, modern readability
- **Color Palette**: Neutral cream background with accent colors defined in Tailwind config
- **Custom Classes**: Utility-first approach with component-specific styles in `globals.css`
- **Responsive**: Mobile-first design with breakpoints for all screen sizes

---

## 🔧 Configuration

### TypeScript (`tsconfig.json`)

- Strict mode enabled
- Path aliases configured: `@/*` points to project root
- ES2017 target with modern library features
- JSX support for React 19

### Tailwind CSS (`tailwind.config.mjs`)

- Custom color palette for bakery theme
- Font family configuration
- Content scanning for all `.tsx` and `.ts` files

---

## 📱 Pages & Routes

| Route       | Description                     | Component               |
| ----------- | ------------------------------- | ----------------------- |
| `/`         | Homepage with hero and sections | `app/page.tsx`          |
| `/about`    | Bakery story and information    | `app/about/page.tsx`    |
| `/products` | Product showcase                | `app/products/page.tsx` |
| `/services` | Bakery services                 | `app/services/page.tsx` |
| `/gallery`  | Photo gallery                   | `app/gallery/page.tsx`  |
| `/contact`  | Contact form and details        | `app/contact/page.tsx`  |

---

## 🧪 Development Guidelines

### Adding New Pages

1. Create a new folder in `app/` with your page name
2. Add a `page.tsx` file exporting a React component
3. Update navigation in `components/Header.tsx` if needed
4. Add page-specific styles to `globals.css` or create a new CSS module

### Adding New Components

1. Create a new file in `components/` with `.tsx` extension
2. Use TypeScript interfaces for props
3. Follow the existing component structure
4. Import and use in relevant pages

### Styling Best Practices

- Use Tailwind utility classes for most styling
- Use `globals.css` for design tokens and custom styles
- Maintain consistency with existing color schemes and spacing
- Ensure mobile responsiveness

---

## 🚢 Deployment

This Next.js application is optimized for deployment on [Vercel](https://vercel.com/), but can be deployed to any platform that supports Node.js.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

[Add License Information Here]

---

## 🙋 Support

For issues, questions, or contributions, please contact the development team or open an issue on GitHub.

---

**Built with ❤️ using Next.js**

# Brahmakosh - Vedic Astrology APIs

A modern, production-ready frontend for Brahmakosh, a Vedic Astrology API SaaS platform.

## Features

- 🎨 **Brand-Driven Design** - Premium UI with gold, saffron, and spiritual color palette
- 🚀 **Intro Screen** - Animated logo splash screen on first visit
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast & Modern** - Built with React 18, Vite, and Tailwind CSS
- 🎭 **Smooth Animations** - Framer Motion for elegant, sacred-feeling transitions
- 📚 **Complete Documentation** - Interactive API documentation with code examples
- 💳 **Pricing Page** - Clear pricing plans with feature comparison
- 🔐 **Auth Pages** - Beautiful login and signup forms

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Syntax Highlighter** - Code display

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your logo:
   - Place your Brahmakosh logo in `src/assets/logo.png`
   - The logo should be a gold circular seal with Om symbol

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── assets/          # Logo and media files
├── components/      # Reusable components
│   ├── common/      # Shared components
│   ├── layout/      # Layout components
│   └── ui/          # UI components (shadcn)
├── data/            # Static data (APIs, pricing)
├── pages/           # Page components
├── routes/          # Routing configuration
└── styles/          # Global styles
```

## Pages

- **Home** (`/`) - Hero, features, and code examples
- **APIs** (`/apis`) - Browse all available APIs
- **Docs** (`/docs`) - API documentation with sidebar
- **Doc Detail** (`/docs/:id`) - Individual API documentation
- **Pricing** (`/pricing`) - Pricing plans and features
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration

## Brand Colors

- **Gold** - Primary brand color (#d97706)
- **Saffron** - Secondary accent (#f97316)
- **Ruby** - Accent color (#dc2626)
- **Emerald** - Accent color (#059669)
- **Royal Blue** - Accent color (#2563eb)
- **Amethyst** - Accent color (#9333ea)
- **Beige/Ivory** - Background colors

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette.

### API Data

Modify `src/data/apiList.js` to add or update APIs.

### Pricing

Update `src/data/pricing.js` to modify pricing plans.

## Development

The project uses:
- JavaScript only (no TypeScript)
- All components are `.jsx` files
- Tailwind CSS for styling
- Framer Motion for animations

## License

Private - All rights reserved



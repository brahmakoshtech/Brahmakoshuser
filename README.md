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

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import the repository: `brahmakoshtech/Brahmakoshuser`

2. **Configure Environment Variables:**
   - In Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     - `VITE_USER_ID` - Your API user ID
     - `VITE_API_KEY` - Your API key
     - `VITE_BASE_URL` - API base URL (default: `https://json.astrologyapi.com/v1/`)

3. **Deploy:**
   - Vercel will automatically detect the Vite framework
   - Click "Deploy" and your app will be live!

4. **Custom Domain (Optional):**
   - In project settings, go to "Domains"
   - Add your custom domain

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Upload the dist folder contents to your hosting provider
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_USER_ID=your_user_id_here
VITE_API_KEY=your_api_key_here
VITE_BASE_URL=https://json.astrologyapi.com/v1/
```

**Note:** Never commit `.env` files to Git. They are already in `.gitignore`.

## License

Private - All rights reserved



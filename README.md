# Beans & Pods Trading Website

A modern, responsive website for Beans & Pods Trading, specializing in agricultural products with a focus on cocoa and vanilla.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Mobile-First Animations**: Animations are automatically disabled on mobile devices for better performance and accessibility
- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- **Framer Motion**: Smooth animations on desktop devices
- **Accessibility**: Respects user's motion preferences

## Mobile Animation Disable Feature

The website automatically disables all animations on mobile devices (screens smaller than 768px) to:

- Improve performance on mobile devices
- Reduce battery consumption
- Respect user accessibility preferences
- Provide a smoother experience on slower devices

### How it works:

1. **CSS Level**: Global CSS rules disable all animations, transitions, and transforms on mobile
2. **JavaScript Level**: The `useReducedMotion` hook detects mobile devices and user preferences
3. **Component Level**: All Framer Motion animations are conditionally disabled based on device type

### Components Updated:

- Header (loading animation)
- Hero Section
- Featured Products (carousel animations)
- About Preview
- Values Section
- Team Section
- Contact Form
- Contact Info
- About Page
- Contact Page

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React

## Project Structure

```
beans-trading-website/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── pages/          # Page-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Animation System

The website uses a sophisticated animation system that:

- **Detects mobile devices** using screen width and user agent
- **Respects user preferences** for reduced motion
- **Conditionally applies animations** based on device capabilities
- **Provides fallbacks** for users with motion sensitivity

### Animation Hooks

- `useIsMobile()`: Detects if the current device is mobile
- `useReducedMotion()`: Detects if animations should be reduced
- `useAnimationVariants()`: Provides pre-configured animation variants

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both desktop and mobile devices
5. Submit a pull request

## License

This project is proprietary to Beans & Pods Trading. 
# My Portfolio

A personal portfolio website built with **React**, **TypeScript**, and **Vite**, featuring a dark/light theme toggle.

## Tech Stack

- **React** — UI framework
- **TypeScript** — Type-safe JavaScript
- **Vite** — Build tool with HMR
- **styled-components** — CSS-in-JS styling with theme support
- **MUI Icons** — Icon library for the theme toggle button
- **React Compiler** — Enabled for optimized rendering

## Features

- Dark/Light theme toggle with persistent state
- Sticky navigation header with smooth-scroll links
- Hero section with animated glow ring and decorative elements
- Skills row showcasing technologies
- Responsive grid layout

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── Components/
│   ├── Header.tsx   # Navigation bar with theme toggle
│   └── Hero.tsx     # Hero section with introduction
├── App.tsx          # Root component with theme provider
├── App.css          # Global app styles
├── index.css        # Base CSS reset & variables
└── main.tsx         # Entry point
```

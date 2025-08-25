# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 website for Lazos Fence LLC, a fencing contractor serving Monmouth County and surrounding areas in New Jersey. The site showcases their services, portfolio, and contact information.

## Development Commands

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Build for production
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start

# Run linting
npm run lint
# or
yarn lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 13.4.19 with App Router
- **Styling**: Tailwind CSS 3.3.3
- **UI Library**: React 18.2.0
- **Icons**: React Icons 4.11.0
- **Smooth Scrolling**: React Scroll 1.8.9

### Project Structure
- `/src/app/` - Next.js 13 app directory containing pages and components
  - `page.js` - Single-page application with all sections (Home, About, Services, Portfolio, Contact)
  - `layout.js` - Root layout with metadata
  - `globals.css` - Global styles and Tailwind directives
  - `image_modal.js` - Modal component for portfolio images
  - `video_modal.js` - Modal component for portfolio videos
- `/public/` - Static assets
  - `/photos/` - Images for services and portfolio
  - `/videos/` - Background and portfolio videos

### Key Design Patterns
- **Single Page Application**: All content in `page.js` with smooth scroll navigation
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm, md, lg)
- **Component State**: Uses React hooks (useState, useEffect) for UI interactions
- **Modal System**: Separate modal components for images and videos in portfolio

### Styling Approach
- Custom Tailwind color: `primary: "#ff5722"` (red-orange brand color)
- Background images implemented via inline styles and Tailwind classes
- Responsive navigation with hamburger menu for mobile
- Navbar changes appearance on scroll using scroll event listener

### Important Implementation Details
- Client-side component (`"use client"`) for interactivity
- Video backgrounds with autoplay, loop, and muted attributes
- Portfolio uses CSS Grid with responsive columns
- Contact section displays business hours, phone, email, and service area
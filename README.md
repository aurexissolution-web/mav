# M.A. Veerappan Auto Sdn Bhd Website

Marketing and operations site for M.A. Veerappan Auto Sdn Bhd—an automotive parts and services company headquartered in Sungai Petani, Kedah. Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Firebase** for admin inventory management.

## Features

- Hero, services, shop, and testimonial sections showcasing offerings
- Detailed service pages (windscreen, battery, workshop, buy-scrap-car, etc.)
- Admin dashboard powered by Firebase Auth + Firestore
- Responsive Tailwind UI with subtle animations
- Structured data + meta tags for SEO/social previews

## Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:3001/#/` when the dev server starts (HashRouter is used).

### Production Build

```bash
npm run build
```

Deploy the generated `dist/` folder to your hosting provider (Netlify, Hostinger, etc.).

## Environment Variables

Create a `.env.local` (or `.env`) file in the project root:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_CLOUDINARY_CLOUD_NAME=...
VITE_CLOUDINARY_UPLOAD_PRESET=...
```

All keys are required for Firebase authentication/firestore and Cloudinary uploads.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Starts Vite dev server               |
| `npm run build`    | Bundles the app for production       |
| `npm run preview`  | Serves the production build locally  |

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Firebase Auth / Firestore / Storage
- Cloudinary (media uploads)

## License

© M.A. Veerappan Auto Sdn Bhd. All rights reserved.

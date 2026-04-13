

# USER LISTING DASHBOARD
A modern, high-performance user directory and transaction management dashboard built with Next.js 15, Tailwind CSS, and TypeScript. This project features a clean, professional UI with a custom grid background, dynamic routing, and reusable components.

# 🚀 Setup Instructions
1. Prerequisites
Ensure you have Node.js 18.x or later installed on your machine.

2. Installation
Clone the repository and install the dependencies
git clone <your-repo-url>
cd p2p-transaction-dashboard
npm install

3. Configuration
Ensure you have the tailwind.config.ts and postcss.config.js files in your root directory.
tailwind.config.ts:
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
dxport default config;

4. Running the Project
Start the development server:
npm run dev

# Architecture Decisions
1. Framework: Next.js (App Router)
I chose the Next.js App Router over the Pages Router for several reasons:

- Server Components: Reduces the amount of JavaScript sent to the client, improving load times.

- Simplified Routing: Uses a file-system based router where folders define routes (e.g., app/user/[id]/page.tsx).

- Native Font Optimization: Integrated next/font/google for zero layout shift when loading the DM Sans typeface.

# 2. Styling: Tailwind CSS & PostCSS
Instead of traditional CSS modules, we utilized Tailwind CSS for:

Consistency: Rapidly building UI with a standardized spacing and color scale.

Design Implementation: Easily implemented complex UI patterns like the "Grid Paper" background

# 3. State Management & Data Fetching
React Hooks: Used useState and useEffect for client-side data fetching from the JSONPlaceholder API.

Client-Side Navigation: Utilized next/navigation (useRouter and useParams) to handle transitions between the listing page and user detail pages without full page reloads.

# 4. TypeScript & Data Modeling
We implemented a strict typing system to prevent runtime errors:

Interface Inheritance: Created a base UserData interface and extended it into UserDetail to handle the additional fields (Company, Website, Phone) found on the profile pages.

Component Prop Typing: All reusable components (like Button and UserTable) use TypeScript interfaces for predictable behavior.

# Project Structure
├── app/
│   ├── globals.css          # Tailwind directives & global styles
│   ├── layout.tsx           # Root layout with DM Sans font
│   ├── page.tsx             # Main dashboard (User listing)
│   └── user/[id]/           # Dynamic Route
│       └── page.tsx         # Detailed User Profile
├── components/
│   └── UserDataTable.tsx    # Optimized Table Component
├── ui/
   ├── Button.tsx           # Reusable Action Button
├── types/
│   ├── User.ts              # Base User interfaces
│   ├── UserDetail.ts        # Extended User interfaces
│   └── Button.ts            # Component prop definitions
├── tailwind.config.ts       # Design system configuration
└── postcss.config.js        # CSS processing

# UI Features
- Dynamic Avatar Initials: Automatically generates user avatars based on name initials.

- Responsive Tables: Horizontal scroll support for mobile devices with shadow indicators.

- Search Filtering: Real-time client-side filtering by username.

- High-Fidelity Detail View: Multi-card layout with distinct sections for Contact, Address, and Company info.
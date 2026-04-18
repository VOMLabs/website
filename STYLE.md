# VOMLabs Website - Style Guide

## Overview

The VOMLabs website is a modern, clean, and professional landing page showcasing the team behind VOMLabs. The design emphasizes readability, accessibility, and a polished developer-centric aesthetic.

---

## Tech Stack

| Category          | Technology                                 |
| ----------------- | ------------------------------------------ |
| **Framework**     | Next.js 16.2.4 (React 19)                  |
| **Styling**       | Tailwind CSS 4 with CSS variables          |
| **UI Components** | shadcn/ui (Base UI variant - "base-vega")  |
| **Icons**         | Tabler Icons + Lucide React                |
| **Language**      | TypeScript                                 |
| **Linting**       | Biome                                      |
| **Data**          | YAML (js-yaml)                             |
| **Fonts**         | Geist (Sans + Mono), Inter, Jetbrains Mono |

---

## Design System

### Color Palette

The website uses **OKLCH color space** for consistent, accessible colors across light and dark modes.

#### Light Mode

| Token                  | Value              | Usage                     |
| ---------------------- | ------------------ | ------------------------- |
| `--background`         | `oklch(1 0 0)`     | Page background (white)   |
| `--foreground`         | `oklch(0.145 0 0)` | Primary text (near-black) |
| `--card`               | `oklch(1 0 0)`     | Card backgrounds          |
| `--card-foreground`    | `oklch(0.145 0 0)` | Card text                 |
| `--border`             | `oklch(0.922 0 0)` | Borders (light gray)      |
| `--muted`              | `oklch(0.97 0 0)`  | Secondary backgrounds     |
| `--muted-foreground`   | `oklch(0.556 0 0)` | Secondary text            |
| `--primary`            | `oklch(0.205 0 0)` | Primary elements          |
| `--primary-foreground` | `oklch(0.985 0 0)` | Text on primary           |

#### Dark Mode

| Token                  | Value                | Usage                        |
| ---------------------- | -------------------- | ---------------------------- |
| `--background`         | `oklch(0.145 0 0)`   | Page background (near-black) |
| `--foreground`         | `oklch(0.985 0 0)`   | Primary text (white)         |
| `--card`               | `oklch(0.205 0 0)`   | Card backgrounds             |
| `--card-foreground`    | `oklch(0.985 0 0)`   | Card text                    |
| `--border`             | `oklch(1 0 0 / 10%)` | Borders (subtle white)       |
| `--muted`              | `oklch(0.269 0 0)`   | Secondary backgrounds        |
| `--muted-foreground`   | `oklch(0.708 0 0)`   | Secondary text               |
| `--primary`            | `oklch(0.922 0 0)`   | Primary elements             |
| `--primary-foreground` | `oklch(0.205 0 0)`   | Text on primary              |

### Typography

| Element    | Font       | Weight          | Size    |
| ---------- | ---------- | --------------- | ------- |
| Logo/Brand | Inter      | 600 (Semi-bold) | 18px    |
| Headings   | Inter      | 600 (Semi-bold) | 36-48px |
| Body       | Inter      | 400             | 16px    |
| Small/Meta | Inter      | 400             | 12-14px |
| Code/Mono  | Geist Mono | -               | 14px    |

### Spacing System

- Base unit: **4px**
- Container max-width: **1280px** (7xl)
- Section padding: **24px** vertical (mobile), **48px** (desktop)
- Card padding: **24px**
- Gap between cards: **24px**
- Grid columns: 1 (mobile), 2 (sm), 3 (lg)

### Border Radius

- Buttons/Icons: **8px** (rounded-md)
- Cards: **12px** (rounded-xl)
- Avatars: **50%** (full round)
- Border width: **1px**

---

## Components

### 1. Navbar (`Navbar`)

- **Position**: Sticky top, full-width
- **Height**: 64px
- **Background**: Semi-transparent with `backdrop-blur-xl`
  - Light: `bg-zinc-50/80`
  - Dark: `bg-black/80`
- **Border**: Bottom border (1px)
- **Contents**:
  - Logo (V logo + "VOMLabs" text)
  - Navigation links (hidden on mobile, visible on desktop)
  - Theme toggle

### 2. Hero (`Hero`)

- **Layout**: Centered text column
- **Max-width**: 672px (2xl)
- **Elements**:
  - H1: "Meet the team" - 36-48px, semi-bold, tracking-tight
  - Subtitle: 18px, muted color

### 3. Staff Card (`StaffCard`)

- **Layout**: Vertical flex with gap-4
- **Background**: White / dark-zinc-950
- **Border**: 1px solid zinc-200 / dark-zinc-800
- **Border-radius**: 12px (rounded-xl)
- **Padding**: 24px
- **Elements**:
  - **Avatar**:
    - Size: 56x56px
    - Border-radius: 50%
    - Object-fit: cover
    - Fallback: First letter of name in a circle
  - **Name**: Semi-bold, primary text color
  - **Role**: 14px, muted text color
  - **Discord Mention**: 12px, lighter muted color (displayed as `@username` in lowercase)
  - **Description**: 14px, leading-relaxed, muted color
  - **Social Links**: Horizontal flex wrap, gap-2

### 4. Social Link Button

- **Size**: 32x32px
- **Border**: 1px solid zinc-200 / dark-zinc-800
- **Border-radius**: 8px (rounded-md)
- **Icon size**: 16px
- **Icon color**: zinc-600 / dark-zinc-400
- **Hover state**: Background shifts to zinc-100 / dark-zinc-800
- **Behavior**:
  - Opens in new tab (`target="_blank"`)
  - Discord links redirect to configured Discord server URL

### 5. Theme Toggle (`ModeToggle`)

- **Type**: Button group (not dropdown)
- **Layout**: Horizontal flex with border
- **Buttons**: 3 theme options (Light, Dark, System)
- **Button size**: 28x28px
- **Active state**: Background highlight (zinc-200 / dark-zinc-700)
- **Icons**: Sun, Moon, Monitor (from Lucide React)
- **Icons size**: 16px

### 6. Footer (`Footer`)

- **Background**: zinc-50 / black
- **Border**: Top border
- **Layout**: Flex column (mobile) / row (desktop)
- **Elements**:
  - Logo (small)
  - Copyright text
  - Navigation links (Privacy Policy, Terms of Service)

---

## Responsive Breakpoints

| Breakpoint | Width   | Grid Columns |
| ---------- | ------- | ------------ |
| Default    | < 640px | 1            |
| sm         | 640px   | 2            |
| lg         | 1024px  | 3            |

---

## Animations & Transitions

- **Hover transitions**: `transition-colors` (default duration)
- **Theme toggle icons**: Smooth scale/rotate transitions
- **Navbar**: Backdrop blur effect
- **Cards**: No explicit animations (clean static design)

---

## Data Management

### Staff Data (`staff.yaml`)

- Stored in `src/data/staff.yaml`
- Format: YAML with structured fields
- Features:
  - Discord server URL configuration
  - Individual staff profiles with social links
  - Discord mentions displayed in lowercase

### TypeScript Interfaces (`staff.ts`)

- `SocialLinks` - Optional social platform URLs
- `StaffMember` - Individual profile data
- `StaffData` - Container with discordServer + staff array

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with ThemeProvider
│   ├── page.tsx        # Main page (Home)
│   └── globals.css     # Global styles + CSS variables
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── dropdown-menu.tsx
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── staff-card.tsx
│   ├── staff-grid.tsx
│   ├── footer.tsx
│   ├── mode-toggle.tsx
│   ├── social-icons.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── staff.ts        # Data loading utilities
│   └── utils.ts        # cn() helper
└── data/
    └── staff.yaml      # Staff configuration
```

---

## Accessibility Features

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, `<nav>`
- **Theme toggle**: Accessible button group with aria-labels
- **Links**: `rel="noopener noreferrer"` on external links
- **Images**: Alt text for avatars
- **Focus states**: Outline-ring applied via CSS
- **Color contrast**: OKLCH colors designed for WCAG compliance

---

## Development Commands

| Command          | Purpose                  |
| ---------------- | ------------------------ |
| `npm run dev`    | Start development server |
| `npm run build`  | Production build         |
| `npm run start`  | Start production server  |
| `npm run lint`   | Run Biome linter         |
| `npm run format` | Format code with Biome   |

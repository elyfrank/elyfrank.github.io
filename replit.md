# Portfolio Website - Ely Frank Matias Oliveira

## Overview

This is a modern portfolio website for Ely Frank Matias Oliveira, a Senior Full Stack Developer from Natal, Brazil with 15+ years of experience. The application is built as a single-page application (SPA) showcasing professional experience, skills, education, and contact information. The project follows a monorepo structure with clear separation between client, server, and shared components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple
- **Build Process**: ESBuild for server bundling

### Development Environment
- **Development Server**: Vite dev server with HMR
- **Type Checking**: TypeScript with strict mode enabled
- **Hot Reload**: Integrated development experience with runtime error overlays
- **Replit Integration**: Optimized for Replit development environment

## Key Components

### Client-Side Components
1. **Navigation**: Responsive navigation with smooth scrolling to sections
2. **Hero Section**: Personal introduction with professional branding
3. **Experience Timeline**: Professional work history with detailed descriptions
4. **Skills Grid**: Categorized technical skills display
5. **Education & Certifications**: Academic background and professional certifications
6. **Contact Information**: Multiple contact methods with accessibility features

### Server Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Management**: Centralized route registration system
- **Error Handling**: Global error middleware for consistent error responses
- **Development Middleware**: Request logging and performance monitoring

### Shared Resources
- **Database Schema**: Drizzle schema definitions with Zod validation
- **Type Definitions**: Shared TypeScript interfaces between client and server
- **Validation Schemas**: Reusable Zod schemas for data validation

## Data Flow

The application currently operates primarily as a static portfolio site with the following data flow:

1. **Static Content**: Portfolio information is hardcoded in React components
2. **Database Schema**: User schema defined but not actively used in current implementation
3. **Storage Layer**: Memory-based storage implementation ready for database integration
4. **API Routes**: Route structure established but not currently utilized
5. **Client State**: Managed through React Query for future API integration

## External Dependencies

### Core Dependencies
- **UI Framework**: React ecosystem with Radix UI components
- **Database**: Neon Database (serverless PostgreSQL)
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter family) for typography

### Development Tools
- **Type Safety**: TypeScript across the entire stack
- **Code Quality**: ESLint and Prettier integration (implied)
- **Build Optimization**: Vite for client, ESBuild for server
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Production Build Process
1. **Client Build**: Vite builds optimized React application to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Asset Handling**: Static assets served from build directory
4. **Environment Variables**: Database URL required for PostgreSQL connection

### Development Workflow
- **Local Development**: `npm run dev` starts development server with HMR
- **Database Management**: `npm run db:push` applies schema changes
- **Type Checking**: `npm run check` validates TypeScript compilation
- **Production Start**: `npm start` serves built application

### Environment Configuration
- **Development**: Vite dev server with Express API
- **Production**: Express server serving static React build
- **Database**: PostgreSQL connection via environment variable
- **Session Storage**: PostgreSQL-backed session management

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
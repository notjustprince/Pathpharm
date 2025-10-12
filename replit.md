# Anatomy Learn - Interactive Anatomy Learning Platform

## Overview
Anatomy Learn is a comprehensive web-based anatomy education platform inspired by Teach Me Anatomy. The application helps medical students, healthcare professionals, and anatomy enthusiasts master human anatomy through interactive articles, diagrams, and practice quizzes.

## Current State
**Status**: Design prototype complete with full navigation

The application currently features:
- ✅ Beautiful, responsive UI with medical-professional aesthetics
- ✅ Complete navigation system between all pages
- ✅ Hero section with anatomical imagery
- ✅ Category browsing by body systems and regions
- ✅ Article detail pages with clinical relevance boxes
- ✅ Interactive quiz system with immediate feedback
- ✅ Dashboard with progress tracking
- ✅ Search functionality
- ✅ Dark/light mode toggle

## Project Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI components
- **State Management**: React hooks + TanStack Query (ready for API integration)

### Pages
1. **HomePage** (`/`) - Hero, featured content, categories, sample quiz
2. **BrowsePage** (`/browse`) - All anatomy topics with search
3. **CategoryPage** (`/category/:slug`) - Articles within a category
4. **ArticlePage** (`/article/:id`) - Full article with clinical boxes
5. **QuizPage** (`/quiz`) - Interactive quiz with progress tracking
6. **DashboardPage** (`/dashboard`) - User statistics and recent activity

### Key Components
- `Hero` - Landing page hero with CTA buttons
- `CategoryCard` - Displays anatomy categories with images
- `ArticleCard` - Article previews with metadata
- `QuizCard` - Interactive quiz questions with explanations
- `StatsCard` - Dashboard statistics display
- `ClinicalBox` - Clinical relevance callouts
- `Header` - Navigation bar with search
- `ThemeProvider` - Dark/light mode management

### Design System
- **Colors**: Medical blue primary (#2563eb in light, #3b82f6 in dark)
- **Typography**: Inter for body, Plus Jakarta Sans for headings
- **Spacing**: Consistent 4px-based spacing scale
- **Components**: Leverages Shadcn UI with custom theming
- **Interactions**: Subtle hover/active states using elevation system

## Mock Data
The application currently uses mock data for demonstration:
- Stock images for anatomical diagrams (located in `attached_assets/stock_images/`)
- Hardcoded articles, quizzes, and statistics
- All mock data is marked with `// TODO: remove mock functionality` comments

## Next Steps for Full Implementation

### Backend Development
1. **Data Schema** (in `shared/schema.ts`)
   - Articles table (id, title, content, category, readTime, etc.)
   - Categories table (id, name, type, icon, image)
   - Quizzes table (id, question, options, correctAnswer, explanation)
   - User progress tracking (optional for Phase 2)

2. **API Routes** (in `server/routes.ts`)
   - `GET /api/categories` - List all categories
   - `GET /api/categories/:slug/articles` - Get articles by category
   - `GET /api/articles/:id` - Get single article
   - `GET /api/quizzes` - Get quiz questions
   - `POST /api/quiz-results` - Save quiz results (optional)

3. **Storage Layer** (update `server/storage.ts`)
   - Implement CRUD operations for articles, categories, quizzes
   - Currently configured for in-memory storage (MemStorage)
   - Can be swapped for PostgreSQL database if needed

### Content Integration
1. Replace mock data with real anatomy content
2. Add actual anatomical diagrams and illustrations
3. Create comprehensive question bank for quizzes
4. Write clinical relevance content for articles

### Enhanced Features (Phase 2)
- User authentication with Replit Auth
- Personal progress tracking and analytics
- Bookmarking favorite articles
- Spaced repetition flashcard system
- Advanced search with filters
- Quiz difficulty levels
- Performance comparison with peers

## Running the Project
The app runs on port 5000 with:
- Frontend: Vite dev server
- Backend: Express.js server
- Command: `npm run dev` (already configured in workflow)

## File Structure
```
client/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components with routing
│   ├── lib/            # Utilities and query client
│   └── index.css       # Global styles and design tokens
server/
├── routes.ts           # API routes (ready for implementation)
├── storage.ts          # Data storage interface
└── index.ts            # Express server setup
shared/
└── schema.ts           # Shared TypeScript types
```

## Design Guidelines
See `design_guidelines.md` for complete design specifications including:
- Color palette (light/dark modes)
- Typography hierarchy
- Component patterns
- Spacing system
- Interaction guidelines

## Technologies Used
- React 18 + TypeScript
- Wouter (routing)
- TanStack Query (data fetching)
- Tailwind CSS + Shadcn UI
- Express.js
- Drizzle ORM (ready for DB)
- Lucide React (icons)

## Recent Changes (2025-10-12)
- ✅ Created complete page navigation system
- ✅ Wired up all interactive elements to route properly
- ✅ Added Browse, Category, Article, Quiz, and Dashboard pages
- ✅ Implemented header navigation with working links
- ✅ Added quiz completion flow with score display
- ✅ Created dashboard with activity tracking

## Notes
- All images are stock photos from attached_assets and should be replaced with actual anatomical diagrams
- Mock data is clearly marked for easy removal when implementing backend
- The design follows medical-professional aesthetics while remaining approachable
- Full dark mode support throughout the application

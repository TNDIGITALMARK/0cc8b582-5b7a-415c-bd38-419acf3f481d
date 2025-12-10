# Michelle Louis Brand Showcase Platform

A professional social media marketing platform that connects brands with high-quality content creation and strategic showcasing services.

## 🎨 Design System

**Color Palette:**
- **Primary**: Deep Navy (#1a2d4a) - Professional & Trustworthy
- **Secondary/Accent**: Sophisticated Gold (#d4a53a) - Premium Feel
- **Background**: Warm White (#ffffff)
- **Text**: Rich Navy-Black for high contrast

**Typography:**
- **Headings**: Space Grotesk (Modern, Bold)
- **Body**: Inter (Clean, Professional)
- **Serif Accents**: Playfair Display (Elegance)

## 🚀 Features

### 3-Page Architecture

1. **Homepage** (`/`)
   - Hero section with prominent CTA
   - Featured showcases gallery
   - "Why Choose Us" benefits section
   - Latest blog insights preview
   - Call-to-action for brand submissions

2. **Submit Your Brand** (`/submit`)
   - Multi-step form with progress indicator
   - Brand information collection
   - Contact details and timeline preferences
   - Social platform selection
   - Budget range options
   - Status tracking preview after submission

3. **Showcase Gallery & Blog** (`/showcases`, `/blog`)
   - Filterable showcase grid by industry
   - Individual case study pages with metrics
   - Blog with search and category filtering
   - Related content suggestions

## 📦 Core Components

- **Navigation**: Sticky header with mobile menu
- **Footer**: Contact info, quick links, social media
- **ShowcaseCard**: Featured image, metrics, hover effects
- **BlogCard**: Featured image, read time, category badges
- **HeroSection**: Full-width with gradient background and stats

## 🗄️ Database Schema

Tables created for:
- `brand_submissions`: Form data with status tracking
- `showcases`: Portfolio items with metrics and gallery
- `blog_posts`: Articles with SEO and categorization
- Multi-tenant isolation with RLS policies

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **UI Components**: Radix UI + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Dates**: date-fns
- **Forms**: React Hook Form + Zod validation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized interactions
- Fluid typography with clamp()

## 🎯 Key Pages

- `/` - Homepage with hero and featured content
- `/submit` - Multi-step brand submission form
- `/showcases` - Filterable gallery of case studies
- `/showcases/[id]` - Individual showcase details
- `/blog` - Blog listing with search/filter
- `/blog/[slug]` - Individual blog posts

## 📝 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Global Styles

Located in `src/app/globals.css`:
- CSS custom properties for colors
- Typography scale
- Button styles (primary, secondary, outline)
- Form element defaults
- Shadow system for elevation
- Responsive container and section spacing

## 📊 Mock Data

Development data in `src/lib/mock-data.ts`:
- 4 showcase examples across industries
- 4 blog posts with various categories
- Status tracking stages
- All with realistic metrics and content

## 🔗 Links & Navigation

- Home, Showcases, Blog in main nav
- "Submit Your Brand" CTA prominently featured
- Footer with quick links and social media
- Breadcrumbs and back navigation on detail pages

## ⚡ Performance

- Optimized images with Next.js Image component
- Font optimization with Google Fonts
- CSS custom properties for theming
- Responsive images and lazy loading

---

Built with precision and professional design standards for Michelle Louis Brand Showcase Platform.

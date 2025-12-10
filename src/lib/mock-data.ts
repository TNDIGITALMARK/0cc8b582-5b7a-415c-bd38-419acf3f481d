import { Showcase, BlogPost } from './types';

export const mockShowcases: Showcase[] = [
  {
    id: '1',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'Luxury Boutique Instagram Campaign',
    brand_name: 'Elegance Atelier',
    description: 'A sophisticated Instagram campaign showcasing high-end fashion pieces with artistic photography and lifestyle storytelling.',
    industry: 'Fashion',
    campaign_type: 'Instagram Campaign',
    featured_image_url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80'
    ],
    metrics: {
      engagement: '40% increase',
      followers: '2.5K new followers',
      impressions: '150K impressions',
      reach: '95K accounts reached'
    },
    results_summary: 'Successfully elevated brand presence with premium visual storytelling, resulting in significant engagement growth and increased brand recognition.',
    tags: ['Fashion', 'Instagram', 'Lifestyle', 'Luxury'],
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString()
  },
  {
    id: '2',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'Farm-to-Table Content Series',
    brand_name: 'Harvest & Table',
    description: 'An authentic content series highlighting locally sourced ingredients and the restaurant\'s commitment to sustainability.',
    industry: 'Restaurant',
    campaign_type: 'Content Series',
    featured_image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&q=80'
    ],
    metrics: {
      engagement: '65% engagement rate',
      followers: '200 weekly new followers',
      impressions: '85K impressions',
      conversions: '35% increase in reservations'
    },
    results_summary: 'Authentic storytelling drove strong community engagement and significantly boosted reservations through compelling visual narratives.',
    tags: ['Restaurant', 'Food', 'Sustainability', 'Local Business'],
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString()
  },
  {
    id: '3',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'Tech Startup App Launch',
    brand_name: 'FlowSync',
    description: 'Dynamic product launch campaign combining sleek product demos with user testimonials and behind-the-scenes content.',
    industry: 'Technology',
    campaign_type: 'Product Launch',
    featured_image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    ],
    metrics: {
      impressions: '50K first week impressions',
      reach: '35K accounts reached',
      engagement: '8.5% engagement rate',
      conversions: '1.2K app downloads'
    },
    results_summary: 'Strategic launch campaign created strong market buzz, driving significant downloads and establishing brand credibility.',
    tags: ['Technology', 'Startup', 'App Launch', 'Product Marketing'],
    is_featured: false,
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString()
  },
  {
    id: '4',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'Wellness Brand Transformation',
    brand_name: 'Serenity Wellness',
    description: 'Complete brand refresh with cohesive visual identity across social platforms, emphasizing natural beauty and holistic wellness.',
    industry: 'Wellness',
    campaign_type: 'Brand Identity',
    featured_image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
    ],
    metrics: {
      engagement: '55% increase in engagement',
      followers: '3.2K new followers',
      impressions: '120K impressions',
      reach: '78K accounts reached'
    },
    results_summary: 'Comprehensive rebrand successfully repositioned the wellness center as a premium destination, attracting ideal clientele.',
    tags: ['Wellness', 'Branding', 'Lifestyle', 'Health'],
    is_featured: false,
    display_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    published_at: new Date().toISOString()
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: '5 Social Media Trends Small Businesses Must Know in 2024',
    slug: '5-social-media-trends-small-businesses-2024',
    excerpt: 'Stay ahead of the curve with these essential social media trends that are reshaping how small businesses connect with their audience.',
    content: 'Social media marketing continues to evolve at a rapid pace...',
    featured_image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    category: 'Trends',
    tags: ['Social Media', 'Marketing', 'Small Business', 'Trends 2024'],
    status: 'published',
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    read_time_minutes: 6,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'How Authentic Storytelling Doubled Client Sales',
    slug: 'authentic-storytelling-doubled-client-sales',
    excerpt: 'A deep dive into how genuine brand narratives create emotional connections that drive real business results.',
    content: 'Authenticity in marketing is more than a buzzword...',
    featured_image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    category: 'Case Study',
    tags: ['Storytelling', 'Case Study', 'Brand Strategy', 'Sales'],
    status: 'published',
    published_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    read_time_minutes: 8,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'Instagram Algorithm Changes: What Brands Need to Know',
    slug: 'instagram-algorithm-changes-what-brands-need-know',
    excerpt: 'Understanding the latest Instagram algorithm updates and how to optimize your content strategy for maximum visibility.',
    content: 'Instagram\'s algorithm continues to prioritize meaningful engagement...',
    featured_image_url: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    category: 'Tips',
    tags: ['Instagram', 'Algorithm', 'Social Media Strategy', 'Content Marketing'],
    status: 'published',
    published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    read_time_minutes: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    tenantid: 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2',
    projectid: '0cc8b582-5b7a-415c-bd38-419acf3f481d',
    title: 'The Power of Visual Consistency in Brand Building',
    slug: 'power-visual-consistency-brand-building',
    excerpt: 'Learn why maintaining visual consistency across platforms is crucial for building a recognizable and trustworthy brand.',
    content: 'Visual consistency is the foundation of memorable brand identity...',
    featured_image_url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    category: 'Branding',
    tags: ['Branding', 'Visual Design', 'Brand Identity', 'Marketing'],
    status: 'published',
    published_at: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    read_time_minutes: 7,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export const statusTrackingStages = [
  {
    stage: 'Submission Received',
    description: 'Confirmation email sent within 24 hours',
    icon: '📩',
    estimatedDays: 1
  },
  {
    stage: 'Creative Review',
    description: 'Concept development in progress',
    icon: '🎨',
    estimatedDays: 3-5
  },
  {
    stage: 'Content Creation',
    description: 'Photo shoot scheduled, editing underway',
    icon: '📸',
    estimatedDays: 5-7
  },
  {
    stage: 'Final Delivery',
    description: 'Content package ready with revision round included',
    icon: '✨',
    estimatedDays: 1-2
  }
];

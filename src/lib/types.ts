// Michelle Louis Platform Types

export interface BrandSubmission {
  id: string;
  tenantid: string;
  projectid: string;
  brand_name: string;
  main_brand_name: string;
  showcase_instructions: string;
  contact_email: string;
  contact_name?: string;
  contact_phone?: string;
  timeline_preference: string;
  budget_range?: string;
  social_platforms: string[];
  brand_assets_urls: string[];
  status: 'pending' | 'review' | 'in_progress' | 'completed' | 'cancelled';
  status_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Showcase {
  id: string;
  tenantid: string;
  projectid: string;
  title: string;
  brand_name: string;
  description: string;
  industry?: string;
  campaign_type?: string;
  featured_image_url?: string;
  gallery_images: string[];
  metrics: {
    engagement?: string;
    followers?: string;
    impressions?: string;
    reach?: string;
    conversions?: string;
  };
  results_summary?: string;
  tags: string[];
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface BlogPost {
  id: string;
  tenantid: string;
  projectid: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  category?: string;
  tags: string[];
  meta_title?: string;
  meta_description?: string;
  status: 'draft' | 'published' | 'archived';
  published_at?: string;
  read_time_minutes?: number;
  created_at: string;
  updated_at: string;
}

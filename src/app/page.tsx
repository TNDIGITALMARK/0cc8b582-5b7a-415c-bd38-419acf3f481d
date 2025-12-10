import HeroSection from '@/components/HeroSection';
import ShowcaseCard from '@/components/ShowcaseCard';
import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { mockShowcases, mockBlogPosts } from '@/lib/mock-data';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const featuredShowcases = mockShowcases.filter(s => s.is_featured).slice(0, 3);
  const recentBlogPosts = mockBlogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Showcases Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Showcases</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest success stories and see how we've helped brands achieve remarkable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredShowcases.map((showcase) => (
              <ShowcaseCard key={showcase.id} showcase={showcase} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/showcases" className="btn-outline inline-flex items-center gap-2">
              View All Showcases
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional showcasing that elevates your brand and drives measurable growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Professional photography and content creation that captures your brand's essence and tells your unique story
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Fast Turnaround
              </h3>
              <p className="text-muted-foreground">
                Get your brand showcase completed within 2 weeks with regular updates and clear communication throughout
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Proven Results
              </h3>
              <p className="text-muted-foreground">
                Our showcases consistently drive engagement growth and help brands connect with their ideal audience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and strategies in social media marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
              Read More Articles
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Showcase Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Submit your brand today and start your journey to exceptional social media presence.
            </p>
            <Link href="/submit" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Submit Your Brand Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
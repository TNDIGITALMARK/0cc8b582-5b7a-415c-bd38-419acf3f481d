import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockBlogPosts } from '@/lib/mock-data';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = mockBlogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (same category, excluding current)
  const relatedPosts = mockBlogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="container max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Blog</span>
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="relative h-[400px]">
              <Image
                src={post.featured_image_url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Category */}
            {post.category && (
              <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
              {post.published_at && (
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{format(new Date(post.published_at), 'MMMM d, yyyy')}</span>
                </div>
              )}
              {post.read_time_minutes && (
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.read_time_minutes} min read</span>
                </div>
              )}
              <button className="flex items-center gap-2 hover:text-accent transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 pb-8 border-b border-gray-200">
                {post.excerpt}
              </p>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                {post.content}
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Understanding the Landscape</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Social media marketing continues to evolve at a rapid pace, with new platforms, features, and algorithms emerging constantly. Staying ahead requires not just awareness of these changes, but a strategic approach to implementation.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Strategies for Success</h2>
              <p className="text-foreground leading-relaxed mb-6">
                The most successful brands understand that social media is about building genuine connections with their audience. This means creating content that resonates, engages, and provides real value beyond just promotional messaging.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 my-8 text-lg italic text-muted-foreground">
                "Authentic storytelling creates emotional connections that drive real business results. It's not about perfection—it's about being genuine and relatable."
              </blockquote>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Measuring What Matters</h2>
              <p className="text-foreground leading-relaxed mb-6">
                While vanity metrics like follower counts can be encouraging, the true measure of social media success lies in engagement rates, conversion metrics, and the quality of community you build. Focus on metrics that align with your business goals.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Taking Action</h2>
              <p className="text-foreground leading-relaxed mb-6">
                The best time to start improving your social media presence is now. Begin with a clear strategy, focus on your audience's needs, and maintain consistency in your messaging and visual identity across all platforms.
              </p>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-lg shadow hover:shadow-lg transition-all overflow-hidden"
                >
                  {relatedPost.featured_image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.featured_image_url}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Elevate Your Brand?</h2>
          <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
            Let's create professional content that showcases your brand's unique story
          </p>
          <Link href="/submit" className="btn-primary inline-flex items-center gap-2">
            Submit Your Brand
          </Link>
        </div>
      </div>
    </div>
  );
}

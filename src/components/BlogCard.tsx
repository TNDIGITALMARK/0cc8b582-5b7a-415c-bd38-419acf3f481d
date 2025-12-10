import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Featured Image */}
        <div className="relative h-56 overflow-hidden bg-muted">
          {post.featured_image_url ? (
            <Image
              src={post.featured_image_url}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}

          {/* Category Badge */}
          {post.category && (
            <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              {post.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
            {post.published_at && (
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{format(new Date(post.published_at), 'MMM d, yyyy')}</span>
              </div>
            )}
            {post.read_time_minutes && (
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.read_time_minutes} min read</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
              {post.excerpt}
            </p>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-auto">
            Read Article
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}

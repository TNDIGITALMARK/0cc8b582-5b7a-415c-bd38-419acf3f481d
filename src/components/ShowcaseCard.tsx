import Link from 'next/link';
import Image from 'next/image';
import { Showcase } from '@/lib/types';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface ShowcaseCardProps {
  showcase: Showcase;
}

export default function ShowcaseCard({ showcase }: ShowcaseCardProps) {
  return (
    <Link href={`/showcases/${showcase.id}`}>
      <div className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 overflow-hidden bg-muted">
          {showcase.featured_image_url ? (
            <Image
              src={showcase.featured_image_url}
              alt={showcase.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}

          {/* Featured Badge */}
          {showcase.is_featured && (
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category and Industry */}
          <div className="flex items-center gap-2 mb-3">
            {showcase.industry && (
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                {showcase.industry}
              </span>
            )}
            {showcase.campaign_type && (
              <span className="text-xs font-medium text-muted-foreground">
                {showcase.campaign_type}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {showcase.title}
          </h3>

          {/* Brand Name */}
          <p className="text-sm font-medium text-accent mb-3">
            {showcase.brand_name}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
            {showcase.description}
          </p>

          {/* Metrics */}
          {Object.keys(showcase.metrics).length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4 pt-4 border-t border-gray-200">
              {Object.entries(showcase.metrics).slice(0, 2).map(([key, value]) => (
                <div key={key} className="flex items-start gap-1">
                  <TrendingUp size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-accent capitalize">{key}</p>
                    <p className="text-xs text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View Case Study Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
            View Case Study
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

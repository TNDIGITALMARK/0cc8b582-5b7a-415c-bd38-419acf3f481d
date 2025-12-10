import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockShowcases } from '@/lib/mock-data';
import { ArrowLeft, TrendingUp, Calendar } from 'lucide-react';
import { format } from 'date-fns';

export default function ShowcaseDetailPage({ params }: { params: { id: string } }) {
  const showcase = mockShowcases.find(s => s.id === params.id);

  if (!showcase) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <Link href="/showcases" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Showcases</span>
        </Link>

        {/* Featured Image */}
        <div className="relative h-[500px] rounded-lg overflow-hidden mb-8 shadow-lg">
          {showcase.featured_image_url ? (
            <Image
              src={showcase.featured_image_url}
              alt={showcase.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
              No image available
            </div>
          )}
        </div>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            {showcase.industry && (
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {showcase.industry}
              </span>
            )}
            {showcase.campaign_type && (
              <span className="text-sm font-medium text-muted-foreground">
                {showcase.campaign_type}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {showcase.title}
          </h1>

          <p className="text-xl font-medium text-accent mb-6">
            {showcase.brand_name}
          </p>

          {showcase.published_at && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              <span>{format(new Date(showcase.published_at), 'MMMM d, yyyy')}</span>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {showcase.description}
          </p>
        </div>

        {/* Key Metrics */}
        {Object.keys(showcase.metrics).length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(showcase.metrics).map(([key, value]) => (
                <div key={key} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                  <TrendingUp size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground capitalize mb-1">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-2xl font-bold text-accent">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Summary */}
        {showcase.results_summary && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {showcase.results_summary}
            </p>
          </div>
        )}

        {/* Gallery */}
        {showcase.gallery_images.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {showcase.gallery_images.map((imageUrl, index) => (
                <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${showcase.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {showcase.tags.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-2">
              {showcase.tags.map((tag) => (
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

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-lg shadow-lg p-8 mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready for Similar Results?</h2>
          <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Let's create an exceptional showcase for your brand
          </p>
          <Link href="/submit" className="btn-primary inline-flex items-center gap-2">
            Submit Your Brand
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent to-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Professional Social Media Showcasing</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in text-balance">
            Elevate Your Brand with{' '}
            <span className="text-gradient">Stunning Showcases</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in text-balance leading-relaxed text-center">
            Transform your brand presence with professional content creation and strategic social media showcasing that drives real results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Link href="/submit" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Submit Your Brand
              <ArrowRight size={20} />
            </Link>
            <Link href="/showcases" className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
              View Showcases
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp size={24} />
                <span className="text-4xl font-bold">40%+</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Average Engagement Growth
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-accent">
                <Users size={24} />
                <span className="text-4xl font-bold">50+</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Brands Showcased
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={24} />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

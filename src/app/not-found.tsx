import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container max-w-2xl text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <Home size={20} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
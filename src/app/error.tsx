'use client'

export const dynamic = 'force-dynamic'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">500 - Server Error</h1>
        <p className="text-xl mb-4 text-center max-w-xl mx-auto">Something went wrong. Please try again later.</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
}
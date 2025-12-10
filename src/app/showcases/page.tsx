'use client';

import { useState } from 'react';
import ShowcaseCard from '@/components/ShowcaseCard';
import { mockShowcases } from '@/lib/mock-data';
import { Filter } from 'lucide-react';

export default function ShowcasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');

  const industries = ['all', ...Array.from(new Set(mockShowcases.map(s => s.industry).filter(Boolean)))];

  const filteredShowcases = selectedIndustry === 'all'
    ? mockShowcases
    : mockShowcases.filter(s => s.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Brand <span className="text-gradient">Showcases</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Explore our portfolio of successful brand showcases and see how we've helped businesses achieve remarkable results through professional content creation
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Filter size={20} />
              <span>Filter by Industry:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedIndustry === industry
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry === 'all' ? 'All Industries' : industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Showcases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShowcases.map((showcase) => (
            <ShowcaseCard key={showcase.id} showcase={showcase} />
          ))}
        </div>

        {/* Empty State */}
        {filteredShowcases.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No showcases found for this industry. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

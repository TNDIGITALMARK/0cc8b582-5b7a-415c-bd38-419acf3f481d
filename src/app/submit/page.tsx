'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Upload } from 'lucide-react';
import { statusTrackingStages } from '@/lib/mock-data';

export default function SubmitPage() {
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    mainBrandName: '',
    showcaseInstructions: '',
    contactEmail: '',
    contactName: '',
    contactPhone: '',
    timelinePreference: '2 weeks',
    budgetRange: '',
    socialPlatforms: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlatformToggle = (platform: string) => {
    setFormData({
      ...formData,
      socialPlatforms: formData.socialPlatforms.includes(platform)
        ? formData.socialPlatforms.filter(p => p !== platform)
        : [...formData.socialPlatforms, platform]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to Supabase
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
              Submission Received!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Thank you for submitting your brand. We'll review your information and get back to you within 24 hours.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                {statusTrackingStages.map((stage, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <span className="text-2xl flex-shrink-0">{stage.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground">{stage.stage}</p>
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => window.location.href = '/'} className="btn-primary">
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-center">
            Submit Your <span className="text-gradient">Brand</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            Tell us about your brand and how you'd like to be showcased. We'll create stunning content that elevates your presence.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    formStep >= step
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 transition-colors ${
                      formStep > step ? 'bg-accent' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Step {formStep} of 3
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Brand Information */}
          {formStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Brand Information</h2>

              <div>
                <label htmlFor="brandName" className="block text-sm font-medium text-foreground mb-2">
                  Brand Name / Concept Name *
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleInputChange}
                  placeholder="e.g., Brand Coffee Co"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="mainBrandName" className="block text-sm font-medium text-foreground mb-2">
                  Main Brand Name *
                </label>
                <input
                  type="text"
                  id="mainBrandName"
                  name="mainBrandName"
                  value={formData.mainBrandName}
                  onChange={handleInputChange}
                  placeholder="e.g., Artisan Roasters"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="showcaseInstructions" className="block text-sm font-medium text-foreground mb-2">
                  Showcase Instructions *
                </label>
                <textarea
                  id="showcaseInstructions"
                  name="showcaseInstructions"
                  value={formData.showcaseInstructions}
                  onChange={handleInputChange}
                  placeholder="Describe how you'd like your brand showcased (e.g., morning routine aesthetic, warm lighting, lifestyle shots)"
                  required
                  rows={6}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Be as detailed as possible about your vision, target aesthetic, and any specific requirements
                </p>
              </div>

              <button
                type="button"
                onClick={() => setFormStep(2)}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Continue to Contact Info
                <ArrowRight size={20} />
              </button>
            </div>
          )}

          {/* Step 2: Contact & Timeline */}
          {formStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact & Timeline</h2>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="timelinePreference" className="block text-sm font-medium text-foreground mb-2">
                  Timeline Preference
                </label>
                <select
                  id="timelinePreference"
                  name="timelinePreference"
                  value={formData.timelinePreference}
                  onChange={handleInputChange}
                  className="w-full"
                >
                  <option value="1 week">1 Week (Rush)</option>
                  <option value="2 weeks">2 Weeks (Standard)</option>
                  <option value="3 weeks">3 Weeks</option>
                  <option value="1 month">1 Month</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setFormStep(3)}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  Continue to Details
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project Details */}
          {formStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Details</h2>

              <div>
                <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full"
                >
                  <option value="">Select a range</option>
                  <option value="$500-$1,000">$500 - $1,000</option>
                  <option value="$1,000-$2,500">$1,000 - $2,500</option>
                  <option value="$2,500-$5,000">$2,500 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Target Social Platforms
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Instagram', 'Facebook', 'TikTok', 'Twitter', 'LinkedIn', 'Pinterest'].map((platform) => (
                    <label
                      key={platform}
                      className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.socialPlatforms.includes(platform)
                          ? 'border-accent bg-accent/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.socialPlatforms.includes(platform)}
                        onChange={() => handlePlatformToggle(platform)}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Upload size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Brand Assets</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      After submission, we'll send you a secure link to upload logos, brand guidelines, and product photos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormStep(2)}
                  className="btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                >
                  Submit Brand
                  <CheckCircle2 size={20} />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

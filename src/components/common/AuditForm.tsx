"use client";

import React, { useState } from "react";
import Button from "@/components/button/Button";

export const AuditForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    website: "",
    businessName: "",
    targetAudience: "",
    competitors: "",
    monthlyBudget: "",
    services: [] as string[],
    socialMediaLinks: "",
    auditGoals: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        console.log("Audit Request Sent:", data);
        alert("Success! We have received your audit request and will be in touch shortly.");
        // Reset form
        setFormData({
            name: "",
            email: "",
            whatsapp: "",
            website: "",
            businessName: "",
            targetAudience: "",
            competitors: "",
            monthlyBudget: "",
            services: [] as string[],
            socialMediaLinks: "",
            auditGoals: "",
          });
        if (onSuccess) onSuccess();
      } else {
        console.error("Error sending email:", data.error);
        alert("Something went wrong. Please try again later. " + (data.error?.message || ""));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-medium text-white">
            WhatsApp
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="+1 234 567 890"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="website" className="text-sm font-medium text-white">
            Website URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="website"
            name="website"
            required
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="https://example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="businessName" className="text-sm font-medium text-white">
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="Your Business Name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="monthlyBudget" className="text-sm font-medium text-white">
            Monthly Budget
          </label>
          <select
            id="monthlyBudget"
            name="monthlyBudget"
            value={formData.monthlyBudget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all [&>option]:text-black"
          >
            <option value="" disabled>Select Budget Range</option>
            <option value="<1k">Less than $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white block mb-2">
          Services of Interest
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {["SEO", "PPC / Ads", "Social Media", "Content Marketing", "Web Design", "Email Marketing"].map((service) => (
            <label key={service} className="flex items-center space-x-2 cursor-pointer group">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                formData.services.includes(service) 
                  ? "bg-yellow-500 border-yellow-500" 
                  : "border-white/30 group-hover:border-yellow-500/50"
              }`}>
                {formData.services.includes(service) && (
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="hidden"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
              />
              <span className="text-sm text-white/80 group-hover:text-white transition-colors">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="targetAudience" className="text-sm font-medium text-white">
            Target Audience
          </label>
          <input
            type="text"
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="e.g. Small Business Owners, Gen Z..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="competitors" className="text-sm font-medium text-white">
            Key Competitors
          </label>
          <input
            type="text"
            id="competitors"
            name="competitors"
            value={formData.competitors}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="Competitor A, Competitor B..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="socialMediaLinks" className="text-sm font-medium text-white">
          Social Media Links (comma separated)
        </label>
        <textarea
          id="socialMediaLinks"
          name="socialMediaLinks"
          rows={2}
          value={formData.socialMediaLinks}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all resize-none"
          placeholder="https://facebook.com/..., https://instagram.com/..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="auditGoals" className="text-sm font-medium text-white">
          What are your main goals for this audit? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="auditGoals"
          name="auditGoals"
          required
          rows={4}
          value={formData.auditGoals}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all resize-none"
          placeholder="e.g., Increase traffic, improve conversion rate, brand awareness..."
        />
      </div>

      <div className="pt-4">
        <Button
          label={loading ? "Requesting..." : "Request Free Audit"}
          loading={loading}
          className="w-full"
          variant="primary"
        />
      </div>
    </form>
  );
};

"use client";

import React, { useState } from "react";
import Button from "@/components/button/Button";

export const MeetingForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    linkedin: "",
    facebook: "",
    website: "",
    businessDetails: "",
    helpRequired: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        console.log("Email sent successfully:", data);
        alert("Thanks! We have received your request and will contact you shortly.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          linkedin: "",
          facebook: "",
          website: "",
          businessDetails: "",
          helpRequired: "",
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
            Website URL
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="https://example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="linkedin" className="text-sm font-medium text-white">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="https://linkedin.com/in/..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="facebook" className="text-sm font-medium text-white">
            Facebook Profile
          </label>
          <input
            type="url"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all"
            placeholder="https://facebook.com/..."
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="businessDetails" className="text-sm font-medium text-white">
          Business Details
        </label>
        <textarea
          id="businessDetails"
          name="businessDetails"
          rows={3}
          value={formData.businessDetails}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all resize-none"
          placeholder="Tell us about your business..."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="helpRequired" className="text-sm font-medium text-white">
          What help do you require? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="helpRequired"
          name="helpRequired"
          required
          rows={4}
          value={formData.helpRequired}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all resize-none"
          placeholder="Describe your needs..."
        />
      </div>

      <div className="pt-4">
        <Button
          label={loading ? "Sending..." : "Schedule Meeting"}
          loading={loading}
          className="w-full"
          variant="primary"
        />
      </div>
    </form>
  );
};

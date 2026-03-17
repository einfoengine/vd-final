"use client";
import { BreadcrumbHero } from "@/components/Module/hero/BreadcrumbHero";
import { contactInfo, formFields } from "@/data/contact";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="p-0">
        <BreadcrumbHero
          title="Have a Question or [Just Want to Chat?]"
          description="Drive sustainable growth with research based full-funnel digital marketing. We deliver research-backed strategy, compelling content, and seamless multi-channel execution."
          className="h-full"
        />
      </section>
      {/* Contact Form & Info */}
      <section id="contact">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="space-y-2">
                <h2 className="my-3">Let&apos;s Chat, Reach Out to Us</h2>
                <p>
                  Have questions or feedback? We&apos;re here to help. Send us a
                  message, and we&apos;ll respond within 24 hours.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="flex items-center flex-wrap gap-3 mt-8 ">
                {contactInfo.map((contact) => {
                  return (
                    <div
                      key={contact.id}
                      className="p-4 bg-bg rounded-xl flex items-center gap-4 w-full"
                    >
                      <div className="h-full">
                        <Image
                          src={contact.icon}
                          alt={contact.title}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <p className="mb-1">{contact.title}</p>
                        <h6>{contact.value}</h6>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Image Section */}
              <div className="relative flex flex-col items-center gap-4 w-full">
                <Image
                  src="/assets/team/founder.webp"
                  alt="Contact person"
                  width={1000}
                  height={1000}
                  className="w-full h-80 rounded-xl object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="w-full mt-3">
                  <h4 className="mb-2">Mohammad Al Maruf</h4>
                  <p>Founder of VibelyDigital</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full">
              <form className="bg-bg rounded-xl p-6 space-y-6">
                {formFields.map((field) => (
                  <div key={field.id} className={field.spacing}>
                    <label htmlFor={field.id} className="mb-0">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          id={field.id}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          className="w-full pr-10 border border-border-color rounded-lg"
                          required={field.required}
                        >
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        rows={field.rows || 5}
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

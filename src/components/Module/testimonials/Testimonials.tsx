"use client";

import { Testimonial, testimonialsData } from "@/data/testimonials";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface TestimonialsData {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}

interface TestimonialsProps extends Partial<TestimonialsData> {
  dataSource?: TestimonialsData;
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  dataSource,
  testimonials: propTestimonials,
  autoplay: propAutoplay,
  interval: propInterval,
  className = "",
}) => {
  // ✅ Pull data from prop or fallback to imported file
  const source = dataSource ?? testimonialsData;
  const testimonials = propTestimonials ?? source.testimonials;
  const autoplay = propAutoplay ?? source.autoplay ?? true;
  const interval = propInterval ?? source.interval ?? 6000;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    if (!autoplay || isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, testimonials.length, isPlaying]);

  if (testimonials.length === 0) return null;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setActiveVideo(null);
    setIsPlaying(false);
  };

  const handlePlayVideo = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(true);
  };

  const current = testimonials[currentIndex];
  const isVideo =
    current.mediaType === "video" ||
    (!current.mediaType && Boolean(current.videoUrl));

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6">
        {/* Video / Thumbnail */}
        <div className="relative rounded-3xl overflow-hidden lg:col-span-4 hidden lg:block">
          {isVideo ? (
            activeVideo === currentIndex ? (
              <div className="md:aspect-square aspect-video w-full">
                <iframe
                  src={`${current.videoUrl}?autoplay=1`}
                  title={`${current.name} testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-3xl"
                />
              </div>
            ) : (
              <div className="relative md:aspect-square aspect-video w-full">
                <Image
                  src={current.thumbnail}
                  alt={current.name}
                  fill
                  className="object-cover h-full rounded-3xl"
                />
                <button
                  onClick={() => handlePlayVideo(currentIndex)}
                  aria-label="Play video"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                >
                  <svg
                    width="92"
                    height="92"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="40"
                      fill="rgba(255,199,0,0.95)"
                    />
                    <path d="M32 26L56 40L32 54V26Z" fill="#111111" />
                  </svg>
                </button>
              </div>
            )
          ) : (
            <div className="relative md:aspect-square aspect-video w-full">
              <Image
                src={current.thumbnail}
                alt={current.name}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 md:p-10 text-neutral-200 lg:col-span-8">
          <div className="mb-6">
            <Image
              src="/assets/svg/quote.svg"
              alt="Quote"
              width={35}
              height={35}
            />
          </div>
          <p className="text-xl leading-8 text-neutral-100 mb-8 italic">
            “{current.quote}”
          </p>

          {/* Rating */}
          <div className="flex gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <svg
                key={i}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#FFC700"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>

          <div className="border-t border-white/10 my-6" />

          {/* Author */}
          <div className="">
            <h3 className="text-2xl font-semibold text-white">
              {current.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-yellow-400 font-medium">
                {current.position}
              </span>
              <span className="text-neutral-400">@{current.company}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-8 gap-6">
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="p-3 rounded-full bg-neutral-800 text-white border border-white/10 hover:bg-neutral-700 transition"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-yellow-400 scale-125"
                  : "bg-neutral-600 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="p-3 rounded-full bg-neutral-800 text-white border border-white/10 hover:bg-neutral-700 transition"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

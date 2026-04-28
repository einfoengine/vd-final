"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCard {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  metric?: string;
  metricLabel?: string;
}

const testimonials: TestimonialCard[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVision Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    quote: "Their team completely transformed our digital presence. Leads tripled in 90 days — we didn't expect results this fast.",
    rating: 5,
    metric: "3×",
    metricLabel: "Lead Growth",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Brands Co.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    quote: "The strategy was spot-on. Our conversion rate jumped 250% within the first quarter. Absolute game-changer.",
    rating: 5,
    metric: "250%",
    metricLabel: "Conversion Lift",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartupHub",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    quote: "From audit to execution — the entire process was seamless. Our platform launched on time and blew users away.",
    rating: 5,
    metric: "4.9★",
    metricLabel: "User Rating",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Head of Digital",
    company: "Enterprise Solutions",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    quote: "300% organic traffic growth in six months. Their SEO and content strategy is the real deal — not fluff.",
    rating: 5,
    metric: "300%",
    metricLabel: "Organic Traffic",
  },
  {
    id: 5,
    name: "Priya Kapoor",
    role: "CMO",
    company: "NovaBrand",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    quote: "We went from invisible to industry-recognized in under six months. The ROI has been insane — well worth every cent.",
    rating: 5,
    metric: "6×",
    metricLabel: "ROAS",
  },
  {
    id: 6,
    name: "James Okafor",
    role: "Co-Founder",
    company: "Launchify",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
    quote: "Not just a vendor — a true growth partner. They understood our goals and built a system that keeps delivering.",
    rating: 5,
    metric: "12mo",
    metricLabel: "Partnership",
  },
  {
    id: 7,
    name: "Lisa Park",
    role: "Director of Growth",
    company: "ScaleX",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    quote: "Our social media went from 2K to 80K followers organically. The content strategy they built is exceptional.",
    rating: 5,
    metric: "40×",
    metricLabel: "Follower Growth",
  },
  {
    id: 8,
    name: "Carlos Mendez",
    role: "VP Marketing",
    company: "Clearpath Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    quote: "They cut our cost per acquisition by 60% while doubling our volume. That's the kind of efficiency we were looking for.",
    rating: 5,
    metric: "−60%",
    metricLabel: "CPA Reduction",
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: TestimonialCard }) {
  return (
    <div className="relative flex-shrink-0 w-[340px] mx-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden group hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full -translate-y-8 translate-x-8 pointer-events-none" />

      {/* Top row: avatar + name + metric */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/10 flex-shrink-0">
            <Image src={t.avatar} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">{t.name}</p>
            <p className="text-xs text-white/50 leading-tight">{t.role} · {t.company}</p>
          </div>
        </div>
        {t.metric && (
          <div className="text-right flex-shrink-0">
            <p className="text-lg font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">{t.metric}</p>
            <p className="text-[10px] text-white/40 uppercase tracking-wider">{t.metricLabel}</p>
          </div>
        )}
      </div>

      {/* Quote */}
      <p className="text-sm text-white/75 leading-relaxed mb-4 italic">"{t.quote}"</p>

      {/* Rating */}
      <StarRating rating={t.rating} />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: TestimonialCard[]; reverse?: boolean }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export const TestimonialsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="py-20 overflow-hidden relative">
      {/* Section header */}
      <div ref={ref} className="container relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-desc/60 mb-3">
            Real clients. Real results.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Actually Say
            </span>
          </h2>
          <p className="text-lg text-desc/70 max-w-xl mx-auto">
            No cherry-picked quotes. These are the growth numbers and honest words from the founders and teams we work with.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          {[
            { val: "4.9/5", label: "Avg. Rating" },
            { val: "50+", label: "Happy Clients" },
            { val: "98%", label: "Retention Rate" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{stat.val}</span>
              <span className="text-sm text-desc/50 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Featured large quote */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="container mt-16 relative z-10"
      >
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-14 overflow-hidden">
          {/* bg glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-yellow-500/5 pointer-events-none" />
          <div className="absolute top-6 left-8 text-white/10">
            <Quote size={80} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-title leading-relaxed italic mb-8">
              "Vibely Digital didn't just run ads — they rebuilt how we think about growth. Within 8 months, we were generating 6× the revenue with the same budget."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-yellow-400/30 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face"
                  alt="Alex Rivera"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-title">Alex Rivera</p>
                <p className="text-sm text-desc/60">CEO, Momentum SaaS</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="ml-6 pl-6 border-l border-white/10">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">6×</p>
                <p className="text-xs text-desc/50 uppercase tracking-wider">Revenue Growth</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

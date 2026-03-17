"use client";

import Button from "@/components/button/Button";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface FunFactItem {
  count: number | string;
  label: string;
  desc: string;
}

interface FunFactProps {
  items: FunFactItem[];
  duration?: number; // duration for the counter animation in seconds
  className?: string;
}

// Individual counter item
function CounterItem({
  count,
  label,
  desc,
  duration,
  isInView,
}: {
  count: number | string;
  label: string;
  desc: string;
  duration: number;
  isInView: boolean;
}) {
  const [current, setCurrent] = useState<number | string>(0);

  useEffect(() => {
    if (!isInView) return;

    if (typeof count === "string") {
      // Defer setCurrent until after rendering to avoid synchronous state update in effect
      setTimeout(() => setCurrent(count), 0);
      return;
    }

    let startTime: number;
    let frame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easeOut * count));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, count, duration]);

  return (
    <div className="h-80 p-6 rounded-3xl bg-white flex flex-col justify-between">
      <p>{label}</p>

      <div>
        <hr className="border-body" />
        <motion.h2
          className="mb-2 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {typeof current === "number" ? current.toLocaleString() : current}
        </motion.h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function FunFact({
  items,
  duration = 2,
  className = "",
}: FunFactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // trigger slightly before fully in view

  return (
    <div>
      <div>
        <p className="mb-5 text-h4">
          At VibelyDigital, we envision empowering startups by offering a
          reliable platform to develop their strategies, paired with a dedicated
          team that handles content creation and digital marketing management.
          Our goal is to provide them with an experience that feels like having
          their very own in-house digital marketing team, ensuring seamless
          collaboration and growth.
        </p>
        <Button label="Get in Touch" href="#" />
      </div>
      <div
        ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-full ${className}`}
      >
        {items.map((item, index) => (
          <CounterItem
            key={index}
            count={item.count}
            label={item.label}
            desc={item.desc}
            duration={duration}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

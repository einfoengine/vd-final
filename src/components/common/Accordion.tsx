"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const AccordionItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure content height dynamically (to animate fixed height instead of "auto")
  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="w-full mb-3 bg-white border border-theme rounded-lg">
      {/* Header */}
      <button
        className="flex items-center justify-between w-full text-left cursor-pointer px-5 py-4"
        onClick={() => onToggle(index)}
      >
        <h6 className="text-[17px] font-medium">{question}</h6>

        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] },
          opacity: { duration: 0.3, ease: "easeOut" },
        }}
        className="overflow-hidden px-5"
      >
        <div ref={contentRef}>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -10,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-base text-desc pb-4 leading-relaxed"
          >
            {answer}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  defaultOpenIndex?: number;
  type?: "single" | "multiple";
  className?: string;
}

const Accordion = ({
  items,
  defaultOpenIndex = 0,
  type = "single",
  className = "",
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const handleToggle = (index: number) => {
    if (type === "single") {
      setOpenItems(openItems.includes(index) ? [] : [index]);
    } else {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          isOpen={openItems.includes(index)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;

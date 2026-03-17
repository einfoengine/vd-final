"use client";

import Button from "@/components/button/Button";
import Accordion from "@/components/common/Accordion";
import { ModuleTitle } from "@/components/common/ModuleTitle";
import { faqData } from "@/data/faq";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Faq: React.FC = () => {

  return (
    <motion.section
      className="space relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ModuleTitle
              title="Got Questions? We've Got Answers"
              subtitle="However, we recommend reaching out to us if you have any
              questions."
              variant="v2"
            />
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h6>Have a question about pricing?</h6>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Button href="" label="Book an Intro Call" />
                <Link
                  href="mailto:info@vibelydigital.com?subject=You%20got%20end%20email"
                  className="group flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@vibelydigital.com</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Accordion
              items={faqData}
              type="single"
              defaultOpenIndex={0}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;

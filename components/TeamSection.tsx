"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Data for the Team Members ---
// In a real application, this would likely come from a CMS or API.
// IMPORTANT: The `imageUrl` should point to images that already have the glowing effect.
const teamData = [
  {
    name: "Aain Ali",
    company: "Shark Retail",
    companyColor: "text-teal-400", // Using a specific color prop for flexibility
    titles: ["Senior Director"],
    imageUrl: "/images/team/3.png", // Using existing team image
    logoUrl: "/images/sharks-retail-logo.png", // Using existing company logo
    linkedinUrl: "https://www.linkedin.com/in/aainali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Zayn",
    company: "Shark Retail",
    companyColor: "text-teal-400",
    titles: ["Chief Executive Officer"],
    imageUrl: "/images/team/4.png", // Using existing team image
    logoUrl: "/images/sharks-retail-logo.png", // Using existing company logo
    linkedinUrl: "https://www.linkedin.com/in/muhammad-zayaan-b7b220259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Syed Sarmad",
    company: "Shark Retail",
    companyColor: "text-teal-400",
    titles: ["Chief Operating Officer"],
    imageUrl: "/images/team/5.png", // New team member image
    logoUrl: "/images/sharks-retail-logo.png", // Using existing company logo
    linkedinUrl: "",
  },
];

// --- Reusable LinkedIn Icon ---
const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-teal-400 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// --- Reusable Team Member Card Component ---
interface TeamMemberCardProps {
  name: string;
  company: string;
  companyColor: string;
  titles: string[];
  imageUrl: string;
  logoUrl: string;
  linkedinUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps & { index: number }> = ({ name, company, companyColor, titles, imageUrl, logoUrl, linkedinUrl, index }) => {
  return (
    <motion.div 
      className="group text-left flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false }}
    >
      {/* Image and Logo Container */}
      <motion.div 
        className={`relative mb-6 aspect-[3/4] overflow-hidden ${name === "Sarmad" ? "" : ""}`}
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        viewport={{ once: false }}
      >
        <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          width={500}
          height={667}
          className={`w-full h-full object-cover rounded-lg ${name === "Syed Sarmad" ? "object-top scale-105 -translate-y-8" : ""}`}
        />
        {/* Subtle gradient to ensure logo is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        {/* Company Logo */}
        <motion.div 
          className="absolute bottom-6 left-6 flex items-center h-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
          viewport={{ once: false }}
        >
          <Image
            src={logoUrl}
            alt={`${company} logo`}
            width={120}
            height={32}
            className="h-8 w-auto object-contain filter brightness-0 invert"
          />
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="px-1 flex flex-col flex-grow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        viewport={{ once: false }}
      >
        <div>
          <motion.h3 
            className="text-lg font-bold text-white uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
            viewport={{ once: false }}
          >
            {name}
          </motion.h3>
          <motion.p 
            className={`mt-2 font-semibold ${companyColor}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
            viewport={{ once: false }}
          >
            {company}
          </motion.p>
          <motion.div 
            className="text-gray-400 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
            viewport={{ once: false }}
          >
            {titles.map(title => <p key={title}>{title}</p>)}
          </motion.div>
          {linkedinUrl && (
            <motion.div 
              className="mt-3 flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.9 }}
              viewport={{ once: false }}
            >
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <LinkedInIcon />
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Team Section Component ---
const TeamSection: React.FC = () => {
  return (
    <section className="bg-black py-24 px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Meet Our Global Team
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Meet the experts driving our vision forward.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-start">
          {teamData.map((member, index) => (
            <TeamMemberCard key={member.name} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

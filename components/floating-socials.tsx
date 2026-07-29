"use client";

import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bibek-Gupta14",
    icon: (
      <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    baseClass: "bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-md shadow-purple-500/20 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-500/60",
    hoverClass: "hover:bg-purple-300 hover:text-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-125",
    glowColor: "bg-purple-500/40",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bibekgupta14/",
    icon: <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />,
    baseClass: "bg-[#0a51c2]/20 text-[#0a66c2] border-[#0A66C2]/50 shadow-md shadow-[#0A66C2]/20 dark:bg-[#0A66C2]/30 dark:text-sky-400 dark:border-sky-500/60",
    hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-sky-300 hover:shadow-xl hover:shadow-[#0A66C2]/70 hover:scale-125",
    glowColor: "bg-sky-500/40",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Bibek_Gupta",
    icon: (
      <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.17 6.023a.908.908 0 00-.16.292.89.89 0 00-.03.356c0 .1.02.2.06.292.04.09.1.171.18.24l2.87 2.872a.89.89 0 001.26 0l2.87-2.872.24-.18a.9.9 0 00.06-.292.89.89 0 00-.03-.356.908.908 0 00-.16-.292L9.006.438A1.374 1.374 0 008.045 0h5.438z" fill="#FFA116" />
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863 0-.713.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.848-.038.483-.535.452-1.373-.062-1.888l-2.697-2.607c-1.025-1.025-2.453-1.468-3.912-1.468s-2.887.443-3.912 1.468l-4.319 4.38c-1.025 1.025-1.503 2.453-1.503 3.912s.478 2.887 1.503 3.912l4.332 4.363c1.025 1.025 2.453 1.482 3.912 1.482s2.887-.457 3.912-1.482l2.697-2.607c.514-.515.545-1.353.062-1.888-.483-.535-1.334-.553-1.848-.038z" fill="#FFA116" />
        <path d="M10.974 13.91l6.197-6.197c.515-.515.515-1.35 0-1.865-.515-.515-1.35-.515-1.865 0l-6.197 6.197c-.515.515-.515 1.35 0 1.865.515.515 1.35.515 1.865 0z" fill="#FFFFFF" />
      </svg>
    ),
    baseClass: "bg-black text-[#FFA116] border-[#FFA116]/60 shadow-md shadow-[#FFA116]/30 dark:bg-black dark:text-[#FFA116] dark:border-[#FFA116]/60",
    hoverClass: "hover:bg-black hover:text-[#FFA116] hover:border-[#FFA116] hover:shadow-xl hover:shadow-[#FFA116]/80 hover:scale-125",
    glowColor: "bg-[#FFA116]/40",
  },
];

export function FloatingSocials() {
  return (
    <aside
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-4 items-center"
      aria-label="Social media links"
    >
      <div className="flex flex-col gap-3.5 p-2 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/70 shadow-2xl shadow-black/20">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${item.baseClass} ${item.hoverClass}`}
            aria-label={item.name}
          >
            {/* Permanent Subtle Glow */}
            <div className={`absolute inset-0 rounded-xl ${item.glowColor} blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

            {/* Icon */}
            <span className="relative z-10">{item.icon}</span>

            {/* Tooltip on left */}
            <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-card/95 text-foreground text-xs font-semibold whitespace-nowrap shadow-xl border border-border/80 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
  FileIcon,
  DiscordIcon,
  MediumIcon
} from "./icons";
import Image from "next/image";

const items = [
  { key: "github", href: site.socials.github, Icon: GitHubIcon },
  { key: "linkedin", href: site.socials.linkedin, Icon: LinkedInIcon },
  { key: "twitter", href: site.socials.twitter, Icon: TwitterIcon },
  { key: "medium", href: (site.socials as any).medium, Icon: MediumIcon },
  { key: "email", href: site.socials.email, Icon: MailIcon },
  { key: "resume", href: site.socials.resume, Icon: FileIcon },
  { key: "discord", href: (site.socials as any).discord, Icon: DiscordIcon },
];

const hoverCardsData: Record<string, {
  avatar: string;
  avatarClass?: string;
  pronouns?: string;
  handle: string;
  bio: string;
  stats?: string[];
  bannerText: string;
  bannerGradient: string;
}> = {
  github: {
    avatar: "/profile.jpg",
    handle: "@ParthBhuptani",
    bio: "Building full-stack applications, AI-powered tools, and contributing to open source through real-world projects.",
    stats: ["5+ Projects", "Open Source"],
    bannerText: "learn • build • ship",
    bannerGradient: "from-neutral-900 to-neutral-800",
  },
  linkedin: {
    avatar: "/social/linkedin.jpg",
    avatarClass: "scale-110 object-top",
    pronouns: "He/Him",
    handle: "in/parth-bhuptani",
    bio: "Building full-stack applications while continuously learning through real-world projects.",
    stats: ["Open for Work", "Gujarat, India"],
    bannerText: "network • build • grow",
    bannerGradient: "from-blue-900 to-blue-800",
  },
  twitter: {
    avatar: "/profile.jpg",
    handle: "@ParthBhuptani10",
    bio: "Sharing projects, portfolio updates, open-source contributions, hackathons, and my developer journey.",
    stats: ["Build in Public", "Open Source"],
    bannerText: "build • share • learn",
    bannerGradient: "from-zinc-900 to-slate-800",
  },
  medium: {
    avatar: "/social/medium.jpg",
    handle: "@parthbhuptani",
    bio: "Writing about full-stack development, AI, project building, and lessons learned along the way.",
    stats: ["Project Stories", "Technical Writing"],
    bannerText: "learn • write • share",
    bannerGradient: "from-neutral-800 to-zinc-950",
  },
  email: {
    avatar: "/social/linkedin.jpg",
    avatarClass: "scale-110 object-top",
    handle: "parthbhuptani10@gmail.com",
    bio: "Available for internships, collaborations, freelance work, and software engineering opportunities.",
    stats: ["Quick Response", "Let's Connect"],
    bannerText: "collab • connect • build",
    bannerGradient: "from-rose-900 to-orange-900",
  },
  // resume: {
  //   handle: "Curriculum Vitae",
  //   bio: "View academic records (SIH Hackathon Winner), key developer skills, and internship details.",
  //   stats: ["PDF Format", "1-Page Resume"],
  //   bannerText: "skills • experience • cv",
  //   bannerGradient: "from-teal-900 to-emerald-900",
  // },
  // discord: {
  //   handle: "parthbhuptani",
  //   bio: "Join my server or drop a DM to chat about web dev, coding challenges, or side projects.",
  //   stats: ["Developer Server", "Chat Active"],
  //   bannerText: "hangout • chat • code",
  //   bannerGradient: "from-indigo-950 to-purple-900",
  // },
};

export function Socials({ className = "" }: { className?: string }) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${className}`}>
      {items
        .filter((i) => i.href)
        .map(({ key, href, Icon }) => {
          const card = hoverCardsData[key];

          return (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border bg-surface/30 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface/50 hover:text-fg"
              >
                <Icon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110 text-muted-foreground group-hover:text-accent" />
                {/* <span>{label}</span> */}
              </a>

              <AnimatePresence>
                {hoveredKey === key && card && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 12 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-50 w-[260px] overflow-hidden rounded-2xl border bg-surface/95 shadow-2xl backdrop-blur-xl pointer-events-none select-none border-border/80"
                  >
                    {/* Banner header */}
                    <div className={`relative h-20 w-full overflow-hidden bg-gradient-to-r ${card.bannerGradient} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 bg-black/20 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/5">
                        {card.bannerText}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>

                    {/* Profile body details */}
                    <div className="relative px-4 pb-4 pt-1">
                      {/* Avatar */}
                      <div className="absolute -top-6 left-4 h-12 w-12 rounded-full border-2 border-white/10 bg-bg overflow-hidden shadow-md">
                        <Image
                          src={card.avatar}
                          alt={`${site.name} profile`}
                          fill
                          className={`w-full h-full object-cover transition-transform duration-300 ${card.avatarClass ?? ""}`}
                        />
                      </div>

                      <div className="mt-7">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-foreground">
                            {site.name}
                          </span>
                          <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          {card.pronouns && (
                            <span className="text-[9px] font-mono text-muted-foreground bg-surface/50 border rounded-md px-1.5 py-0.2">
                              {card.pronouns}
                            </span>
                          )}
                        </div>

                        <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                          {card.handle}
                        </p>

                        <p className="text-[10px] text-muted leading-relaxed mt-2.5">
                          {card.bio}
                        </p>

                        {card.stats && (
                          <div className="mt-3 flex gap-3 border-t border-border/40 pt-2 text-[9px] font-mono text-faint">
                            {card.stats.map((s, idx) => (
                              <span key={idx} className="flex items-center gap-1">
                                <span className="h-1 w-1 rounded-full bg-accent/40" />
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
    </div>
  );
}

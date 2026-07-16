"use client";

import { useState } from "react";
import { site } from "@/config/site";
import { ProjectCard } from "@/components/projects";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

type FilterType = "All" | string;

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterType>("All");
  const categories = [
    "All",
    ...Array.from(
      new Set(site.projects.flatMap((p) => p.categories ?? []))
    ),
  ];

  const filteredProjects = site.projects.filter((p) => {
    // text query match
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.blurb.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((tech) => tech.toLowerCase().includes(query.toLowerCase()));

    // category filter match
    if (filter !== "All") {
      return matchesQuery && p.categories?.includes(filter);
    }
    return matchesQuery;
  });

  // const countAll = site.projects.length;
  // const countFullstack = site.projects.filter(p => p.categories?.includes("Fullstack")).length;
  // const countFrontend = site.projects.filter(p => p.categories?.includes("Frontend")).length;
  // const countBackend = site.projects.filter(p => p.categories?.includes("Backend")).length;

  return (
    <div className="mx-auto w-full max-w-content px-6 py-24 sm:py-32">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-fg transition-colors"
        >
          <ArrowLeft size={16} /> back to home
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          projects archive
        </h1>
        <p className="mt-3 text-muted leading-relaxed">
          A list of things I&apos;ve built, experiments I&apos;ve designed, and applications I&apos;m currently forging.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-10 space-y-5">
        {/* Search input */}
        <div className="relative w-full sm:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, technology..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border bg-surface/30 px-9 py-2 text-sm placeholder:text-muted-foreground outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all text-foreground"
          />
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap items-center gap-6 border-b border-border pb-2">
          {/* <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-1.5 text-xs font-medium font-mono transition-all cursor-pointer ${filter === "all"
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
              }`}
          >
            all ({countAll})
          </button> */}
          {categories.map((category) => {
            const count =
              category === "All"
                ? site.projects.length
                : site.projects.filter((p) =>
                  p.categories?.includes(category)
                ).length;

            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative pb-2 text-sm font-medium transition-colors duration-200 ${filter === category
                  ? "text-accent"
                  : "text-muted hover:text-fg"
                  }`}
              >
                <>
                  {category} ({count})

                  {filter === category && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-accent" />
                  )}
                </>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid List */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No projects found matching the filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      )}
    </div>
  );
}

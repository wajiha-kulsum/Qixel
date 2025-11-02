"use client";

import { useMemo, useState } from "react";
import { ComponentGrid } from "@/components/site/component-grid";
import { registry } from "@/lib/registry";

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(registry.map((i) => i.category)));
    return ["all", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const byCategory = category === "all" ? registry : registry.filter((i) => i.category === category);
    if (!query.trim()) return byCategory;
    const q = query.toLowerCase();
    return byCategory.filter((i) =>
      i.name.toLowerCase().includes(q) ||
      i.slug.toLowerCase().includes(q) ||
      (i.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Animated Components</h1>
        <p className="text-gray-600 mt-2">Explore, preview, and copy-paste.</p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1 rounded border text-sm ${category === c ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-800"}`}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search components..."
            className="w-full sm:w-64 border rounded px-3 py-2"
          />
        </div>

        <div className="mt-8">
          <ComponentGrid items={filtered} />
        </div>
      </div>
    </div>
  );
}



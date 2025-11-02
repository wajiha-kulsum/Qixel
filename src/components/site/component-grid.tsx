import Link from "next/link";
import { type RegistryItem } from "@/lib/types";

export function ComponentGrid({ items }: { items: RegistryItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/components/${item.slug}`}
          className="block border rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
        >
          <div className="text-sm uppercase text-gray-500">{item.category}</div>
          <div className="mt-1 text-lg font-semibold">{item.name}</div>
          {item.description ? (
            <div className="mt-2 text-gray-600 text-sm line-clamp-2">{item.description}</div>
          ) : null}
        </Link>
      ))}
    </div>
  );
}



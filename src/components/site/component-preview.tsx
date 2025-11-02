"use client";

export function ComponentPreview({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="border rounded-lg bg-gray-50">
      <div className="p-4 border-b">
        <h3 className="text-xl font-bold">{title}</h3>
        {description ? (
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        ) : null}
      </div>
      <div className="p-8 flex items-center justify-center min-h-[200px]">
        {children}
      </div>
    </div>
  );
}
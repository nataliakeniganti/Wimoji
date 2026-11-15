import React, { useState, useEffect, useRef } from 'react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import { IconCard } from './IconCard';
import { SearchX, ChevronDown } from 'lucide-react';

interface IconGridProps {
  icons: WimojiIconDef[];
  options: WimojiStyleOptions;
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  onInspect: (icon: WimojiIconDef) => void;
  onClearFilters?: () => void;
}

const BATCH_SIZE = 60;

export const IconGrid: React.FC<IconGridProps> = ({
  icons,
  options,
  selectedIds,
  onToggleSelect,
  onInspect,
  onClearFilters,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  // Reset visible count when icon list changes (e.g. category switch or search query change)
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [icons]);

  // Seamless intersection observer for automatic infinite scroll
  useEffect(() => {
    if (!observerTarget.current || visibleCount >= icons.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, icons.length));
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [visibleCount, icons.length]);

  if (icons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-500 mb-3">
          <SearchX className="h-6 w-6" />
        </div>
        <h3 className="text-sm font-semibold text-neutral-200">No matching Wimojis found</h3>
        <p className="mt-1 text-xs text-neutral-500 max-w-sm">
          Try searching for different keywords, category names, or Unicode code points like "volleyball", "tent", or "U+1F3D0".
        </p>
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="mt-4 rounded-lg bg-neutral-800 px-3.5 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-700 transition-colors"
          >
            Clear Search & Filters
          </button>
        )}
      </div>
    );
  }

  const displayedIcons = icons.slice(0, visibleCount);
  const hasMore = visibleCount < icons.length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {displayedIcons.map((icon) => (
          <IconCard
            key={icon.id}
            icon={icon}
            options={options}
            isSelected={selectedIds.has(icon.id)}
            onToggleSelect={onToggleSelect}
            onInspect={onInspect}
          />
        ))}
      </div>

      {/* Sentinel & Load More bar */}
      {hasMore && (
        <div ref={observerTarget} className="flex flex-col items-center justify-center pt-4 pb-8 gap-3">
          <button
            onClick={() => setVisibleCount(icons.length)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-neutral-800 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all shadow-sm"
          >
            <span>Showing {displayedIcons.length} of {icons.length} — Load All Icons</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Download } from 'lucide-react';

export type AppTab = 'home' | 'library' | 'picker' | 'skintones' | 'playground' | 'docs' | 'changelog';

interface HeaderProps {
  onOpenBulkExport: () => void;
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBulkExport,
  activeTab,
  setActiveTab,
}) => {
  const navItems: { id: AppTab; label: string; hideOnSmall?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'library', label: 'Icon Grid' },
    { id: 'picker', label: 'Emoji Picker' },
    { id: 'skintones', label: 'Skin Tones' },
    { id: 'playground', label: 'Playground' },
    { id: 'docs', label: 'Specs', hideOnSmall: true },
    { id: 'changelog', label: 'Changelog', hideOnSmall: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark, single element */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-left focus-visible:outline-none whitespace-nowrap shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-base">
            W
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Wimoji
          </span>
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium text-neutral-400 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`${
                item.hideOnSmall ? 'hidden md:inline-block' : 'inline-block'
              } whitespace-nowrap shrink-0 transition-colors hover:text-white ${
                activeTab === item.id
                  ? 'text-white underline decoration-amber-500 decoration-2 underline-offset-8'
                  : 'text-neutral-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onOpenBulkExport}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Bulk Download ZIP</span>
          </button>
        </div>
      </div>
    </header>
  );
};

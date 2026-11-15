import React, { useState, useMemo, useCallback, useDeferredValue } from 'react';
import { ALL_WIMOJI_ICONS, ICONS_BY_ID, ICONS_BY_CHAR } from './data/wimojiIcons';
import { matchesEmojibaseQuery } from './utils/emojibaseMetadata';
import { CATEGORIES, DEFAULT_STYLE_OPTIONS } from './data/constants';
import { WimojiStyleOptions, WimojiCategory, WimojiIconDef } from './types/wimoji';
import { Header, AppTab } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { IconGrid } from './components/IconGrid';
import { BatchActionBar } from './components/BatchActionBar';
import { IconInspectorModal } from './components/IconInspectorModal';
import { BulkExportModal } from './components/BulkExportModal';
import { PlaygroundModal } from './components/PlaygroundModal';
import { PlaygroundView } from './components/PlaygroundView';
import { DocsView } from './components/DocsView';
import { ChangelogView } from './components/ChangelogView';
import { SkinTonesView } from './components/SkinTonesView';
import { HomeView } from './components/HomeView';
import { EmojiPickerView } from './components/EmojiPickerView';

export default function App() {
  const [options, setOptions] = useState<WimojiStyleOptions>(DEFAULT_STYLE_OPTIONS);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<WimojiCategory>('all');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [inspectedIcon, setInspectedIcon] = useState<WimojiIconDef | null>(null);
  const [isBulkExportOpen, setIsBulkExportOpen] = useState<boolean>(false);
  const [isPlaygroundOpen, setIsPlaygroundOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<AppTab>('home');

  // Deferred values keep user typing and sliders 100% fluid without dropping frames
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const deferredOptions = useDeferredValue(options);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<WimojiCategory, number> = {
      all: ALL_WIMOJI_ICONS.length,
      'smileys-emotion': 0,
      'people-body': 0,
      component: 0,
      'animals-nature': 0,
      'food-drink': 0,
      'travel-places': 0,
      activities: 0,
      objects: 0,
      symbols: 0,
      flags: 0,
    };

    for (const icon of ALL_WIMOJI_ICONS) {
      const cat = icon.category as WimojiCategory;
      if (counts[cat] !== undefined) {
        counts[cat]++;
      }
    }
    return counts;
  }, []);

  // Filter icons by category and search query using deferred search
  const filteredIcons = useMemo(() => {
    const q = deferredSearchQuery.toLowerCase().trim();
    const qNorm = q.replace(/[\uFE0E\uFE0F]/g, '');

    return ALL_WIMOJI_ICONS.filter((icon) => {
      // Category match
      if (selectedCategory !== 'all' && icon.category !== selectedCategory) {
        return false;
      }

      // Query match
      if (!q) return true;

      const charNorm = icon.char.replace(/[\uFE0E\uFE0F]/g, '');
      if (charNorm === qNorm || icon.char === q) return true;
      if (icon.name.toLowerCase().includes(q)) return true;
      if (icon.unicodeHex.toLowerCase().includes(q)) return true;
      if (
        icon.tags.some(
          (tag) =>
            tag.toLowerCase().includes(q) ||
            tag.replace(/[\uFE0E\uFE0F]/g, '').toLowerCase() === qNorm
        )
      ) {
        return true;
      }
      if (matchesEmojibaseQuery(icon, q, qNorm)) return true;

      return false;
    });
  }, [deferredSearchQuery, selectedCategory]);

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);
  const activeCategoryName = activeCategoryInfo ? activeCategoryInfo.label : 'All Wimojis';

  // Memoized stable callback for toggling selection (prevents re-rendering untouched icon cards)
  const handleToggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  // Memoized stable inspect handler
  const handleInspect = useCallback((icon: WimojiIconDef) => {
    setInspectedIcon(icon);
  }, []);

  // Toggle all currently visible icons
  const allVisibleSelected = useMemo(() => {
    return filteredIcons.length > 0 && filteredIcons.every((icon) => selectedIds.has(icon.id));
  }, [filteredIcons, selectedIds]);

  const handleSelectAllVisible = useCallback(() => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allVisibleSelected) {
        for (const icon of filteredIcons) {
          next.delete(icon.id);
        }
      } else {
        for (const icon of filteredIcons) {
          next.add(icon.id);
        }
      }
      return next;
    });
  }, [allVisibleSelected, filteredIcons]);

  const handleClearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const selectedIconsList = useMemo(() => {
    return Array.from(selectedIds)
      .map((id) => ICONS_BY_ID.get(id))
      .filter((icon): icon is WimojiIconDef => icon !== undefined);
  }, [selectedIds]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Header */}
      <Header
        onOpenBulkExport={() => setIsBulkExportOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'home' ? (
        <HomeView
          allIcons={ALL_WIMOJI_ICONS}
          iconsByChar={ICONS_BY_CHAR}
          categoryCounts={categoryCounts}
          options={options}
          setOptions={setOptions}
          onNavigateTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onExploreCategory={(cat) => {
            setSelectedCategory(cat);
            setSearchQuery('');
            setActiveTab('library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSearchLibrary={(query) => {
            setSearchQuery(query);
            setSelectedCategory('all');
            setActiveTab('library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onInspectIcon={(icon) => setInspectedIcon(icon)}
          onOpenBulkExport={() => setIsBulkExportOpen(true)}
          onOpenPlaygroundModal={() => setIsPlaygroundOpen(true)}
        />
      ) : activeTab === 'picker' ? (
        <EmojiPickerView
          allIcons={ALL_WIMOJI_ICONS}
          iconsByChar={ICONS_BY_CHAR}
          options={options}
          setOptions={setOptions}
          onInspectIcon={(icon) => setInspectedIcon(icon)}
        />
      ) : activeTab === 'docs' ? (
        <DocsView />
      ) : activeTab === 'skintones' ? (
        <SkinTonesView
          allIcons={ALL_WIMOJI_ICONS}
          options={options}
          setOptions={setOptions}
          onInspectIcon={(icon) => setInspectedIcon(icon)}
        />
      ) : activeTab === 'changelog' ? (
        <ChangelogView
          options={options}
          onInspectIcon={(icon) => setInspectedIcon(icon)}
          onNavigateToIcon={(char) => {
            setSearchQuery(char);
            setActiveTab('library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeTab === 'playground' ? (
        <PlaygroundView options={options} setOptions={setOptions} />
      ) : (
        <main className="flex-1 flex flex-col">
          {/* Hero Branding & Description (Clean, anti-slop, no code comments) */}
          <div className="border-b border-neutral-900 bg-gradient-to-b from-neutral-900/30 to-transparent py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                    Wimoji Vector Emoji Library
                  </h1>
                  <p className="mt-1 text-sm text-neutral-400 max-w-2xl text-balance">
                    An open vendor collection of {ALL_WIMOJI_ICONS.length} handcrafted vector emojis
                    with customizable multi-style exports, real-time palettes, and bulk ZIP
                    packaging.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-400 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>32×32 Grid</span>
                  </div>
                  <span aria-hidden="true" className="text-neutral-700">·</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span>4 Style Modes</span>
                  </div>
                  <span aria-hidden="true" className="text-neutral-700">·</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>Instant ZIP Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Customization Toolbar & Category Tabs */}
          <Toolbar
            options={options}
            setOptions={setOptions}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />

          {/* Main Grid Content Area */}
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
            {/* Grid Header Info */}
            <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-200">{activeCategoryName}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">
                  Showing {filteredIcons.length} of {ALL_WIMOJI_ICONS.length} icons
                </span>
                {searchQuery && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-400">Matching "{searchQuery}"</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleSelectAllVisible}
                  className="hover:text-white transition-colors"
                >
                  {allVisibleSelected ? 'Deselect all visible' : 'Select all visible'}
                </button>
              </div>
            </div>

            {/* Icon Grid */}
            <IconGrid
              icons={filteredIcons}
              options={deferredOptions}
              selectedIds={selectedIds}
              onToggleSelect={handleToggleSelect}
              onInspect={handleInspect}
              onClearFilters={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            />
          </div>
        </main>
      )}

      {/* Floating Batch Selection Bar */}
      <BatchActionBar
        selectedIcons={selectedIconsList}
        totalVisibleCount={filteredIcons.length}
        options={options}
        onClearSelection={handleClearSelection}
        onSelectAllVisible={handleSelectAllVisible}
        allVisibleSelected={allVisibleSelected}
      />

      {/* Detailed Icon Inspector Modal */}
      <IconInspectorModal
        icon={inspectedIcon}
        options={
          inspectedIcon?.fixedSkinTone && inspectedIcon.fixedSkinTone !== 'default'
            ? { ...options, style: 'color' }
            : options
        }
        onClose={() => setInspectedIcon(null)}
        onSelectRelated={(related) => setInspectedIcon(related)}
        allIcons={ALL_WIMOJI_ICONS}
      />

      {/* Bulk ZIP Export Modal */}
      <BulkExportModal
        isOpen={isBulkExportOpen}
        onClose={() => setIsBulkExportOpen(false)}
        allIcons={ALL_WIMOJI_ICONS}
        selectedIcons={selectedIconsList}
        activeCategoryIcons={filteredIcons}
        categoryName={activeCategoryName}
        options={options}
      />

      {/* UI Playground Modal */}
      <PlaygroundModal
        isOpen={isPlaygroundOpen}
        onClose={() => setIsPlaygroundOpen(false)}
        iconsById={ICONS_BY_ID}
        options={options}
        onSwitchToFullStudio={() => setActiveTab('playground')}
      />

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-8 text-xs text-neutral-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-300">Wimoji</span>
            <span aria-hidden="true">·</span>
            <span>Open Vector Emoji Library</span>
            <span aria-hidden="true">·</span>
            <span>All {ALL_WIMOJI_ICONS.length} SVGs Included</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveTab('library');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Icon Grid
            </button>
            <button
              onClick={() => {
                setActiveTab('picker');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Emoji Picker
            </button>
            <button
              onClick={() => {
                setActiveTab('skintones');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Skin Tones
            </button>
            <button
              onClick={() => {
                setActiveTab('changelog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Changelog
            </button>
            <button
              onClick={() => {
                setActiveTab('docs');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-neutral-300 transition-colors"
            >
              Developer Specs
            </button>
            <button
              onClick={() => setIsBulkExportOpen(true)}
              className="hover:text-neutral-300 transition-colors"
            >
              Download Full Set (ZIP)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

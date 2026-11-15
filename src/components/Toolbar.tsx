import React, { useState } from 'react';
import { Search, Sliders, RotateCcw, Palette, Layers, Box, Check, ChevronDown } from 'lucide-react';
import { WimojiStyleOptions, WimojiCategory, WimojiStyle, WimojiBadgeShape } from '../types/wimoji';
import { CATEGORIES, PALETTE_PRESETS, DEFAULT_STYLE_OPTIONS } from '../data/constants';

interface ToolbarProps {
  options: WimojiStyleOptions;
  setOptions: React.Dispatch<React.SetStateAction<WimojiStyleOptions>>;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: WimojiCategory;
  setSelectedCategory: (cat: WimojiCategory) => void;
  categoryCounts: Record<WimojiCategory, number>;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  options,
  setOptions,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categoryCounts,
}) => {
  const [showColorDrawer, setShowColorDrawer] = useState(false);

  const styleModes: { id: WimojiStyle; label: string }[] = [
    { id: 'color', label: 'Vibrant Color' },
    { id: 'duotone', label: 'Duotone' },
    { id: 'outline', label: 'Outline' },
    { id: 'silhouette', label: 'Silhouette' },
  ];

  const badgeShapes: { id: WimojiBadgeShape; label: string }[] = [
    { id: 'none', label: 'None' },
    { id: 'squircle', label: 'Squircle' },
    { id: 'circle', label: 'Circle' },
    { id: 'square', label: 'Square' },
  ];

  const applyPalette = (pId: string) => {
    const found = PALETTE_PRESETS.find((p) => p.id === pId);
    if (!found) return;
    setOptions((prev) => ({
      ...prev,
      primaryColor: found.primary,
      secondaryColor: found.secondary,
      accentColor: found.accent,
      strokeColor: found.stroke,
      badgeBg: found.badgeBg,
    }));
  };

  const handleReset = () => {
    setOptions(DEFAULT_STYLE_OPTIONS);
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="w-full border-b border-neutral-800 bg-neutral-900/60 pb-4 pt-5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Top Control Row: Search + Style Modes + Customizer Toggle */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${categoryCounts.all} emojis (e.g. heart, :fire:, :), U+2600)...`}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/90 py-2 pl-10 pr-4 text-xs text-neutral-100 placeholder-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Style Mode Selector (Segmented control) */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-lg bg-neutral-950 p-1 border border-neutral-800">
              {styleModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setOptions((prev) => ({ ...prev, style: mode.id }))}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                    options.style === mode.id
                      ? 'bg-neutral-800 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            {/* Customizer Drawer Trigger */}
            <button
              onClick={() => setShowColorDrawer(!showColorDrawer)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                showColorDrawer
                  ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                  : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <Palette className="h-3.5 w-3.5" />
              <span>Palette & Badge</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${showColorDrawer ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              title="Reset all settings to default"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Expandable Palette & Fine-Tuning Drawer */}
        {showColorDrawer && (
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-4 shadow-lg animate-in fade-in duration-150">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Presets */}
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2">
                  Color Presets
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {PALETTE_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => applyPalette(p.id)}
                      className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-xs text-neutral-300 hover:border-neutral-700 hover:text-white text-left transition-colors"
                    >
                      <div className="flex -space-x-1">
                        <span
                          className="h-3 w-3 rounded-full border border-neutral-900"
                          style={{ backgroundColor: p.primary }}
                        />
                        <span
                          className="h-3 w-3 rounded-full border border-neutral-900"
                          style={{ backgroundColor: p.secondary }}
                        />
                      </div>
                      <span className="truncate">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Color Pickers */}
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2">
                  Custom Colors
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-1.5">
                    <input
                      type="color"
                      value={options.primaryColor}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, primaryColor: e.target.value }))
                      }
                      className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <div className="text-[11px] leading-tight">
                      <p className="text-neutral-400">Primary</p>
                      <p className="font-mono text-neutral-200">{options.primaryColor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-1.5">
                    <input
                      type="color"
                      value={options.secondaryColor}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, secondaryColor: e.target.value }))
                      }
                      className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <div className="text-[11px] leading-tight">
                      <p className="text-neutral-400">Secondary</p>
                      <p className="font-mono text-neutral-200">{options.secondaryColor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-1.5">
                    <input
                      type="color"
                      value={options.accentColor}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, accentColor: e.target.value }))
                      }
                      className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <div className="text-[11px] leading-tight">
                      <p className="text-neutral-400">Accent</p>
                      <p className="font-mono text-neutral-200">{options.accentColor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-1.5">
                    <input
                      type="color"
                      value={options.strokeColor}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, strokeColor: e.target.value }))
                      }
                      className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <div className="text-[11px] leading-tight">
                      <p className="text-neutral-400">Stroke</p>
                      <p className="font-mono text-neutral-200">{options.strokeColor}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge Shape & Frame */}
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-2">
                  Background Frame
                </label>
                <div className="grid grid-cols-2 gap-1.5 mb-2">
                  {badgeShapes.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setOptions((prev) => ({ ...prev, badgeShape: b.id }))}
                      className={`rounded-md px-2.5 py-1.5 text-xs font-medium border text-center transition-colors ${
                        options.badgeShape === b.id
                          ? 'border-amber-500/50 bg-amber-500/10 text-amber-300'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
                {options.badgeShape !== 'none' && (
                  <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-1.5">
                    <input
                      type="color"
                      value={options.badgeBg}
                      onChange={(e) =>
                        setOptions((prev) => ({ ...prev, badgeBg: e.target.value }))
                      }
                      className="h-5 w-5 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <span className="text-[11px] text-neutral-400">Badge Fill Color</span>
                  </div>
                )}
              </div>

              {/* Stroke & Grid Size Sliders */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-neutral-400 mb-1">
                    <span>Stroke Width</span>
                    <span className="font-mono tabular-nums">{options.strokeWidth}px</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="3"
                    step="0.5"
                    value={options.strokeWidth}
                    onChange={(e) =>
                      setOptions((prev) => ({ ...prev, strokeWidth: parseFloat(e.target.value) }))
                    }
                    className="w-full accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-neutral-400 mb-1">
                    <span>Preview Size</span>
                    <span className="font-mono tabular-nums">{options.size}px</span>
                  </div>
                  <input
                    type="range"
                    min="24"
                    max="48"
                    step="4"
                    value={options.size}
                    onChange={(e) =>
                      setOptions((prev) => ({ ...prev, size: parseInt(e.target.value, 10) }))
                    }
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Tabs Bar */}
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                    : 'bg-neutral-900/80 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 border border-neutral-800/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono tabular-nums ${
                    isSelected ? 'text-neutral-900/80' : 'text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

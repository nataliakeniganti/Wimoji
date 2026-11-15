import React, { useState } from 'react';
import { X, Play, Bell, MessageSquare, Compass, Settings, Maximize2 } from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';

interface PlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
  iconsById: Map<string, WimojiIconDef>;
  options: WimojiStyleOptions;
  onSwitchToFullStudio?: () => void;
}

export const PlaygroundModal: React.FC<PlaygroundModalProps> = ({
  isOpen,
  onClose,
  iconsById,
  options,
  onSwitchToFullStudio,
}) => {
  if (!isOpen) return null;

  const renderIcon = (id: string, size = 20) => {
    const icon = iconsById.get(id);
    if (!icon) return null;
    return (
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        dangerouslySetInnerHTML={{ __html: icon.renderContent(options) }}
        className="shrink-0"
      />
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-neutral-950/80 animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div>
            <h2 className="text-base font-bold text-white">Wimoji UI Playground</h2>
            <p className="text-xs text-neutral-400">
              Preview your currently customized vector emojis in realistic product environments
            </p>
          </div>
          <div className="flex items-center gap-2">
            {onSwitchToFullStudio && (
              <button
                onClick={() => {
                  onClose();
                  onSwitchToFullStudio();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Open in full screen studio"
              >
                <Maximize2 className="h-3.5 w-3.5" />
                <span>Full Studio</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Playground Content Grid */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Mockup 1: Mobile App Navigation & Status Bar */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              1. Mobile App Bottom Navigation & Header
            </span>

            <div className="max-w-md mx-auto rounded-2xl border border-neutral-800 bg-neutral-950 p-4 space-y-4 shadow-md">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-2">
                  {renderIcon('hot-beverage', 22)}
                  <span className="text-xs font-bold text-white">Morning Brew</span>
                </div>
                <div className="flex items-center gap-2">
                  {renderIcon('sun', 20)}
                  <span className="text-xs text-neutral-300 font-mono">24°C</span>
                  {renderIcon('alarm-clock', 20)}
                </div>
              </div>

              {/* Card Feed item */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-3 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                  {renderIcon('checkmark-button', 24)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-white">Daily Workout Logged</h4>
                    <span className="text-[10px] text-neutral-500 font-mono">08:30 AM</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">
                    Morning routine complete with 5km run. Great pace!
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1">
                      {renderIcon('stopwatch', 16)} 24m 12s
                    </span>
                    <span className="flex items-center gap-1">
                      {renderIcon('high-voltage', 16)} 320 kcal
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Bar */}
              <div className="flex items-center justify-around border-t border-neutral-900 pt-3">
                <button className="flex flex-col items-center gap-1 text-[10px] text-amber-400 font-medium">
                  {renderIcon('compass', 20)}
                  <span>Explore</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-[10px] text-neutral-500 hover:text-white">
                  {renderIcon('envelope', 20)}
                  <span>Inbox</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-[10px] text-neutral-500 hover:text-white">
                  {renderIcon('heart-suit', 20)}
                  <span>Favorites</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-[10px] text-neutral-500 hover:text-white">
                  {renderIcon('gear', 20)}
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mockup 2: Mini Audio & Media Controller */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              2. Media & Audio Player
            </span>

            <div className="max-w-md mx-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                  {renderIcon('comet', 24)}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Cosmic Drift</h4>
                  <p className="text-[11px] text-neutral-400">Ambient Synthesizer · Wimoji Sound</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-1 text-neutral-400 hover:text-white">
                  {renderIcon('track-previous', 18)}
                </button>
                <button className="p-1.5 rounded-full bg-amber-500 text-neutral-950 font-bold hover:bg-amber-400">
                  {renderIcon('play-pause', 20)}
                </button>
                <button className="p-1 text-neutral-400 hover:text-white">
                  {renderIcon('track-next', 18)}
                </button>
              </div>
            </div>
          </div>

          {/* Mockup 3: Chat & Reaction Bubbles */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              3. Collaborative Messages & Reactions
            </span>

            <div className="max-w-lg mx-auto space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xs text-neutral-300">
                  AS
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">Alex S.</span>
                    <span className="text-[10px] text-neutral-500">10:42 AM</span>
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-neutral-900 border border-neutral-800 p-3 text-xs text-neutral-200">
                    <p>
                      Hey team! Just pushed the release candidate with all the updated vector emojis.
                      Flight to Munich leaves tonight {renderIcon('airplane', 16)}!
                    </p>
                  </div>
                  {/* Reaction bar */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-0.5 text-[11px] text-neutral-300">
                      {renderIcon('raised-fist', 14)} <span>4</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-0.5 text-[11px] text-neutral-300">
                      {renderIcon('high-voltage', 14)} <span>8</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-0.5 text-[11px] text-neutral-300">
                      {renderIcon('smiling-face', 14)} <span>2</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup 4: Sports Matchday & Outdoor Hub */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 space-y-4">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
              4. Sports Arena & Outdoor Adventure
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                    {renderIcon('volleyball', 22)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">Live 2nd Set</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Championship Finals</h4>
                  <p className="text-[11px] text-neutral-400">Grand Colosseum {renderIcon('stadium', 14)}</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-900 text-xs font-mono font-bold text-neutral-200">
                  <span>Pacifica 21</span>
                  <span>19 Sierra</span>
                </div>
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                    {renderIcon('snow-capped-mountain', 22)}
                  </div>
                  <span className="text-[11px] font-mono text-amber-400">-4°C Clear</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Whitney Alpine Route</h4>
                  <p className="text-[11px] text-neutral-400">Tent basecamp {renderIcon('camping', 14)}</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-neutral-900 text-[11px] text-neutral-400">
                  <span>Cog transit {renderIcon('mountain-railway', 14)}</span>
                  <span className="text-amber-400 font-semibold">$180 pass</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

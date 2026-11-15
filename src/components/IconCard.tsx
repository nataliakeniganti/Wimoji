import React, { useState, useMemo } from 'react';
import { Copy, Download, Check } from 'lucide-react';
import { WimojiIconDef, WimojiStyleOptions } from '../types/wimoji';
import { generateSvgString, renderWimojiInner, downloadSvgFile } from '../utils/svgGenerator';
import {
  isMultiToneIcon,
  isSkinnableIcon,
  withDualSkinToneIcon,
  withSkinToneIcon,
} from '../utils/skinTones';

interface IconCardProps {
  icon: WimojiIconDef;
  options: WimojiStyleOptions;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
  onInspect: (icon: WimojiIconDef) => void;
}

const IconCardComponent: React.FC<IconCardProps> = ({
  icon,
  options,
  isSelected,
  onToggleSelect,
  onInspect,
}) => {
  const [copied, setCopied] = useState(false);

  const displayIcon = useMemo(() => {
    const leftTone = options.skinTone ?? 'default';
    const rightTone = options.rightSkinTone ?? leftTone;
    if (leftTone !== rightTone && isMultiToneIcon(icon)) {
      return withDualSkinToneIcon(icon, leftTone, rightTone);
    }
    if (leftTone !== 'default' && isSkinnableIcon(icon)) {
      return withSkinToneIcon(icon, leftTone);
    }
    return icon;
  }, [icon, options.skinTone, options.rightSkinTone]);

  const handleCopySvg = (e: React.MouseEvent) => {
    e.stopPropagation();
    const svg = generateSvgString(displayIcon, options);
    navigator.clipboard.writeText(svg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    downloadSvgFile(displayIcon, options);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleSelect(icon.id);
  };

  const svgInner = useMemo(() => renderWimojiInner(icon, options), [icon, options]);

  return (
    <div
      onClick={() => onInspect(displayIcon)}
      className={`group relative flex flex-col items-center justify-between rounded-xl border p-4 transition-all cursor-pointer ${
        isSelected
          ? 'border-amber-500/80 bg-amber-500/5 shadow-md shadow-amber-500/5'
          : 'border-neutral-800/80 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/90'
      }`}
    >
      {/* Top action row: Checkbox & Quick Actions */}
      <div className="flex w-full items-center justify-between">
        <button
          onClick={handleCheckboxClick}
          aria-label={isSelected ? `Deselect ${icon.name}` : `Select ${icon.name}`}
          className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
            isSelected
              ? 'border-amber-500 bg-amber-500 text-neutral-950'
              : 'border-neutral-700 bg-neutral-800/60 opacity-0 group-hover:opacity-100 hover:border-neutral-500'
          }`}
        >
          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
        </button>

        {/* Quick action buttons (Hover reveal) */}
        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={handleCopySvg}
            title="Copy raw SVG code"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700/80 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            onClick={handleDownload}
            title="Download SVG file"
            className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-700/80 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Icon Graphic Container */}
      <div className="my-3 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
        <svg
          viewBox="0 0 32 32"
          width={options.size}
          height={options.size}
          fill="none"
          dangerouslySetInnerHTML={{ __html: svgInner }}
          className="overflow-visible"
        />
      </div>

      {/* Label and Unicode Information */}
      <div className="w-full text-center">
        <p className="truncate text-xs font-medium text-neutral-200 group-hover:text-white">
          {displayIcon.name}
        </p>
        <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-mono">
          <span className="text-neutral-400">{displayIcon.char}</span>
          <span aria-hidden="true">·</span>
          <span className="truncate">{displayIcon.unicodeHex}</span>
        </div>
      </div>
    </div>
  );
};

export const IconCard = React.memo(IconCardComponent);

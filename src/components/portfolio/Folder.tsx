"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type FolderTone = "blue" | "green" | "orange" | "yellow" | "sheet";

interface FolderProps {
  tone: FolderTone;
  tab?: React.ReactNode;
  tabAt?: number;
  glass?: boolean;
  as?: "div" | "button" | "article" | "li" | "figure";
  className?: string;
  bodyClass?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  "data-flush"?: "left" | "right";
  [key: string]: unknown;
}

export function Folder({
  tone,
  tab,
  tabAt = 0.1,
  glass,
  as = "div",
  className,
  bodyClass,
  style,
  children,
  "data-flush": dataFlush,
  ...rest
}: FolderProps) {
  const flush = tabAt <= 0 ? "left" : tabAt >= 1 ? "right" : undefined;
  const Tag = as;

  const toneColors: Record<FolderTone, string> = {
    blue: "var(--color-electric-500)",
    green: "var(--color-lime-500)",
    orange: "var(--color-orange-500)",
    yellow: "var(--color-yellow-500)",
    sheet: "var(--color-card)",
  };

  const toneOnColors: Record<FolderTone, string> = {
    blue: "#ffffff",
    green: "#030712",
    orange: "#ffffff",
    yellow: "#5d5434",
    sheet: "var(--color-card-foreground)",
  };

  const toneOn2Colors: Record<FolderTone, string> = {
    blue: "rgba(255,255,255,.72)",
    green: "rgba(3,7,18,.78)",
    orange: "rgba(255,255,255,.78)",
    yellow: "rgba(93,84,52,.7)",
    sheet: "var(--color-muted-foreground)",
  };

  const cssVars: React.CSSProperties = {
    ...style,
    "--c": toneColors[tone],
    "--on": toneOnColors[tone],
    "--on2": toneOn2Colors[tone],
    "--tx": String(Math.min(1, Math.max(0, tabAt))),
    "--fr": "12px",
    "--br": "18px",
    "--th": "30px",
  } as React.CSSProperties & Record<string, string>;

  return (
    <Tag
      {...rest}
      className={cn("folder-root", className)}
      data-tone={tone}
      data-glass={glass ? "true" : undefined}
      data-flush={flush || dataFlush}
      style={cssVars}
    >
      {tab != null && (
        <span className="folder-tab" data-tone={tone} data-flush={flush || dataFlush}>
          {tab}
        </span>
      )}
      <div className={cn("folder-body", bodyClass)}>{children}</div>
    </Tag>
  );
}

export function TabBar({
  items,
  active,
  onChange,
  label,
  idBase,
}: {
  items: { id: string; label: React.ReactNode; tone: FolderTone; count?: number }[];
  active: string;
  onChange: (id: string) => void;
  label: string;
  idBase: string;
}) {
  const refs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % items.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = items.length - 1;
    if (n < 0) return;
    e.preventDefault();
    onChange(items[n].id);
    refs.current[n]?.focus();
  };

  return (
    <div className="tab-bar" role="tablist" aria-label={label}>
      {items.map((it, i) => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="tab"
            id={idBase + "-tab-" + it.id}
            aria-selected={on}
            aria-controls={idBase + "-panel"}
            tabIndex={on ? 0 : -1}
            className={cn("tab-btn", on ? "active" : "")}
            data-tone={on ? it.tone : "sheet"}
            onClick={() => onChange(it.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {it.label}
            {it.count != null && <span className="tab-chip">{String(it.count).padStart(2, "0")}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function Arrow({ size = 14, dir = "right" }: { size?: number; dir?: "right" | "down" | "up" | "left" | "ne" }) {
  const rot = { right: 0, down: 90, left: 180, up: -90, ne: -45 }[dir];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PalmIcon({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M15.5 30c.6-6 .9-11 .2-17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M16 13C12 7 6 7 2.5 10.5 7 9.5 11 10.5 16 13Zm0 0c1-6 6-10 11.5-8.5C22 5 18.5 8 16 13Zm0 0c4.5-3 10-2 13 2.5-4.5-2-8.5-2.5-13-2.5Zm0 0C10.5 11 5 14 4 19c3.5-4 7-5.5 12-6Zm0 0c-1-4.5-4-8.5-8.5-10C10 6 13 9 16 13Z" fill="currentColor" />
    </svg>
  );
}
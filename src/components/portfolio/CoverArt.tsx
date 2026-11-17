"use client";

import * as React from "react";
import { rng, r1 } from "@/lib/utils";

type CoverKind = "poster" | "render" | "page" | "sale" | "brand";

interface CoverArtProps {
  kind: CoverKind;
  seed: number;
  mark: string;
  colors: Record<string, string>;
}

const TONES: Array<"blue" | "green" | "orange" | "yellow"> = ["blue", "green", "orange", "yellow"];
const font = "ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif";
const common = { viewBox: "0 0 320 220", width: 320, height: 220, preserveAspectRatio: "xMidYMid slice", "aria-hidden": true } as const;

function pickColor(rnd: () => number, colors: Record<string, string>): string {
  return colors[TONES[Math.floor(rnd() * TONES.length)]];
}

export function CoverArt({ kind, seed, mark, colors }: CoverArtProps) {
  const id = React.useId().replace(/:/g, "");
  const rnd = React.useMemo(() => rng(seed), [seed]);

  if (kind === "render") {
    const a = pickColor(rnd, colors);
    const cx = 120 + rnd() * 80;
    return (
      <svg {...common}>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eef2ff" />
            <stop offset="1" stopColor={a} stopOpacity=".55" />
          </linearGradient>
          <radialGradient id={id + "-ball"} cx=".35" cy=".3" r=".75">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".35" stopColor={a} />
            <stop offset="1" stopColor="#1b2234" stopOpacity=".85" />
          </radialGradient>
          <linearGradient id={id + "-pill"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
            <stop offset="1" stopColor={colors.blue} stopOpacity=".7" />
          </linearGradient>
        </defs>
        <rect width="320" height="220" fill={`url(#${id}-bg)`} />
        <ellipse cx="160" cy="186" rx="150" ry="22" fill="#ffffff" opacity=".55" />
        <ellipse cx={r1(cx)} cy="182" rx="52" ry="9" fill="#1b2234" opacity=".18" />
        <circle cx={r1(cx)} cy="128" r="52" fill={`url(#${id}-ball)`} />
        <ellipse cx={r1(cx - 18)} cy="104" rx="16" ry="9" fill="#fff" opacity=".7" transform={`rotate(-30 ${r1(cx - 18)} 104)`} />
        <rect x={r1(cx + 30)} y="62" width="96" height="34" rx="17" fill={`url(#${id}-pill)`} transform={`rotate(-24 ${r1(cx + 78)} 79)`} />
        <g transform={`translate(${r1(40 + rnd() * 30)} 132)`}>
          <path d="M0 14 L22 0 L44 14 L22 28Z" fill="#ffffff" />
          <path d="M0 14 L22 28 V54 L0 40Z" fill={colors.green} />
          <path d="M44 14 L22 28 V54 L44 40Z" fill={colors.green} opacity=".7" />
        </g>
        <text x="18" y="30" fontFamily={font} fontSize="11" fontWeight="700" letterSpacing="2" fill="#1b2234" opacity=".7">
          {mark} · 3D
        </text>
      </svg>
    );
  }

  if (kind === "page") {
    const a = pickColor(rnd, colors);
    return (
      <svg {...common}>
        <rect width="320" height="220" fill="#eef1f6" />
        <circle cx="262" cy="40" r="70" fill={a} opacity=".22" />
        <g transform="translate(36 18)">
          <rect width="112" height="210" rx="16" fill="#ffffff" />
          <rect x="8" y="8" width="96" height="70" rx="10" fill={a} opacity=".9" />
          <circle cx="56" cy="46" r="20" fill="#ffffff" opacity=".9" />
          <text x="56" y="51" textAnchor="middle" fontFamily={font} fontSize="11" fontWeight="800" fill={a}>
            {mark.slice(0, 4)}
          </text>
          <rect x="10" y="88" width="64" height="7" rx="3.5" fill="#1b2234" />
          <rect x="10" y="100" width="88" height="5" rx="2.5" fill="#c6cad5" />
          <rect x="10" y="110" width="76" height="5" rx="2.5" fill="#c6cad5" />
          <rect x="10" y="124" width="42" height="34" rx="6" fill="#eef1f6" />
          <rect x="56" y="124" width="42" height="34" rx="6" fill="#eef1f6" />
          <rect x="10" y="168" width="92" height="18" rx="9" fill={a} />
        </g>
        <g transform="translate(170 64)">
          <rect width="118" height="40" rx="12" fill="#ffffff" />
          <text x="14" y="26" fontFamily={font} fontSize="16" fontWeight="800" fill="#1b2234">
            {"¥" + (59 + Math.floor(rnd() * 140))}
          </text>
          <rect x="74" y="12" width="32" height="16" rx="8" fill={colors.orange} />
          <rect x="0" y="54" width="92" height="30" rx="10" fill="#ffffff" opacity=".85" />
          <rect x="12" y="66" width="56" height="6" rx="3" fill="#c6cad5" />
          <rect x="0" y="96" width="110" height="30" rx="10" fill={a} opacity=".9" />
          <text x="14" y="116" fontFamily={font} fontSize="10" fontWeight="700" letterSpacing="1.5" fill="#ffffff">
            DETAILS →
          </text>
        </g>
      </svg>
    );
  }

  if (kind === "sale") {
    const confetti = Array.from({ length: 22 }, () => ({ x: rnd() * 320, y: rnd() * 220, r: rnd() * 180, c: pickColor(rnd, colors) }));
    return (
      <svg {...common}>
        <rect width="320" height="220" fill={colors.yellow} />
        {confetti.map((c, i) => (
          <rect key={i} x={r1(c.x)} y={r1(c.y)} width="8" height="3.5" rx="1.5" fill={c.c} transform={`rotate(${r1(c.r)} ${r1(c.x)} ${r1(c.y)})`} />
        ))}
        <polygon
          points={Array.from({ length: 24 }, (_, i) => {
            const ang = (i / 24) * Math.PI * 2;
            const rr = i % 2 ? 54 : 68;
            return r1(236 + Math.cos(ang) * rr) + "," + r1(80 + Math.sin(ang) * rr);
          }).join(" ")}
          fill={colors.orange}
        />
        <text x="236" y="76" textAnchor="middle" fontFamily={font} fontSize="18" fontWeight="900" fill="#ffffff">
          SALE
        </text>
        <text x="236" y="96" textAnchor="middle" fontFamily={font} fontSize="10" fontWeight="700" letterSpacing="2" fill="#ffffff">
          TODAY
        </text>
        <text x="20" y="168" fontFamily={font} fontSize="78" fontWeight="900" letterSpacing="-3" fill="#1b2234">
          {mark}
        </text>
        <text x="22" y="196" fontFamily={font} fontSize="12" fontWeight="700" letterSpacing="4" fill="#1b2234" opacity=".6">
          LIMITED · OFF
        </text>
        <g transform="translate(24 30) rotate(-8)">
          <path d="M0 0 H74 L90 16 L74 32 H0Z" fill={colors.blue} />
          <circle cx="76" cy="16" r="4" fill={colors.yellow} />
          <text x="10" y="21" fontFamily={font} fontSize="12" fontWeight="800" fill="#ffffff">
            DEALS
          </text>
        </g>
      </svg>
    );
  }

  if (kind === "brand") {
    const bg = pickColor(rnd, colors);
    return (
      <svg {...common}>
        <rect width="320" height="220" fill={bg === colors.yellow ? colors.orange : bg} />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const gx = 34 + (i % 3) * 90;
          const gy = 46 + Math.floor(i / 3) * 92;
          const s = Math.floor(rnd() * 4);
          return (
            <g key={i} transform={`translate(${gx} ${gy})`} fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round">
              {s === 0 && <circle cx="26" cy="26" r="22" />}
              {s === 1 && <rect x="4" y="4" width="44" height="44" rx="12" />}
              {s === 2 && <path d="M26 4 L48 46 H4Z" strokeLinejoin="round" />}
              {s === 3 && <path d="M4 26 C14 4 38 4 48 26 C38 48 14 48 4 26Z" />}
              {i === 4 && (
                <text x="26" y="33" textAnchor="middle" fontFamily={font} fontSize="18" fontWeight="900" fill="#ffffff" stroke="none">
                  {mark.slice(0, 1)}
                </text>
              )}
            </g>
          );
        })}
        <text x="300" y="206" textAnchor="end" fontFamily={font} fontSize="11" fontWeight="700" letterSpacing="3" fill="#ffffff" opacity=".8">
          {mark}
        </text>
      </svg>
    );
  }

  // poster
  const bg = pickColor(rnd, colors);
  const fg = pickColor(rnd, colors);
  const cx = 80 + rnd() * 160;
  const cy = 50 + rnd() * 70;
  return (
    <svg {...common}>
      <rect width="320" height="220" fill={bg === colors.yellow ? colors.blue : bg} />
      <circle cx={r1(cx)} cy={r1(cy)} r={r1(56 + rnd() * 30)} fill={fg === bg ? "#ffffff" : fg} opacity=".9" />
      <g stroke="#ffffff" strokeWidth="2" opacity=".28">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1={-40 + i * 44} y1="220" x2={60 + i * 44} y2="0" />
        ))}
      </g>
      <g fill="#ffffff" opacity=".8">
        {Array.from({ length: 20 }, (_, i) => (
          <circle key={i} cx={252 + (i % 4) * 12} cy={128 + Math.floor(i / 4) * 12} r="2" />
        ))}
      </g>
      <text x="16" y="28" fontFamily={font} fontSize="10" fontWeight="700" letterSpacing="2.5" fill="#ffffff">
        {"VOL." + String(1 + Math.floor(rnd() * 12)).padStart(2, "0")}
      </text>
      <text x="14" y="200" fontFamily={font} fontSize="64" fontWeight="900" letterSpacing="-2" fill="#ffffff">
        {mark}
      </text>
    </svg>
  );
}

export function StepArt({ index }: { index: number }) {
  return (
    <svg className="step-art" viewBox="0 0 320 120" width={320} height={120} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {index % 4 === 0 && (
        <g>
          {Array.from({ length: 18 }, (_, i) => (
            <circle key={i} cx={20 + (i % 9) * 22} cy={30 + Math.floor(i / 9) * 40} r={i === 6 ? 6 : 3} fill={i === 6 ? "currentColor" : "none"} />
          ))}
          <circle cx="160" cy="44" r="30" />
          <path d="M182 66 L214 98" strokeWidth="5" />
        </g>
      )}
      {index % 4 === 1 && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <text x="10" y={22 + i * 28} fontSize="14" fontWeight="700" fill="currentColor" stroke="none">
                {String(i + 1).padStart(2, "0")}
              </text>
              <rect x="44" y={10 + i * 28} width={230 - i * 46} height="14" rx="7" fill={i === 0 ? "currentColor" : "none"} />
            </g>
          ))}
        </g>
      )}
      {index % 4 === 2 && (
        <g>
          {Array.from({ length: 12 }, (_, i) => (
            <rect key={i} x={10 + (i % 6) * 50} y={10 + Math.floor(i / 6) * 54} width="42" height="46" rx="8" fill={i === 3 || i === 8 ? "currentColor" : "none"} />
          ))}
        </g>
      )}
      {index % 4 === 3 && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${20 + i * 30} ${40 - i * 12})`}>
              <path d="M0 14 H24 L34 4 H70 V76 H0Z" fill={i === 2 ? "currentColor" : "none"} />
            </g>
          ))}
          <path d="M190 58 H290 M262 34 L292 58 L262 82" strokeWidth="4" />
        </g>
      )}
    </svg>
  );
}

export function Palm({ className }: { className?: string }) {
  const d = React.useMemo(() => frondPath(7), []);
  const d2 = React.useMemo(() => frondPath(19, 300), []);
  return (
    <svg className={className} viewBox="0 0 420 420" width={420} height={420} aria-hidden="true">
      <path d={d} fill="currentColor" />
      <g transform="translate(150 150) rotate(28 150 150)">
        <path d={d2} fill="currentColor" opacity=".7" />
      </g>
      <path d="M40 390 Q110 110 370 60" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function frondPath(seed: number, size = 400): string {
  const rnd = rng(seed);
  const s = size / 400;
  const P = (t: number) => ({
    x: (1 - t) * (1 - t) * 40 + 2 * (1 - t) * t * 110 + t * t * 370,
    y: (1 - t) * (1 - t) * 390 + 2 * (1 - t) * t * 110 + t * t * 60,
  });
  let d = "";
  for (let t = 0.08; t < 0.97; t += 0.05) {
    const a = P(t);
    const b = P(t + 0.01);
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const tx = (b.x - a.x) / len;
    const ty = (b.y - a.y) / len;
    const L = (40 + 120 * Math.pow(Math.sin(Math.PI * t), 0.8)) * (0.9 + rnd() * 0.2);
    for (const side of [1, -1]) {
      const nx = -ty * side;
      const ny = tx * side;
      const qx = a.x + (nx * 0.72 + tx * 0.7) * L;
      const qy = a.y + (ny * 0.72 + ty * 0.7) * L;
      const wdt = 7 + 5 * Math.sin(Math.PI * t);
      const mx = (a.x + qx) / 2;
      const my = (a.y + qy) / 2;
      d +=
        "M" + r1(a.x * s) + " " + r1(a.y * s) +
        " Q" + r1((mx + nx * wdt - tx * wdt) * s) + " " + r1((my + ny * wdt - ty * wdt) * s) + " " + r1(qx * s) + " " + r1(qy * s) +
        " Q" + r1((mx - nx * wdt * 0.4 + tx * wdt) * s) + " " + r1((my - ny * wdt * 0.4 + ty * wdt) * s) + " " + r1(a.x * s) + " " + r1(a.y * s) + "Z";
    }
  }
  return d;
}

export function PhotoScene({ name, seed }: { name: string; seed: number }) {
  const id = React.useId().replace(/:/g, "");
  const scene = React.useMemo(() => {
    const rnd = rng(seed);
    const blds: { x: number; w: number; h: number; spire: boolean }[] = [];
    let x = -6;
    while (x < 306) {
      const w = 14 + rnd() * 26;
      const tall = rnd() < 0.18;
      blds.push({ x, w, h: tall ? 90 + rnd() * 40 : 26 + rnd() * 52, spire: tall && rnd() < 0.6 });
      x += w + (rnd() < 0.3 ? 2 : 0);
    }
    const wins: { x: number; y: number; on: boolean; dl: number }[] = [];
    for (const b of blds) {
      for (let wy = 196 - b.h + 6; wy < 190; wy += 7) {
        for (let wx = b.x + 3; wx < b.x + b.w - 4; wx += 6) {
          if (rnd() < 0.34) wins.push({ x: wx, y: wy, on: rnd() < 0.2, dl: rnd() * 3 });
        }
      }
    }
    const rocks = Array.from({ length: 14 }, () => ({ x: rnd() * 300, y: 300 + rnd() * 56, rx: 4 + rnd() * 12, ry: 2 + rnd() * 5 }));
    return { blds, wins, rocks };
  }, [seed]);

  return (
    <svg viewBox="0 0 300 360" width={300} height={360} preserveAspectRatio="xMidYMid slice" role="img" aria-label={"Photo of " + name}>
      <defs>
        <linearGradient id={id + "-sky"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1222" />
          <stop offset=".42" stopColor="#111827" />
          <stop offset=".72" stopColor="#1a253d" />
          <stop offset="1" stopColor="#22304d" />
        </linearGradient>
        <linearGradient id={id + "-sea"} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1222" />
          <stop offset=".5" stopColor="#111827" />
          <stop offset="1" stopColor="#030712" />
        </linearGradient>
        <linearGradient id={id + "-coat"} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#24252c" />
          <stop offset=".6" stopColor="#111217" />
          <stop offset="1" stopColor="#060608" />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={`url(#${id}-sky)`} />
      <circle cx="232" cy="172" r="16" fill="#00a3ff" opacity=".7" />
      <g fill="#1a253d">
        {scene.blds.map((b, i) => (
          <g key={i}>
            <rect x={r1(b.x)} y={r1(196 - b.h)} width={r1(b.w)} height={r1(b.h)} />
            {b.spire && <rect x={r1(b.x + b.w / 2 - 1)} y={r1(196 - b.h - 18)} width="2" height="18" />}
          </g>
        ))}
      </g>
      <g>
        {scene.wins.map((w, i) => (
          <rect key={i} x={r1(w.x)} y={r1(w.y)} width="2.4" height="2.8" fill={i % 5 ? "#a3e635" : "#00a3ff"} className={w.on ? "twinkle" : undefined} style={w.on ? ({ "--dl": r1(w.dl) + "s" } as React.CSSProperties) : undefined} opacity=".9" />
        ))}
      </g>
      <rect y="196" width="300" height="104" fill={`url(#${id}-sea)`} />
      <g fill="#1a253d" opacity=".35" transform="translate(0 392) scale(1 -1)">
        {scene.blds.map((b, i) => (
          <rect key={i} x={r1(b.x)} y={r1(196 - b.h * 0.6)} width={r1(b.w)} height={r1(b.h * 0.6)} />
        ))}
      </g>
      <g className="shimmer" stroke="#00a3ff" strokeLinecap="round" opacity=".55">
        {[206, 214, 223, 233, 246, 262].map((y, i) => (
          <line key={y} x1={30 + ((i * 47) % 140)} x2={70 + ((i * 47) % 140) + i * 9} y1={y} y2={y} strokeWidth={1.2 + i * 0.2} />
        ))}
      </g>
      <g transform="translate(48 204)">
        <path d="M0 8 H58 L52 14 H6 Z" fill="#0c1222" />
        <rect x="10" y="2" width="34" height="6" rx="1" fill="#111827" />
        <rect x="16" y="-3" width="16" height="5" rx="1" fill="#1a253d" />
        {[13, 19, 25, 31, 37].map((wx) => (
          <rect key={wx} x={wx} y="4" width="3" height="2" fill="#a3e635" className="twinkle" style={{ "--dl": wx / 20 + "s" } as React.CSSProperties} />
        ))}
      </g>
      <path d="M0 296 C40 284 70 292 110 286 C160 278 200 290 240 282 C268 277 288 284 300 280 V360 H0Z" fill="#1c1917" />
      <g fill="#292524">
        {scene.rocks.map((r, i) => (
          <ellipse key={i} cx={r1(r.x)} cy={r1(r.y)} rx={r1(r.rx)} ry={r1(r.ry)} />
        ))}
      </g>
      <g>
        <path d="M142 360 C138 316 140 262 152 236 C160 218 178 210 196 212 C214 214 226 228 232 254 C238 284 240 326 238 360 Z" fill={`url(#${id}-coat)`} />
        <path d="M176 214 C180 224 186 230 194 232 C198 226 200 220 200 213 C192 210 184 210 176 214Z" fill="#0a0a0d" />
        <rect x="181" y="198" width="14" height="18" rx="5" fill="#d9b49a" />
        <ellipse cx="186" cy="184" rx="16" ry="19" fill="#e2bfa3" />
        <path d="M170 182 C166 160 182 152 198 157 C208 161 207 177 204 190 C200 182 196 176 188 172 C181 172 174 176 170 182Z" fill="#131315" />
        <path d="M171 186 C169 190 170 194 173 195" fill="none" stroke="#c99f84" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M156 262 C160 276 168 288 178 292" fill="none" stroke="#2c2d35" strokeWidth="2" strokeLinecap="round" />
        <rect x="172" y="282" width="14" height="22" rx="3" fill="#fb923c" transform="rotate(-12 179 293)" />
      </g>
    </svg>
  );
}

export function ThemeIcon({ dark }: { dark: boolean }) {
  const id = React.useId().replace(/:/g, "") + "-moon";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <mask id={id}>
        <rect width="24" height="24" fill="#fff" />
        <circle className="sun-moon" cx={dark ? 16 : 30} cy={dark ? 7 : -6} r="6.5" fill="#000" />
      </mask>
      <circle className="sun-core" cx="12" cy="12" r={dark ? 8 : 4.5} fill="currentColor" mask={`url(#${id})`} />
      <g className="sun-rays" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 1.5v2.2M12 20.3v2.2M1.5 12h2.2M20.3 12h2.2M4.6 4.6l1.5 1.5M17.9 17.9l1.5 1.5M4.6 19.4l1.5-1.5M17.9 6.1l1.5-1.5" />
      </g>
    </svg>
  );
}
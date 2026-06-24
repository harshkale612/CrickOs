'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Calendar,
  Trophy,
  BarChart3,
  LayoutDashboard,
  Settings,
  Bell,
  TrendingUp,
  Zap,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const BRAND   = '#2563EB';
const BRAND_2 = '#60A5FA';
const CYAN    = '#06D6F4';
const GOLD    = '#F59E0B';
const PURPLE  = '#8B5CF6';

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_STATS = [
  { value: '500+', label: 'Players Managed' },
  { value: '200+', label: 'Clubs Worldwide' },
  { value: '2,400+', label: 'Matches Tracked' },
];

const DASH_STATS = [
  { label: 'Players', value: '186', color: '#3B82F6' },
  { label: 'Matches',  value: '14/18', color: CYAN },
  { label: 'Position', value: '1st',   color: '#10B981' },
  { label: 'Win Rate', value: '68%',   color: BRAND },
];

const TABLE_ROWS = [
  { pos: 1, club: 'Mumbai Lions CC',     pts: 54, wins: 11, isYou: true  },
  { pos: 2, club: 'Delhi Strikers CC',   pts: 46, wins: 10, isYou: false },
  { pos: 3, club: 'Chennai Kings CC',    pts: 43, wins: 9,  isYou: false },
  { pos: 4, club: 'Bangalore Eagles CC', pts: 40, wins: 8,  isYou: false },
];

const PLAYER_CARDS = [
  { name: 'Arjun Mehta', pos: 'Opening Batsman', value: '687 runs', color: '#3B82F6' },
  { name: 'Aditya Joshi', pos: 'Spin Bowler',    value: '16 wkts',  color: '#10B981' },
];

const NAV_ICONS = [LayoutDashboard, Users, Calendar, Trophy] as const;

// Season performance bar heights (mock data)
const CHART_BARS = [62, 78, 55, 85, 70, 92, 68, 88, 75, 95, 80, 90, 72, 98];

// ─── Inline noise SVG ─────────────────────────────────────────────────────────

function NoiseOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.045, mixBlendMode: 'overlay' }}
      aria-hidden
    >
      <defs>
        <filter id="h-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <pattern id="h-noise-tile" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" filter="url(#h-noise)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#h-noise-tile)" />
    </svg>
  );
}

// ─── App window (product mock) ────────────────────────────────────

function AppWindow() {
  return (
    <div className="flex overflow-hidden" style={{ height: 460, background: '#070D1E' }}>

      {/* Sidebar */}
      <div
        className="flex flex-col items-center pt-4 gap-3 border-r flex-shrink-0"
        style={{ width: 56, background: '#050A17', borderColor: 'rgba(255,255,255,0.04)' }}
      >
        {/* Logo mark */}
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${BRAND}, ${BRAND_2})`, boxShadow: `0 0 14px ${BRAND}40` }}
        >
          <Trophy size={14} style={{ color: '#fff' }} suppressHydrationWarning />
        </div>
        <div className="flex flex-col items-center gap-2.5 mt-1">
          {NAV_ICONS.map((Icon, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={
                i === 0
                  ? { background: `rgba(249,115,22,0.15)`, border: `1px solid rgba(249,115,22,0.28)` }
                  : undefined
              }
            >
              <Icon
                suppressHydrationWarning
                size={15}
                style={{ color: i === 0 ? BRAND_2 : '#2A3A52' }}
              />
            </div>
          ))}
        </div>
        {/* Bottom icons */}
        <div className="mt-auto mb-4 flex flex-col items-center gap-2.5">
          <Bell suppressHydrationWarning size={14} style={{ color: '#2A3A52' }} />
          <Settings suppressHydrationWarning size={14} style={{ color: '#2A3A52' }} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-2.5 p-3 overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="h-2 rounded-full bg-white/10" style={{ width: 80 }} />
            <div className="h-2 rounded-full" style={{ width: 48, background: 'rgba(255,255,255,0.05)' }} />
          </div>
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-full"
            style={{ background: `rgba(249,115,22,0.12)`, border: `1px solid rgba(249,115,22,0.22)` }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
            <span style={{ fontSize: 8, color: BRAND_2, fontWeight: 700, letterSpacing: '0.08em' }}>LIVE</span>
          </div>
        </div>

        {/* LIVE SCORE CARD */}
        <div
          className="flex-shrink-0 rounded-xl p-3 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${BRAND}90, ${CYAN}60, transparent)` }}
          />
          <div className="flex items-center justify-between mb-2">
            <span style={{ fontSize: 8, color: '#3A5070', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              MCA Premier · Round 14 · Over 16.3
            </span>
            <span style={{ fontSize: 8, color: BRAND_2, fontWeight: 700, letterSpacing: '0.06em' }}>● LIVE</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                style={{ background: `linear-gradient(135deg, ${BRAND}, #E05000)`, fontSize: 8, fontWeight: 900 }}
              >
                MUM
              </div>
              <span style={{ fontSize: 11, color: '#E2EAF4', fontWeight: 800 }}>Mumbai Lions</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span style={{ fontSize: 22, fontWeight: 900, color: '#F1F5FF', fontVariantNumeric: 'tabular-nums' }}>142/4</span>
              <span style={{ fontSize: 12, color: '#2A3A52', fontWeight: 600 }}>vs</span>
              <span style={{ fontSize: 22, fontWeight: 900, color: '#F1F5FF', fontVariantNumeric: 'tabular-nums' }}>167</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 11, color: '#E2EAF4', fontWeight: 800, textAlign: 'right' }}>Delhi Strikers</span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', fontSize: 8, fontWeight: 900 }}
              >
                DEL
              </div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-1.5 flex-shrink-0">
          {DASH_STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-2 relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
              <div className="text-[13px] font-black leading-none" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-[8px] mt-1 leading-none font-medium" style={{ color: '#2A3A52' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Season chart */}
        <div
          className="rounded-xl px-2.5 pt-2.5 pb-1.5 flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.018)', border: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div className="flex items-center justify-between mb-2">
            <span style={{ fontSize: 8, color: '#2A3A52', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Season Run Rate
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND }} />
              <span style={{ fontSize: 7, color: '#3A5070' }}>Runs For</span>
            </div>
          </div>
          <div className="flex items-end gap-0.5" style={{ height: 30 }}>
            {CHART_BARS.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === CHART_BARS.length - 1
                    ? `linear-gradient(180deg, ${BRAND}, ${GOLD})`
                    : i >= CHART_BARS.length - 4
                    ? `rgba(249,115,22,0.5)`
                    : `rgba(249,115,22,0.2)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Player cards */}
        <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
          {PLAYER_CARDS.map((p) => (
            <div
              key={p.name}
              className="rounded-lg p-2 flex items-center gap-2 overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div
                className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black"
                style={{ background: p.color, fontSize: 10 }}
              >
                {p.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="truncate leading-none font-semibold" style={{ fontSize: 10, color: '#E2EAF4' }}>
                  {p.name}
                </div>
                <div className="truncate leading-none mt-0.5" style={{ fontSize: 8, color: '#2A3A52' }}>
                  {p.pos}
                </div>
              </div>
              <div
                className="flex-shrink-0 px-1.5 py-0.5 rounded-full font-bold"
                style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981', fontSize: 9, border: '1px solid rgba(16,185,129,0.2)' }}
              >
                {p.value}
              </div>
            </div>
          ))}
        </div>

        {/* Standings table */}
        <div
          className="rounded-xl overflow-hidden flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.018)', border: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
            <Trophy suppressHydrationWarning size={9} style={{ color: CYAN }} />
            <span style={{ fontSize: 8, color: '#3A5070', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              MCA Premier Standings
            </span>
          </div>
          {TABLE_ROWS.map((row, i) => (
            <div
              key={row.club}
              className="flex items-center gap-2 px-2.5 relative"
              style={{
                height: 26,
                background: row.isYou ? `rgba(249,115,22,0.06)` : undefined,
                borderBottom: i < TABLE_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.025)' : undefined,
              }}
            >
              {row.isYou && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r" style={{ background: BRAND }} />
              )}
              <span style={{ fontSize: 9, fontWeight: 900, width: 10, textAlign: 'center', color: row.isYou ? BRAND_2 : '#2A3A52', flexShrink: 0 }}>
                {row.pos}
              </span>
              <span style={{ fontSize: 9, flex: 1, color: row.isYou ? '#F1F5FF' : '#3A5070', fontWeight: row.isYou ? 700 : 400 }} className="truncate">
                {row.club}
              </span>
              <span style={{ fontSize: 9, fontWeight: 800, color: row.isYou ? BRAND_2 : '#2A3A52', flexShrink: 0 }}>
                {row.pts}pts
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrowserChrome() {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2.5 flex-shrink-0"
      style={{ background: '#0A1225', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,95,87,0.55)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.55)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.55)' }} />
      </div>
      <div className="flex-1 flex justify-center">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.055)', maxWidth: 220, width: '100%' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ animation: 'pulse 2s infinite' }} />
          <span
            className="text-[10px] truncate"
            style={{ color: '#3A5070', fontFamily: 'var(--font-geist-mono)' }}
          >
            cricos.in/dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const rightY   = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--hero-section-bg)' }}
    >
      {/* ── Background layer ─────────────────────────────────────── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }} aria-hidden>

        {/* Blue primary orb — top-left */}
        <div
          className="absolute"
          style={{
            top: '-8%', left: '-5%',
            width: '60%', height: '65%',
            background: `radial-gradient(ellipse at top left, rgba(37,99,235,0.18), transparent 68%)`,
            filter: 'blur(80px)',
          }}
        />

        {/* Cyan accent orb — top-right */}
        <div
          className="absolute"
          style={{
            top: '-5%', right: '-8%',
            width: '50%', height: '55%',
            background: `radial-gradient(ellipse at top right, rgba(6,214,244,0.10), transparent 65%)`,
            filter: 'blur(90px)',
          }}
        />

        {/* Purple soft orb — bottom-center */}
        <div
          className="absolute"
          style={{
            bottom: '5%', left: '35%',
            width: '40%', height: '40%',
            background: `radial-gradient(ellipse at center, rgba(139,92,246,0.06), transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />

        {/* Subtle horizontal scan line */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: '42%',
            height: 1,
            background: `linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.08) 30%, rgba(6,214,244,0.06) 70%, transparent 100%)`,
          }}
        />

        {/* Noise overlay */}
        <NoiseOverlay />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 180, background: 'linear-gradient(to bottom, transparent, var(--hero-section-bg))' }}
        />
      </motion.div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-28 pb-14 sm:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Copy ──────────────────────────────────────── */}
          <motion.div className="flex flex-col gap-7" style={{ y: contentY }}>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-full border border-border/60 backdrop-blur-sm"
              style={{ background: 'rgba(var(--card-foreground-rgb, 0,0,0), 0.02)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: BRAND, boxShadow: `0 0 8px ${BRAND}` }}
              />
              <span className="uppercase text-[11px] tracking-[0.18em] text-muted-foreground font-semibold">
                Cricket Club OS — 2025
              </span>
              <ChevronRight suppressHydrationWarning size={12} className="text-muted-foreground" />
            </motion.div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1" style={{ lineHeight: 1.0 }}>

              {/* Line 1: outline */}
              <div className="overflow-hidden">
                <motion.span
                  className="block font-black uppercase tracking-tighter"
                  style={{
                    fontSize: 'clamp(2.6rem, 7.5vw, 6rem)',
                    color: 'transparent',
                    WebkitTextStroke: '1.5px hsl(var(--foreground) / 0.18)',
                    lineHeight: 1,
                  }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
                >
                  MANAGE YOUR
                </motion.span>
              </div>

              {/* Line 2: giant gradient — the hero word */}
              <div className="overflow-hidden">
                <motion.span
                  className="block font-black uppercase tracking-tighter gradient-text-cyan"
                  style={{
                    fontSize: 'clamp(3.2rem, 10vw, 8rem)',
                    lineHeight: 1.0,
                    filter: 'drop-shadow(0 0 48px rgba(37,99,235,0.30))',
                  }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
                >
                  CRICKET
                </motion.span>
              </div>

              {/* Line 3: solid */}
              <div className="overflow-hidden">
                <motion.span
                  className="block font-black uppercase tracking-tighter text-foreground"
                  style={{
                    fontSize: 'clamp(2.6rem, 7.5vw, 6rem)',
                    lineHeight: 1,
                    textShadow: `0 0 80px rgba(37,99,235,0.18)`,
                  }}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
                >
                  CLUB BETTER.
                </motion.span>
              </div>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[440px]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.44 }}
            >
              One platform for player rosters, live scorecards, standings, and deep
              performance analytics. Built for cricket clubs of every level.
            </motion.p>

            {/* Feature row */}
            <motion.div
              className="flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.54 }}
            >
              {[
                { icon: Users,    color: '#3B82F6', label: 'Player roster, batting & bowling stats tracking'   },
                { icon: Calendar, color: CYAN,      label: 'Live scorecards, fixtures & standings'              },
                { icon: BarChart3,color: BRAND,     label: 'Performance analytics & club reporting'            },
              ].map(({ icon: Icon, color, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}28` }}
                  >
                    <Icon suppressHydrationWarning size={12} style={{ color }} />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.62 }}
            >
              {/* Primary — animated gradient */}
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }} className="group relative">
                <div
                  className="absolute -inset-0.5 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND}, ${GOLD}, ${BRAND})`,
                    filter: 'blur(10px)',
                  }}
                />
                <Link
                  href="/auth/signup"
                  className="relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND} 0%, #FF8C40 50%, ${GOLD} 100%)`,
                    boxShadow: `0 4px 24px rgba(249,115,22,0.45)`,
                  }}
                >
                  Start Free Trial
                  <ArrowRight
                    suppressHydrationWarning
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* Secondary */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="group">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-muted-foreground border border-border transition-all duration-200 hover:text-foreground hover:border-border/80 hover:bg-secondary/40"
                >
                  <Zap suppressHydrationWarning size={16} style={{ color: CYAN }} />
                  View Live Demo
                  <ArrowRight
                    suppressHydrationWarning
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 opacity-60"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              className="flex items-center gap-0 pt-2 self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
            >
              <div
                className="flex flex-wrap items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 rounded-xl border border-border/50 backdrop-blur-sm"
                style={{ background: 'rgba(var(--card-foreground-rgb, 0,0,0), 0.015)' }}
              >
                {TRUST_STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <span
                        className="font-black text-xl leading-none"
                        style={{ color: i === 0 ? BRAND : i === 1 ? CYAN : '#10B981' }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-muted-foreground text-xs mt-0.5 whitespace-nowrap">{stat.label}</span>
                    </div>
                    {i < TRUST_STATS.length - 1 && (
                      <div className="w-px h-6 bg-border flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Product window ───────────────────────────── */}
          <motion.div
            className="hidden lg:block relative"
            style={{ y: rightY, marginTop: '2rem' }}
          >
            {/* Multi-layer ambient glow */}
            <div
              className="absolute pointer-events-none rounded-3xl"
              style={{
                inset: '-40px -40px -40px -40px',
                background: `radial-gradient(ellipse at 40% 40%, rgba(249,115,22,0.14) 0%, rgba(6,214,244,0.06) 50%, transparent 75%)`,
                filter: 'blur(20px)',
              }}
              aria-hidden
            />

            {/* ── Floating chip: LIVE score ── */}
            <motion.div
              className="absolute -top-5 left-4 z-20 flex items-center gap-2 px-3 py-2 rounded-2xl border border-border shadow-2xl backdrop-blur-md"
              style={{ background: 'hsl(var(--card))', boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(249,115,22,0.10)` }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `rgba(249,115,22,0.15)`, border: `1px solid rgba(249,115,22,0.25)` }}
              >
                <span style={{ fontSize: 12 }}>🏏</span>
              </div>
              <div>
                <div style={{ fontSize: 9, color: BRAND_2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Live · Over 16.3
                </div>
                <div className="text-foreground font-black text-sm leading-tight">MUM 142/4 chasing 167</div>
              </div>
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: BRAND, boxShadow: `0 0 6px ${BRAND}`, animation: 'pulse 1.5s infinite' }}
              />
            </motion.div>

            {/* ── Floating chip: win rate ── */}
            <motion.div
              className="absolute -bottom-4 -left-8 z-20 flex items-center gap-2.5 p-3 rounded-2xl border border-border shadow-2xl backdrop-blur-md"
              style={{ background: 'hsl(var(--card))' }}
              initial={{ opacity: 0, x: -14, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1.15 }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.14)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <TrendingUp suppressHydrationWarning size={14} style={{ color: '#10B981' }} />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground font-medium leading-none">Season Win Rate</div>
                <div className="text-sm font-black text-foreground leading-tight mt-0.5">
                  68% <span style={{ color: '#10B981', fontSize: 11 }}>↑ +5%</span>
                </div>
              </div>
            </motion.div>

            {/* ── Floating chip: social proof ── */}
            <motion.div
              className="absolute -top-3 -right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-full border border-border shadow-xl backdrop-blur-md"
              style={{ background: 'hsl(var(--card))' }}
              initial={{ opacity: 0, y: 12, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: EASE, delay: 1.28 }}
            >
              <div className="flex items-center -space-x-1.5">
                {([BRAND, CYAN, '#10B981', PURPLE] as const).map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full flex-shrink-0"
                    style={{ background: c, border: '2px solid hsl(var(--card))' }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-muted-foreground whitespace-nowrap">
                12 clubs joined today
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ animation: 'pulse 2s infinite' }} />
            </motion.div>

            {/* ── Browser window ── */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl"
              style={{
                boxShadow: `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(249,115,22,0.06)`,
                transform: 'perspective(1400px) rotateY(-2deg) rotateX(2deg)',
              }}
              initial={{ opacity: 0, y: 32, scale: 0.93, rotateX: 8, rotateY: -4 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.46 }}
            >
              <BrowserChrome />
              <AppWindow />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

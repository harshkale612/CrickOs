'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: number;
  trendLabel?: string;
  className?: string;
  accentColor?: 'red' | 'orange' | 'gold' | 'green' | 'blue' | 'cyan' | 'purple';
  delay?: number;
}

const accentMap = {
  red:    'from-red-500/15 to-transparent border-red-500/15 text-red-400',
  orange: 'from-orange-500/15 to-transparent border-orange-500/15 text-orange-400',
  gold:   'from-amber-500/15 to-transparent border-amber-500/15 text-amber-400',
  green:  'from-emerald-500/15 to-transparent border-emerald-500/15 text-emerald-400',
  blue:   'from-blue-500/15 to-transparent border-blue-500/15 text-blue-400',
  cyan:   'from-cyan-500/15 to-transparent border-cyan-500/15 text-cyan-400',
  purple: 'from-violet-500/15 to-transparent border-violet-500/15 text-violet-400',
};

const iconBg = {
  red:    'bg-red-500/12 text-red-400',
  orange: 'bg-orange-500/12 text-orange-400',
  gold:   'bg-amber-500/12 text-amber-400',
  green:  'bg-emerald-500/12 text-emerald-400',
  blue:   'bg-blue-500/12 text-blue-400',
  cyan:   'bg-cyan-500/12 text-cyan-400',
  purple: 'bg-violet-500/12 text-violet-400',
};

const glowMap = {
  red:    'hover:shadow-red-500/10',
  orange: 'hover:shadow-orange-500/12',
  gold:   'hover:shadow-amber-500/10',
  green:  'hover:shadow-emerald-500/10',
  blue:   'hover:shadow-blue-500/10',
  cyan:   'hover:shadow-cyan-500/10',
  purple: 'hover:shadow-violet-500/10',
};

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendLabel,
  className,
  accentColor = 'orange',
  delay = 0,
}: StatCardProps) {
  const trendPositive = trend !== undefined && trend > 0;
  const trendNegative = trend !== undefined && trend < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        'card-dark card-hover card-accent overflow-hidden',
        `hover:shadow-lg ${glowMap[accentColor]}`,
        className
      )}
    >
      <div className={cn(
        'h-full bg-linear-to-br p-4 sm:p-5',
        accentMap[accentColor]
      )}>
        <div className="flex items-start justify-between mb-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{title}</p>
          {icon && (
            <div className={cn('p-2 rounded-lg', iconBg[accentColor])}>
              {icon}
            </div>
          )}
        </div>

        <div className="mt-1">
          <span className="text-2xl sm:text-3xl font-bold text-foreground tabular-nums tracking-tight">
            {value}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {trend !== undefined && (
            <span className={cn(
              'inline-flex items-center gap-0.5 text-xs font-semibold',
              trendPositive && 'text-emerald-400',
              trendNegative && 'text-red-400',
              !trendPositive && !trendNegative && 'text-muted-foreground',
            )}>
              {trendPositive && <TrendingUp className="h-3 w-3" />}
              {trendNegative && <TrendingDown className="h-3 w-3" />}
              {!trendPositive && !trendNegative && <Minus className="h-3 w-3" />}
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          )}
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          {trendLabel && <p className="text-xs text-muted-foreground">{trendLabel}</p>}
        </div>
      </div>
    </motion.div>
  );
}

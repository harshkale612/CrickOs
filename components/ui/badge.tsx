import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'green' | 'red' | 'orange' | 'yellow' | 'blue' | 'cyan' | 'purple' | 'gray' | 'gold';
  size?: 'sm' | 'md';
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'gray', size = 'md', dot, children, ...props }, ref) => {
    const variants = {
      green:  'badge-green',
      red:    'badge-red',
      orange: 'badge-orange',
      yellow: 'badge-yellow',
      blue:   'badge-blue',
      cyan:   'badge-cyan',
      purple: 'badge-purple',
      gray:   'badge-gray',
      gold:   'bg-amber-500/14 text-amber-400 border border-amber-500/22',
    };

    const sizes = {
      sm: 'text-[10px] px-1.5 py-0.5',
      md: '',
    };

    const dotColor = {
      green:  'bg-green-400',
      red:    'bg-red-400 stat-live',
      orange: 'bg-orange-400 stat-live',
      yellow: 'bg-yellow-400',
      blue:   'bg-blue-400',
      cyan:   'bg-cyan-400',
      purple: 'bg-violet-400',
      gray:   'bg-slate-400',
      gold:   'bg-amber-400',
    };

    return (
      <span
        ref={ref}
        className={cn('badge', variants[variant], sizes[size], className)}
        {...props}
      >
        {dot && (
          <span className={cn('w-1.5 h-1.5 rounded-full', dotColor[variant])} />
        )}
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };

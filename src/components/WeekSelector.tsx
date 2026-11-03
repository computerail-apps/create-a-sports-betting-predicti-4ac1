import { useState } from 'react';
import { Button } from '@/lib/ui';
import { Calendar, ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/cn';

interface WeekSelectorProps {
  weeks: number[];
  value: number;
  currentWeek: number;
  onChange: (week: number) => void;
}

export function WeekSelector({ weeks, value, currentWeek, onChange }: WeekSelectorProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open}>
        <Calendar size={16} />
        Week {value}
        <ChevronDown size={14} className={cn('transition-transform duration-150', open && 'rotate-180')} />
      </Button>
      {open && (
        <div className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-md border border-border bg-surface-elevated shadow-elev-3 animate-in">
          <ul role="listbox" className="py-1">
            {weeks.map((w) => (
              <li key={w}>
                <button
                  type="button"
                  onClick={() => { onChange(w); setOpen(false); }}
                  className="flex w-full items-center justify-between px-3 py-2 text-left text-small text-foreground transition-colors duration-150 hover:bg-muted focus:bg-muted focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    Week {w}
                    {w === currentWeek && <span className="text-micro text-muted-foreground">(current)</span>}
                  </span>
                  {w === value && <Check size={14} className="text-primary" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

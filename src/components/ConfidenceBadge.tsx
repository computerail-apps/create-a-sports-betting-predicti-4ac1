import { Badge } from '@/lib/ui';
import type { Confidence } from '@/types';

const meta: Record<Confidence, { label: string; variant: 'success' | 'warning' | 'outline' }> = {
  high: { label: 'High confidence', variant: 'success' },
  medium: { label: 'Medium confidence', variant: 'warning' },
  low: { label: 'Low confidence', variant: 'outline' },
};

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const m = meta[confidence];
  return <Badge variant={m.variant}>{m.label}</Badge>;
}

import type { Game, Confidence } from '@/types';

// Transparent statistical edge model:
// edge = (win% differential * 20) + (point differential delta * 0.9) + home-field adjustment + market line value
export function computeEdge(game: Game): number {
  const { home, away, model } = game;
  const winPctEdge = (home.winPct - away.winPct) * 20;
  const pointDiffEdge = (home.pointDiff - away.pointDiff) * 0.9;
  return winPctEdge + pointDiffEdge + model.homeFieldAdj + model.lineValue;
}

export function confidenceFromEdge(edge: number): Confidence {
  const abs = Math.abs(edge);
  if (abs >= 14) return 'high';
  if (abs >= 7) return 'medium';
  return 'low';
}

export function confidenceScoreFromEdge(edge: number): number {
  const abs = Math.abs(edge);
  return Math.min(99, Math.round(52 + abs * 1.8));
}

export function pickTeamFromEdge(game: Game, edge: number): string {
  return edge >= 0 ? game.home.abbr : game.away.abbr;
}

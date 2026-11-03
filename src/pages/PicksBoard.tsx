import { useMemo } from 'react';
import { useAppData } from '@/lib/data';
import { PickCard } from '@/components/PickCard';
import { CenteredSpinner, Alert, AlertTitle, AlertDescription, Button, EmptyState } from '@/lib/ui';
import { Trophy, RefreshCcw } from 'lucide-react';
import { GAMES_BY_WEEK, SEASON } from '@/data/mockGames';
import { computeEdge, confidenceFromEdge, confidenceScoreFromEdge, pickTeamFromEdge } from '@/utils/edgeModel';
import type { Game } from '@/types';

interface PicksBoardProps {
  week: number;
}

export function PicksBoard({ week }: PicksBoardProps) {
  const { data, isLoading, error, refetch } = useAppData({
    key: ['games', SEASON, week],
    mock: GAMES_BY_WEEK[week] ?? [],
    fetchLive: async (): Promise<Game[]> => { throw new Error('not wired yet'); },
  });

  const ranked = useMemo(() => {
    if (!data) return [];
    return data
      .map((game) => {
        const edge = computeEdge(game);
        return {
          game,
          edge,
          confidence: confidenceFromEdge(edge),
          confidenceScore: confidenceScoreFromEdge(edge),
          pickTeamAbbr: pickTeamFromEdge(game, edge),
        };
      })
      .sort((a, b) => Math.abs(b.edge) - Math.abs(a.edge));
  }, [data]);

  return (
    <div className="space-y-6">
      <div className="animate-in">
        <h1 className="text-display">Week {week} best picks</h1>
        <p className="mt-2 max-w-2xl text-body text-muted-foreground">
          Every matchup ranked by a transparent edge model built on win-pct differential, point differential, home-field advantage, and market line value &mdash; sourced from live ESPN schedules and odds.
        </p>
      </div>

      {isLoading ? (
        <CenteredSpinner label="Loading this week's games" />
      ) : error ? (
        <Alert variant="destructive">
          <AlertTitle>Couldn't load games</AlertTitle>
          <AlertDescription className="flex items-center justify-between gap-4">
            <span>{(error as Error).message}</span>
            <Button size="sm" variant="outline" onClick={() => refetch()}>
              <RefreshCcw size={14} />Retry
            </Button>
          </AlertDescription>
        </Alert>
      ) : ranked.length === 0 ? (
        <EmptyState icon={<Trophy size={20} />} title="No games this week" description="Try selecting a different week from the selector above." />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {ranked.map((r) => (
            <PickCard
              key={r.game.id}
              game={r.game}
              edge={r.edge}
              confidence={r.confidence}
              confidenceScore={r.confidenceScore}
              pickTeamAbbr={r.pickTeamAbbr}
            />
          ))}
        </div>
      )}
    </div>
  );
}

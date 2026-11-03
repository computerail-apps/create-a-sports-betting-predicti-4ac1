import { useMemo } from 'react';
import { useAppData } from '@/lib/data';
import { HISTORY_ENTRIES } from '@/data/mockHistory';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, CenteredSpinner, Alert, AlertTitle, AlertDescription, Button, EmptyState } from '@/lib/ui';
import { BarChart3, CheckCircle2, XCircle, MinusCircle, Clock3, RefreshCcw } from 'lucide-react';
import type { HistoryEntry } from '@/types';

const resultMeta: Record<HistoryEntry['resultStatus'], { label: string; variant: 'success' | 'destructive' | 'warning' | 'outline'; icon: typeof CheckCircle2 }> = {
  win: { label: 'Win', variant: 'success', icon: CheckCircle2 },
  loss: { label: 'Loss', variant: 'destructive', icon: XCircle },
  push: { label: 'Push', variant: 'warning', icon: MinusCircle },
  pending: { label: 'Pending', variant: 'outline', icon: Clock3 },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function HistoryPage() {
  const { data, isLoading, error, refetch } = useAppData({
    key: ['history-picks'],
    mock: HISTORY_ENTRIES,
    fetchLive: async (): Promise<HistoryEntry[]> => { throw new Error('not wired yet'); },
  });

  const summary = useMemo(() => {
    const entries = data ?? [];
    const graded = entries.filter((e) => e.resultStatus !== 'pending');
    const wins = graded.filter((e) => e.resultStatus === 'win').length;
    const losses = graded.filter((e) => e.resultStatus === 'loss').length;
    const pushes = graded.filter((e) => e.resultStatus === 'push').length;
    const decided = wins + losses;
    const winRate = decided > 0 ? (wins / decided) * 100 : 0;
    return { wins, losses, pushes, winRate, total: graded.length };
  }, [data]);

  return (
    <div className="space-y-6">
      <div className="animate-in">
        <h1 className="text-display">Track record</h1>
        <p className="mt-2 max-w-2xl text-body text-muted-foreground">
          Every pick the model has generated, graded automatically once ESPN reports a final score. No cherry-picking &mdash; wins and losses both count.
        </p>
      </div>

      {isLoading ? (
        <CenteredSpinner label="Loading track record" />
      ) : error ? (
        <Alert variant="destructive">
          <AlertTitle>Couldn't load history</AlertTitle>
          <AlertDescription className="flex items-center justify-between gap-4">
            <span>{(error as Error).message}</span>
            <Button size="sm" variant="outline" onClick={() => refetch()}>
              <RefreshCcw size={14} />Retry
            </Button>
          </AlertDescription>
        </Alert>
      ) : !data || data.length === 0 ? (
        <EmptyState icon={<BarChart3 size={20} />} title="No picks graded yet" description="Once this week's games finish, graded picks will show up here." />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Record</CardTitle></CardHeader>
              <CardContent>
                <p className="text-h1 tabular-nums">{summary.wins}-{summary.losses}-{summary.pushes}</p>
                <p className="text-small text-muted-foreground">Win-loss-push</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Hit rate</CardTitle></CardHeader>
              <CardContent>
                <p className="text-h1 tabular-nums">{summary.winRate.toFixed(1)}%</p>
                <p className="text-small text-muted-foreground">Against the spread, pushes excluded</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Picks graded</CardTitle></CardHeader>
              <CardContent>
                <p className="text-h1 tabular-nums">{summary.total}</p>
                <p className="text-small text-muted-foreground">Across all tracked weeks</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Pick history</CardTitle>
              <CardDescription>Most recent picks first, graded against real final scores.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {[...data].sort((a, b) => Date.parse(b.gameDate) - Date.parse(a.gameDate)).map((entry) => {
                  const meta = resultMeta[entry.resultStatus];
                  const Icon = meta.icon;
                  return (
                    <li key={entry.id} className="flex flex-wrap items-center gap-3 px-6 py-3">
                      <Badge variant={meta.variant}><Icon size={12} className="mr-1" />{meta.label}</Badge>
                      <span className="text-small text-muted-foreground">Wk {entry.week}</span>
                      <span className="text-body">{entry.awayTeam} @ {entry.homeTeam}</span>
                      <span className="text-small text-muted-foreground">Pick: {entry.pickTeam}</span>
                      <span className="ml-auto text-small tabular-nums text-muted-foreground">
                        {entry.actualHomeScore !== null && entry.actualAwayScore !== null
                          ? `${entry.actualAwayScore}-${entry.actualHomeScore}`
                          : '—'}
                        <span className="ml-2">{formatDate(entry.gameDate)}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

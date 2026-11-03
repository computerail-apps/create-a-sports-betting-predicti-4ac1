import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/lib/ui';
import { Badge } from '@/lib/ui';
import { ConfidenceBadge } from './ConfidenceBadge';
import { ChevronDown, ChevronUp, Target, MapPin, Clock } from 'lucide-react';
import type { Game, Confidence } from '@/types';

interface PickCardProps {
  game: Game;
  edge: number;
  confidence: Confidence;
  confidenceScore: number;
  pickTeamAbbr: string;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

export function PickCard({ game, edge, confidence, confidenceScore, pickTeamAbbr }: PickCardProps) {
  const [expanded, setExpanded] = useState(false);
  const pickSide = pickTeamAbbr === game.home.abbr ? game.home : game.away;
  const spreadDisplay = game.spreadLine < 0 ? `${game.home.abbr} ${game.spreadLine}` : `${game.home.abbr} +${game.spreadLine}`;

  return (
    <Card className="transition-all duration-150">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <CardTitle>{game.away.abbr} @ {game.home.abbr}</CardTitle>
            <CardDescription className="mt-1 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1"><Clock size={12} />{formatDate(game.date)}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={12} />{game.venue}</span>
            </CardDescription>
          </div>
          <ConfidenceBadge confidence={confidence} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <TeamBlock team={game.away} isPick={pickTeamAbbr === game.away.abbr} />
          <TeamBlock team={game.home} isPick={pickTeamAbbr === game.home.abbr} align="right" />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">Spread {spreadDisplay}</Badge>
          <Badge variant="outline">Total {game.totalLine}</Badge>
          <Badge variant="default" className="tabular-nums">Edge {edge >= 0 ? '+' : ''}{edge.toFixed(1)}</Badge>
          <Badge variant="outline" className="tabular-nums">{confidenceScore}% model score</Badge>
        </div>

        <div className="flex items-start gap-2 rounded-md bg-muted/50 p-3">
          <Target size={16} className="mt-0.5 shrink-0 text-primary" />
          <div>
            <p className="text-small font-medium text-foreground">Model pick: {pickSide.name} ({game.pickType})</p>
            <p className="mt-1 text-small text-muted-foreground">{game.rationale}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="flex w-full items-center justify-center gap-1 rounded-md py-1 text-small text-muted-foreground transition-colors duration-150 hover:text-foreground focus:outline-none"
        >
          {expanded ? 'Hide stat comparison' : 'Show stat comparison'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-md border border-border p-4 animate-in sm:grid-cols-4">
            <Stat label="Away win %" value={`${(game.away.winPct * 100).toFixed(0)}%`} />
            <Stat label="Home win %" value={`${(game.home.winPct * 100).toFixed(0)}%`} />
            <Stat label="Away pt diff" value={game.away.pointDiff.toFixed(1)} />
            <Stat label="Home pt diff" value={game.home.pointDiff.toFixed(1)} />
            <Stat label="Home-field adj" value={`+${game.model.homeFieldAdj.toFixed(1)}`} />
            <Stat label="Line value" value={`${game.model.lineValue >= 0 ? '+' : ''}${game.model.lineValue.toFixed(1)}`} />
            <Stat label="Computed edge" value={`${edge >= 0 ? '+' : ''}${edge.toFixed(1)}`} />
            <Stat label="Confidence score" value={`${confidenceScore}%`} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TeamBlock({ team, isPick, align = 'left' }: { team: Game['home']; isPick: boolean; align?: 'left' | 'right' }) {
  return (
    <div className={align === 'right' ? 'text-right' : 'text-left'}>
      <div className={`flex items-center gap-2 ${align === 'right' ? 'justify-end' : ''}`}>
        {isPick && align !== 'right' && <Target size={12} className="text-primary" />}
        <span className="text-h3">{team.abbr}</span>
        {isPick && align === 'right' && <Target size={12} className="text-primary" />}
      </div>
      <p className="text-small text-muted-foreground">{team.name}</p>
      <p className="text-small tabular-nums text-muted-foreground">{team.record}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-micro uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="text-body tabular-nums text-foreground">{value}</p>
    </div>
  );
}

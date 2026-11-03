export interface TeamInfo {
  abbr: string;
  name: string;
  record: string;
  winPct: number;
  pointDiff: number;
}

export interface GameModelInputs {
  homeFieldAdj: number;
  lineValue: number;
}

export interface Game {
  id: string;
  season: number;
  week: number;
  date: string;
  venue: string;
  home: TeamInfo;
  away: TeamInfo;
  spreadLine: number;
  totalLine: number;
  model: GameModelInputs;
  rationale: string;
  pickType: 'spread' | 'moneyline';
}

export type Confidence = 'high' | 'medium' | 'low';

export interface HistoryEntry {
  id: string;
  season: number;
  week: number;
  gameDate: string;
  homeTeam: string;
  awayTeam: string;
  pickTeam: string;
  pickType: 'spread' | 'moneyline' | 'total';
  spreadLine: number | null;
  totalLine: number | null;
  confidenceScore: number;
  rationale: string;
  resultStatus: 'win' | 'loss' | 'push' | 'pending';
  actualHomeScore: number | null;
  actualAwayScore: number | null;
}

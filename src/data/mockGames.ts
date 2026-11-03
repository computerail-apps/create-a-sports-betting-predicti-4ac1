import type { Game } from '@/types';

export const CURRENT_WEEK = 7;
export const AVAILABLE_WEEKS = [5, 6, 7, 8];
export const SEASON = 2024;

export const GAMES_BY_WEEK: Record<number, Game[]> = {
  5: [
    {
      id: 'w5-kc-no', season: 2024, week: 5, date: '2024-10-06T17:00:00Z', venue: 'GEHA Field at Arrowhead Stadium',
      home: { abbr: 'KC', name: 'Kansas City Chiefs', record: '4-0', winPct: 1.0, pointDiff: 7.8 },
      away: { abbr: 'NO', name: 'New Orleans Saints', record: '2-2', winPct: 0.5, pointDiff: -0.5 },
      spreadLine: -6.5, totalLine: 46.5, model: { homeFieldAdj: 2.5, lineValue: 1.1 }, pickType: 'spread',
      rationale: "Chiefs' unbeaten start and +7.8 point differential dwarf a Saints team trending the wrong way; model edge clears the posted -6.5 by a comfortable margin.",
    },
    {
      id: 'w5-buf-hou', season: 2024, week: 5, date: '2024-10-06T17:00:00Z', venue: 'Highmark Stadium',
      home: { abbr: 'BUF', name: 'Buffalo Bills', record: '3-1', winPct: 0.75, pointDiff: 6.1 },
      away: { abbr: 'HOU', name: 'Houston Texans', record: '3-1', winPct: 0.75, pointDiff: 1.2 },
      spreadLine: -2.5, totalLine: 48.0, model: { homeFieldAdj: 2.5, lineValue: 0.4 }, pickType: 'spread',
      rationale: 'Even records but Buffalo\'s point differential is nearly 5 points better; home field tips a pick\'em-ish line toward the Bills.',
    },
    {
      id: 'w5-sf-ari', season: 2024, week: 5, date: '2024-10-06T20:05:00Z', venue: "Levi's Stadium",
      home: { abbr: 'SF', name: 'San Francisco 49ers', record: '3-1', winPct: 0.75, pointDiff: 3.5 },
      away: { abbr: 'ARI', name: 'Arizona Cardinals', record: '2-2', winPct: 0.5, pointDiff: -2.0 },
      spreadLine: -7.0, totalLine: 45.5, model: { homeFieldAdj: 2.5, lineValue: -0.6 }, pickType: 'spread',
      rationale: "Model likes the Niners but the market has already priced in most of the gap; edge is modest after accounting for line value.",
    },
    {
      id: 'w5-dal-pit', season: 2024, week: 5, date: '2024-10-06T17:00:00Z', venue: 'AT&T Stadium',
      home: { abbr: 'DAL', name: 'Dallas Cowboys', record: '2-2', winPct: 0.5, pointDiff: -1.8 },
      away: { abbr: 'PIT', name: 'Pittsburgh Steelers', record: '3-1', winPct: 0.75, pointDiff: 2.4 },
      spreadLine: 1.5, totalLine: 44.0, model: { homeFieldAdj: 2.5, lineValue: 0.8 }, pickType: 'spread',
      rationale: "Steelers' superior record and point differential overcome the road trip; model has Pittsburgh covering as the model favorite despite being underdogs on the number.",
    },
    {
      id: 'w5-min-nyj', season: 2024, week: 5, date: '2024-10-06T20:25:00Z', venue: 'U.S. Bank Stadium',
      home: { abbr: 'MIN', name: 'Minnesota Vikings', record: '4-0', winPct: 1.0, pointDiff: 6.9 },
      away: { abbr: 'NYJ', name: 'New York Jets', record: '2-2', winPct: 0.5, pointDiff: -3.4 },
      spreadLine: -3.5, totalLine: 42.5, model: { homeFieldAdj: 2.5, lineValue: 1.6 }, pickType: 'spread',
      rationale: "Undefeated Vikings carry a double-digit point differential edge over New York; market number looks soft relative to the model.",
    },
  ],
  6: [
    {
      id: 'w6-kc-sf', season: 2024, week: 6, date: '2024-10-13T20:20:00Z', venue: 'GEHA Field at Arrowhead Stadium',
      home: { abbr: 'KC', name: 'Kansas City Chiefs', record: '5-0', winPct: 1.0, pointDiff: 7.2 },
      away: { abbr: 'SF', name: 'San Francisco 49ers', record: '3-2', winPct: 0.6, pointDiff: 2.8 },
      spreadLine: -2.5, totalLine: 47.5, model: { homeFieldAdj: 2.5, lineValue: 0.5 }, pickType: 'spread',
      rationale: 'Chiefs remain unbeaten with a notable point-differential cushion; model edge aligns closely with the market but favors Kansas City.',
    },
    {
      id: 'w6-bal-was', season: 2024, week: 6, date: '2024-10-13T17:00:00Z', venue: 'M&T Bank Stadium',
      home: { abbr: 'BAL', name: 'Baltimore Ravens', record: '3-3', winPct: 0.5, pointDiff: 0.8 },
      away: { abbr: 'WAS', name: 'Washington Commanders', record: '4-2', winPct: 0.667, pointDiff: 3.1 },
      spreadLine: -5.5, totalLine: 51.5, model: { homeFieldAdj: 2.5, lineValue: -1.4 }, pickType: 'spread',
      rationale: "Washington's better record and point differential argue against laying 5.5 on the road; model sees value on the Commanders.",
    },
    {
      id: 'w6-det-dal', season: 2024, week: 6, date: '2024-10-13T17:00:00Z', venue: 'Ford Field',
      home: { abbr: 'DET', name: 'Detroit Lions', record: '4-1', winPct: 0.8, pointDiff: 9.1 },
      away: { abbr: 'DAL', name: 'Dallas Cowboys', record: '3-2', winPct: 0.6, pointDiff: -1.0 },
      spreadLine: -6.5, totalLine: 49.0, model: { homeFieldAdj: 2.5, lineValue: 1.0 }, pickType: 'spread',
      rationale: "Lions' league-best point differential and home field combine for one of the week's largest model edges against a middling Dallas defense.",
    },
    {
      id: 'w6-gb-ari', season: 2024, week: 6, date: '2024-10-13T20:25:00Z', venue: 'Lambeau Field',
      home: { abbr: 'GB', name: 'Green Bay Packers', record: '3-2', winPct: 0.6, pointDiff: 2.9 },
      away: { abbr: 'ARI', name: 'Arizona Cardinals', record: '2-3', winPct: 0.4, pointDiff: -2.4 },
      spreadLine: -3.0, totalLine: 47.0, model: { homeFieldAdj: 2.5, lineValue: 0.2 }, pickType: 'spread',
      rationale: 'Packers hold the edge on record, point differential and home field; market line is roughly fair value with a slight lean to Green Bay.',
    },
    {
      id: 'w6-nyj-buf', season: 2024, week: 6, date: '2024-10-13T17:00:00Z', venue: 'MetLife Stadium',
      home: { abbr: 'NYJ', name: 'New York Jets', record: '2-3', winPct: 0.4, pointDiff: -3.9 },
      away: { abbr: 'BUF', name: 'Buffalo Bills', record: '4-1', winPct: 0.8, pointDiff: 6.8 },
      spreadLine: 6.5, totalLine: 45.0, model: { homeFieldAdj: 2.5, lineValue: -0.9 }, pickType: 'spread',
      rationale: "Bills' record and point-differential gap over the Jets is wide enough that even 6.5 on the road looks short of the model's true number.",
    },
  ],
  7: [
    {
      id: 'w7-kc-lv', season: 2024, week: 7, date: '2024-10-20T17:00:00Z', venue: 'GEHA Field at Arrowhead Stadium',
      home: { abbr: 'KC', name: 'Kansas City Chiefs', record: '5-1', winPct: 0.833, pointDiff: 7.5 },
      away: { abbr: 'LV', name: 'Las Vegas Raiders', record: '2-4', winPct: 0.333, pointDiff: -5.2 },
      spreadLine: -7.5, totalLine: 44.5, model: { homeFieldAdj: 2.5, lineValue: 1.2 }, pickType: 'spread',
      rationale: "Chiefs' 5-1 record and +7.5 point differential dwarf a road-weary Raiders squad; model edge clears the -7.5 market number by over four points.",
    },
    {
      id: 'w7-buf-ten', season: 2024, week: 7, date: '2024-10-20T17:00:00Z', venue: 'Highmark Stadium',
      home: { abbr: 'BUF', name: 'Buffalo Bills', record: '4-2', winPct: 0.667, pointDiff: 6.4 },
      away: { abbr: 'TEN', name: 'Tennessee Titans', record: '1-5', winPct: 0.167, pointDiff: -8.3 },
      spreadLine: -9.5, totalLine: 43.5, model: { homeFieldAdj: 2.5, lineValue: 0.9 }, pickType: 'spread',
      rationale: 'One of the widest win-pct and point-differential gaps on the board; Buffalo projects to cover comfortably at home.',
    },
    {
      id: 'w7-sf-dal', season: 2024, week: 7, date: '2024-10-20T20:25:00Z', venue: "Levi's Stadium",
      home: { abbr: 'SF', name: 'San Francisco 49ers', record: '3-3', winPct: 0.5, pointDiff: 2.1 },
      away: { abbr: 'DAL', name: 'Dallas Cowboys', record: '2-4', winPct: 0.333, pointDiff: -3.6 },
      spreadLine: -3.0, totalLine: 48.5, model: { homeFieldAdj: 2.5, lineValue: -0.3 }, pickType: 'spread',
      rationale: "49ers hold modest edges across the board; market line is close to fair value with only a slight lean toward San Francisco.",
    },
    {
      id: 'w7-phi-nyg', season: 2024, week: 7, date: '2024-10-20T17:00:00Z', venue: 'Lincoln Financial Field',
      home: { abbr: 'PHI', name: 'Philadelphia Eagles', record: '4-2', winPct: 0.667, pointDiff: 5.0 },
      away: { abbr: 'NYG', name: 'New York Giants', record: '2-4', winPct: 0.333, pointDiff: -4.6 },
      spreadLine: -6.5, totalLine: 43.0, model: { homeFieldAdj: 2.5, lineValue: 1.0 }, pickType: 'spread',
      rationale: "Eagles' record and point-differential advantage over a struggling Giants offense support laying the 6.5 at home.",
    },
    {
      id: 'w7-det-min', season: 2024, week: 7, date: '2024-10-20T20:25:00Z', venue: 'Ford Field',
      home: { abbr: 'DET', name: 'Detroit Lions', record: '5-1', winPct: 0.833, pointDiff: 9.8 },
      away: { abbr: 'MIN', name: 'Minnesota Vikings', record: '5-1', winPct: 0.833, pointDiff: 6.9 },
      spreadLine: -1.5, totalLine: 50.5, model: { homeFieldAdj: 2.5, lineValue: 0.3 }, pickType: 'spread',
      rationale: 'Two unbeaten-caliber records collide; Detroit\'s point-differential cushion and home field give the model a thin but real edge.',
    },
  ],
  8: [
    {
      id: 'w8-kc-cle', season: 2024, week: 8, date: '2024-10-27T17:00:00Z', venue: 'GEHA Field at Arrowhead Stadium',
      home: { abbr: 'KC', name: 'Kansas City Chiefs', record: '6-1', winPct: 0.857, pointDiff: 7.9 },
      away: { abbr: 'CLE', name: 'Cleveland Browns', record: '1-6', winPct: 0.143, pointDiff: -9.1 },
      spreadLine: -11.5, totalLine: 43.0, model: { homeFieldAdj: 2.5, lineValue: 0.6 }, pickType: 'spread',
      rationale: "Largest win-pct gap on the slate; Chiefs project to cover even a double-digit home number against a reeling Browns team.",
    },
    {
      id: 'w8-min-lar', season: 2024, week: 8, date: '2024-10-27T20:05:00Z', venue: 'U.S. Bank Stadium',
      home: { abbr: 'MIN', name: 'Minnesota Vikings', record: '5-1', winPct: 0.833, pointDiff: 6.9 },
      away: { abbr: 'LAR', name: 'Los Angeles Rams', record: '3-3', winPct: 0.5, pointDiff: 1.0 },
      spreadLine: -1.0, totalLine: 46.5, model: { homeFieldAdj: 2.5, lineValue: -0.5 }, pickType: 'spread',
      rationale: 'Vikings hold the edge in record and point differential, but a near pick\'em line already reflects most of the gap.',
    },
    {
      id: 'w8-phi-cin', season: 2024, week: 8, date: '2024-10-27T17:00:00Z', venue: 'Lincoln Financial Field',
      home: { abbr: 'PHI', name: 'Philadelphia Eagles', record: '5-2', winPct: 0.714, pointDiff: 5.3 },
      away: { abbr: 'CIN', name: 'Cincinnati Bengals', record: '3-4', winPct: 0.429, pointDiff: -1.5 },
      spreadLine: -2.5, totalLine: 49.5, model: { homeFieldAdj: 2.5, lineValue: 0.7 }, pickType: 'spread',
      rationale: 'Eagles\' record and point-differential edge plus home field push the model past the modest posted number.',
    },
    {
      id: 'w8-det-ten', season: 2024, week: 8, date: '2024-10-27T20:25:00Z', venue: 'Ford Field',
      home: { abbr: 'DET', name: 'Detroit Lions', record: '5-2', winPct: 0.714, pointDiff: 8.4 },
      away: { abbr: 'TEN', name: 'Tennessee Titans', record: '1-6', winPct: 0.143, pointDiff: -8.3 },
      spreadLine: -13.5, totalLine: 44.0, model: { homeFieldAdj: 2.5, lineValue: 0.4 }, pickType: 'spread',
      rationale: 'One of the widest point-differential gaps of the season; Lions project to cover a large home number against Tennessee.',
    },
    {
      id: 'w8-buf-sea', season: 2024, week: 8, date: '2024-10-27T20:20:00Z', venue: 'Highmark Stadium',
      home: { abbr: 'BUF', name: 'Buffalo Bills', record: '5-2', winPct: 0.714, pointDiff: 6.0 },
      away: { abbr: 'SEA', name: 'Seattle Seahawks', record: '4-3', winPct: 0.571, pointDiff: 2.2 },
      spreadLine: -3.5, totalLine: 47.0, model: { homeFieldAdj: 2.5, lineValue: 0.1 }, pickType: 'spread',
      rationale: 'Bills carry modest edges in record and point differential, with home field doing most of the work against Seattle.',
    },
  ],
};

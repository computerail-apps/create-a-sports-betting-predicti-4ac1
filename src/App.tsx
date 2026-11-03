import { useState } from 'react';
import { Nav, NavLink, Container } from '@/lib/ui';
import { Trophy, ListOrdered, BarChart3 } from 'lucide-react';
import { WeekSelector } from '@/components/WeekSelector';
import { PicksBoard } from '@/pages/PicksBoard';
import { HistoryPage } from '@/pages/HistoryPage';
import { AVAILABLE_WEEKS, CURRENT_WEEK } from '@/data/mockGames';

type View = 'board' | 'history';

export default function App() {
  const [view, setView] = useState<View>('board');
  const [week, setWeek] = useState<number>(CURRENT_WEEK);

  return (
    <div className="min-h-screen">
      <Nav
        brand={<span className="inline-flex items-center gap-2"><Trophy size={18} className="text-primary" />GridironEdge</span>}
        actions={view === 'board' ? (
          <WeekSelector weeks={AVAILABLE_WEEKS} value={week} currentWeek={CURRENT_WEEK} onChange={setWeek} />
        ) : undefined}
      >
        <NavLink href="#" active={view === 'board'} onClick={() => setView('board')}>
          <ListOrdered size={14} className="mr-2" />This week's picks
        </NavLink>
        <NavLink href="#" active={view === 'history'} onClick={() => setView('history')}>
          <BarChart3 size={14} className="mr-2" />Track record
        </NavLink>
      </Nav>
      <main className="py-8">
        <Container>
          {view === 'board' ? <PicksBoard week={week} /> : <HistoryPage />}
        </Container>
      </main>
    </div>
  );
}

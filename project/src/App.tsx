import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MashupPage } from './pages/MashupPage';
import { ContestPage } from './pages/ContestPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'mashup' | 'contest'>('mashup');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        { <MashupPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
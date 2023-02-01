import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import HistoryPage from './components/historyPage/HistoryPage';
import AboutPage from './components/about/AboutPage';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

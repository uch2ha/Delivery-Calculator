import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import HistoryPage from './components/historyPage/HistoryPage';
import AboutPage from './components/about/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

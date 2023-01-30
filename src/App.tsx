import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import AboutPage from './components/aboutPage/AboutPage';
import HistoryPage from './components/historyPage/HistoryPage';

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

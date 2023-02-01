import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import HistoryPage from './components/historyPage/HistoryPage';
import AboutPage from './components/about/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<h1>Path not resolved</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

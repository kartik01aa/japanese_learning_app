import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { Home } from './pages/Home';
import HiraganaQuiz from './pages/HiraganaQuiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hiraganaQuiz' element={<HiraganaQuiz />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

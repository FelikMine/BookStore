import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import DirtyBlood from './books/DirtyBlood.jsx';
import HomePage from './pages/HomePage.jsx'
import Stories from './pages/Stories.jsx';
import Book from "./components/Book.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/book/:slug" element={<Book />} />
        <Route path="/book/dirty-blood/:page" element=  {<DirtyBlood />} />
        {/* <Route path="/legacy" element={<Legacy />} /> */}
        {/* <Route path="/necromancer" element={<Necromancer />} /> */}
        {/* <Route path="/books" element={<BookListPage />} /> */}
      </Routes>
    </Router>
)

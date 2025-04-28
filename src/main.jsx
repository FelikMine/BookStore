import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage.jsx'
import Stories from './pages/Stories.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/stories" element={<Stories />} />
        {/* <Route path="/books" element={<BookListPage />} /> */}
      </Routes>
    </Router>
)

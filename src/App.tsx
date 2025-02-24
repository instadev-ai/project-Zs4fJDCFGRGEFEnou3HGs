import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import BlogPostPage from './pages/BlogPost'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog-post" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
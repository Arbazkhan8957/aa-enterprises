import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import { ToastProvider } from './components/Toast';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Brands from './pages/Brands';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const PageWrapper = ({ children }) => {
  return <>{children}</>;
};

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="product/:id" element={<PageWrapper><ProductDetail /></PageWrapper>} />
        <Route path="brands" element={<PageWrapper><Brands /></PageWrapper>} />
        <Route path="gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
        <Route path="blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
        <Route path="quote" element={<PageWrapper><Quote /></PageWrapper>} />
        <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="terms" element={<PageWrapper><Terms /></PageWrapper>} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AnimatedRoutes />
      </ToastProvider>
    </BrowserRouter>
  );
}

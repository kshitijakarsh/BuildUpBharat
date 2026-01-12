import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-accent-blue border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

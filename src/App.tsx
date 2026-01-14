import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ComingSoon from './components/common/ComingSoon';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const TourDetailPage = lazy(() => import('./pages/TourDetailPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));


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
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/tours/:id" element={<TourDetailPage />} />
              <Route path="/profile" element={<ProfilePage />} />

              {/* Unimplemented Sidebar Routes */}
              <Route path="/courses" element={<ComingSoon />} />
              <Route path="/career" element={<ComingSoon />} />
              <Route path="/mock-test" element={<ComingSoon />} />
              <Route path="/mentorship" element={<ComingSoon />} />
              <Route path="/quiz" element={<ComingSoon />} />
              <Route path="/events" element={<ComingSoon />} />
              <Route path="/workshops" element={<ComingSoon />} />
              <Route path="/stories" element={<ComingSoon />} />
              <Route path="/help" element={<ComingSoon />} />
              <Route path="/settings" element={<ComingSoon />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
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

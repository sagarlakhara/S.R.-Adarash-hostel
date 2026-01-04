import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import RoomsPage from "@/pages/RoomsPage";
import FoodMenuPage from "@/pages/FoodMenuPage";
import ContactPage from "@/pages/ContactPage";
import OwnerPage from "@/pages/OwnerPage";
import AdminLoginPage from "@/pages/admin/AdminLoginPage";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminRooms from "@/pages/admin/AdminRooms";
import AdminFoodMenu from "@/pages/admin/AdminFoodMenu";
import AdminGallery from "@/pages/admin/AdminGallery";
import AdminAbout from "@/pages/admin/AdminAbout";
import AdminMessages from "@/pages/admin/AdminMessages";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/food-menu" element={<FoodMenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/owner" element={<OwnerPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="rooms" element={<AdminRooms />} />
            <Route path="food-menu" element={<AdminFoodMenu />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="about" element={<AdminAbout />} />
            <Route path="messages" element={<AdminMessages />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

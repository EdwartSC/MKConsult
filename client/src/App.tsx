import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";

import NotFound from "@/pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import { useScrollToTop } from "./hooks/useScrollToTop";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import AdminArticles from "./pages/AdminArticles";
import Services from "./pages/Services";
import RecommendedBooks from "./pages/RecommendedBooks";
import ContactForm from "./pages/ContactForm";
import ServiceStrategicConsulting from "./pages/ServiceStrategicConsulting";
import ServiceAutomationOptimization from "./pages/ServiceAutomationOptimization";
import ServiceTechnicalSolutions from "./pages/ServiceTechnicalSolutions";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/article/:slug" component={Article} />
        <Route path="/admin/articles" component={AdminArticles} />
        <Route path="/servicios" component={Services} />
        <Route path="/libros-recomendados" component={RecommendedBooks} />
        <Route path="/contacto" component={ContactForm} />
        <Route path="/services/consultoria-estrategica-tecnologica" component={ServiceStrategicConsulting} />
        <Route path="/services/automatizacion-optimizacion-procesos" component={ServiceAutomationOptimization} />
        <Route path="/services/desarrollo-soluciones-tecnicas" component={ServiceTechnicalSolutions} />
        <Route path="/services/facebook-ads" component={Services} />
        <Route path="/services/seo" component={Services} />
        <Route path="/services/email-marketing" component={Services} />
        <Route path="/services/content-marketing" component={Services} />
        <Route path="/services/google-ads" component={Services} />
        <Route path="/services/digital-strategy" component={Services} />
        <Route path="/faq" component={FAQ} />
        <Route path="/politica-privacidad" component={PrivacyPolicy} />
        <Route path="/terminos-condiciones" component={TermsOfService} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  const [location] = useLocation();

  // 🔥 AQUÍ ocurre la magia
  useScrollToTop(location);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import AdminArticles from "./pages/AdminArticles";
import Services from "./pages/Services";
import RecommendedBooks from "./pages/RecommendedBooks";
import ContactForm from "./pages/ContactForm";
import LandingFacebookAds from "./pages/LandingFacebookAds";
import LandingSEO from "./pages/LandingSEO";
import LandingEmailMarketing from "./pages/LandingEmailMarketing";
import LandingContentMarketing from "./pages/LandingContentMarketing";
import LandingGoogleAds from "./pages/LandingGoogleAds";
import LandingDigitalStrategy from "./pages/LandingDigitalStrategy";
import BlogImproved from "./pages/BlogImproved";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />      <Route path={"/blog"} component={Blog} />
      <Route path={"/article/:slug"} component={Article} />
      <Route path={"/admin/articles"} component={AdminArticles} />
      <Route path={"/servicios"} component={Services} />
      <Route path={"/libros-recomendados"} component={RecommendedBooks} />
      <Route path={"/contacto"} component={ContactForm} />
      <Route path={"/services/facebook-ads"} component={LandingFacebookAds} />
      <Route path={"/services/seo"} component={LandingSEO} />
      <Route path={"/services/email-marketing"} component={LandingEmailMarketing} />
      <Route path={"/services/content-marketing"} component={LandingContentMarketing} />
      <Route path={"/services/google-ads"} component={LandingGoogleAds} />
      <Route path={"/services/digital-strategy"} component={LandingDigitalStrategy} />
      <Route path={"/blog-mejorado"} component={BlogImproved} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/politica-privacidad"} component={PrivacyPolicy} />
      <Route path={"/terminos-condiciones"} component={TermsOfService} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

// Landing pages for services:
// - /services/facebook-ads
// - /services/seo
// - /services/email-marketing
// - /services/content-marketing
// - /services/google-ads
// - /services/digital-strategy

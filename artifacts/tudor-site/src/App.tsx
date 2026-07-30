import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Highlights } from '@/components/Highlights';
import { QuickLinks } from '@/components/QuickLinks';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Highlights />
      <QuickLinks />
      <Newsletter />
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

import Splash from '@/pages/Splash';
import Coaches from '@/pages/Coaches';
import Admissions from '@/pages/Admissions';
import TotalRecruitingSolution from '@/pages/TotalRecruitingSolution';
import OnSiteCampusWorkshops from '@/pages/OnSiteCampusWorkshops';
import Articles from '@/pages/Articles';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Splash} />
      <Route path="/coaches" component={Coaches} />
      <Route path="/admissions" component={Admissions} />
      <Route path="/total-recruiting-solution" component={TotalRecruitingSolution} />
      <Route path="/on-site-campus-workshops" component={OnSiteCampusWorkshops} />
      <Route path="/articles" component={Articles} />
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

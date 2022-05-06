import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Roadmap from './pages/Roadmap';
import Swap from './pages/Swap';
import Marketplace from './pages/Marketplace';
import { ExploreCard1 } from './pages';
import { ExploreCard2 } from './pages';
import { ExploreCard3 } from './pages';
import { ExploreCard4 } from './pages';
import { ExploreCard5 } from './pages';
import { VideoLanding } from './components/EntrancePageComponents';

const App = () => {
  return (
    <Router>     
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/roadmap' component={Roadmap} />
        <Route path='/swap' component={Swap} />
        <Route path='/marketplace' component={Marketplace} />
        <Route path='/explorecard1' component={ExploreCard1} />
        <Route path='/explorecard2' component={ExploreCard2} />
        <Route path='/explorecard3' component={ExploreCard3} />
        <Route path='/explorecard4' component={ExploreCard4} />
        <Route path='/explorecard5' component={ExploreCard5} />
        <Route path='/' exact component={VideoLanding} />
      </Switch>
    </Router>
  );
}

export default App;

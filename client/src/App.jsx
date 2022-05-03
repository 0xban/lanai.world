import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Roadmap from './pages/Roadmap';

import { Navbar } from './components/HomepageComponents';
import { ExploreCard1 } from './pages';
import { ExploreCard2 } from './pages';
import { ExploreCard3 } from './pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/roadmap' component={Roadmap} />
        {/* <Route path='/swap' component={Swap} />
        <Route path='/marketplace' component={Marketplace} /> */}
        <Route path='/explorecard1' component={ExploreCard1} />
        <Route path='/explorecard2' component={ExploreCard2} />
        <Route path='/explorecard3' component={ExploreCard3} />
      </Switch>
    </Router>
  );
}

export default App;

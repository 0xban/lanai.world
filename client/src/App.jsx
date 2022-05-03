import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Roadmap from './pages/Roadmap';

import { Navbar } from './components/HomepageComponents';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
        <Route path='/roadmap' component={Roadmap} />
      </Switch>
    </Router>
  );
}

export default App;

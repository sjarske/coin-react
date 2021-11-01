import Nav from "./components/Nav";
import About from "./components/About";
import Wallet from "./components/Wallet";
import Home from "./components/Home";
import Rules from "./components/Rules";
import CreateRules from "./components/CreateRules";
import Direct from "./components/Direct";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="container">
      <Nav />
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/wallet" exact component={Wallet}/>
      <Route path="/about" exact component={About}/>
      <Route path="/rules" exact component={Rules}/>
      <Route path="/createrules" exact component={CreateRules}/>
      <Route path="/direct" exact component={Direct}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App
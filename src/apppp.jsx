import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import PetForm from "./components/PetForm";
import PetApp from "./components/PetApp";
import PetList from "./components/PetList"; // Make sure you have this component
import PetDetail from "./components/PetDetail"; // Make sure you have this component

function App() {
  return (
    <Router>
      <div>
        <h1>Pet Manager</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/petform">PetForm</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={PetList} /> {/* Use the actual component name */}
          <Route path="/petform" component={PetForm} />
          <Route path="/pet/:id" component={PetDetail} /> {/* Use the actual component name */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

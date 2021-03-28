import { Component } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Notes from "./Components/Notes/Notes";

const reactRouter = require("react-router-dom");

const Router = reactRouter.BrowserRouter;
const Route = reactRouter.Route;
const Switch = reactRouter.Switch;

function Contact(){
  return (
    <div>Contact section</div>
  );
}

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      authToken: null
    };
    this.setAuthToken = this.setAuthToken.bind(this);
  }

  setAuthToken = (newAuthToken) => {
    this.setState({
      authToken: newAuthToken
    });
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login setAuthToken={this.setAuthToken} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/notes">
            <Notes authToken={this.state.authToken} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
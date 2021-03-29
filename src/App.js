import { Component } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Notes from "./Components/Notes/Notes";
import Profile from "./Components/Profile/Profile";

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
      data: null
    };
    this.setAuthDetails = this.setAuthDetails.bind(this);
  }

  setAuthDetails = (data) => {
    this.setState({
      data: data
    });
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login setAuthDetails={this.setAuthDetails} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/notes">
            <Notes details={this.state.data} />
          </Route>
          <Route path="/profile">
            <Profile details={this.state.data} />
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
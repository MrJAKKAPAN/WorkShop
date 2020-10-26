import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { Children, Component, Suspense} from 'react';
import Routes from './routes/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import LoadingOverlay from 'react-loading-overlay';
// import MoonLoader from 'react-spinners/MoonLoader';
import Contact from './components/Contact/Contact';
import History from './components/History/History';
import Home from './components/Home/Home.js';


class App extends Component {
  constructor() {
    super();
  }

  RedirectToLogin = () => {
      return <Redirect to="/home" />;
  };
  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/home" component={Home} />
              <Route path="/history" component={History} />

              <Route exact={true} path="/" component={this.RedirectToLogin} />
              <Route exact={true} path="*" component={this.RedirectToLogin} />
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

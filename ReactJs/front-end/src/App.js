import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { server, YES } from "./constants";
import { setApp } from "./store/actions/app.action";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Layout from "./components/Layout/layout";
import ProductGrids from "./components/productGrids/productGrids";
import ProductLists from "./components/productLists/productLists";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Layout>
            <Switch>
              <Route path="/ProductGrids" component={ProductGrids} />
              <Route path="/ProductLists" component={ProductLists} />
            </Switch>
          </Layout>
          <Footer />
        </div>
      </Router>
    );
  }
}

// export default App;\
const mapStateToProps = (state) => ({});
const mapDispatchToProps = { setApp };
export default connect(mapStateToProps, mapDispatchToProps)(App);

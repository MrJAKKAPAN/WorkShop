import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { server, YES } from "./constants";
import { setApp } from "./store/actions/app.action";
import "./App.css";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Layout from "./components/Layout/layout";
import ProductGrids from "./components/productGrids/productGrids";
import ProductLists from "./components/productLists/productLists";
import Detail from "./components/detail/detail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Header />
          <div className="content-wrap">
            <Layout />
            <Switch>
              <Route path="/ProductGrids" component={ProductGrids} />
              <Route path="/ProductLists" component={ProductLists} />

              <Route path="/Detail" component={Detail} />
              <Route exact={true} path="*" component={ProductGrids} />
              <Route exact={true} path="/" component={ProductGrids} />
            </Switch>
          </div>
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

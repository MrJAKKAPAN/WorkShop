import React, { Children, Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import Layouts from '../components/Layout/layout';
import History from '../components/History/History';


class Routes extends Component {
    constructor() {
        super();
    }
render() {

    return (
        <Layouts>
            {/* <Router> */}
                    {/* <Switch> */}
                        {/* <Route path="/" exact component={History} /> */}
                        {/* <Route path="/history" component={History} /> */}
                        {/* {children} */}
                        <h1>
                            kkk
                        </h1>
                    {/* </Switch> */}
            {/* </Router> */}

        </Layouts>
    );
  }
}

export default Routes;

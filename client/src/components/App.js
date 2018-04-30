import React from 'react';
// import render from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Signup from './Signup';
import Loops from './Loops';
import Loop from './Loop';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/landing" component={Landing} />
                <Route path="/loops" component={Loops} />
                <Route path="/loop" component={Loop} />
                <Route path="/search" component={Search} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import GridExamples from './Containers/GridExamples';
import NotFoundPage from './Containers/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
			<Route path="/" exact>
				<Redirect to='/grid-demo' />
            </Route>
          <Route path="/grid-demo">
            <GridExamples />
          </Route>
		  <Route path="/*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import GridExamples from './Containers/GridExamples';
import Kanban from './Containers/Kanban';
import NotFoundPage from './Containers/NotFoundPage';
import Form from "./Containers/Form";

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
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/kanban">
            <Kanban />
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

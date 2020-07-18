import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './index.css';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root'),
  );
}

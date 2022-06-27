import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import PrivacyPolicy from './components/PrivacyPolicy';
import PageNotFound from './components/PageNotFound';
import * as serviceWorker from './serviceWorker';

import './assets/vendor/css/purpletech-design-system-react.min.css';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './global.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/politica-de-privacidade" exact component={PrivacyPolicy} />
      <Route path="*" component={PageNotFound} status={404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.register();

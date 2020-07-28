import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './components/CadastroVideo/cadastro';

import { BrowserRouter, Switch, Route } from 'react-router-dom';




ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={() => (<h1>404 Página não encontrada </h1>)} />
   </Switch>    
  </BrowserRouter>,
 
  document.getElementById('root')
);



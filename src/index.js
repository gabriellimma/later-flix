import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const windowLocation = window.location.href;
const Pagina404 = () => (<h1>404, <p>Página {windowLocation} <p>não encontrada</p> </p></h1>);

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
   </Switch>    
  </BrowserRouter>,
 
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

import Sobre from './componentes/Sobre';
import Livros from './componentes/Livros';
import Autores from './componentes/Autores';
import NotFound from './componentes/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/sobre' exact={true} component={Sobre} />
            <Route path='/livros' exact={true} component={Livros} />
            <Route path='/autores' exact={true} component={Autores} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

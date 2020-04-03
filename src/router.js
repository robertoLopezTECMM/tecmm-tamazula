import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'


import Landing from './componentes/landing.js';
import OfertaAcademica from './componentes/ofertaAcademica.js';
import Rectoria from './componentes/rectoria.js';
import ComponentePrueba from './componentes/componentePrueba.js';
import Reinscripcion from './componentes/Reinscripcion.js';
import Titulacion from './componentes/Titulacion.js';
import Aspirantes from './componentes/Aspirantes.js';



class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/Reinscripcion" component={Reinscripcion}/>
            <Route path="/ofertaAcademica" component={OfertaAcademica}/>
            <Route path="/componentePrueba" component={ComponentePrueba}/>
            <Route path="/rectoria" component={Rectoria}/>
            <Route path="/Titulacion" component={Titulacion}/>
            <Route path="/Aspirantes" component={Aspirantes}/>
           
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;

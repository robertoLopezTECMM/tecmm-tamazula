import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import { Grid, Image } from 'semantic-ui-react'


import MenuCentral from './menuCentral.js'
import Footer from './footer.js'

import './styles/reinscripcion.css'


class Reinscripcion extends Component{

 constructor(props){
    super(props);
    this.state={

    }
  }



  render(){
    return(
      <div className="div-principal-reinscripcion">
        <MenuCentral/>
        <div className="div-text">
            <h1><b>Proceso de Reinscripcion Febrero - Junio 2020</b></h1>
            <br></br>
            <table className="div-text" text-align="Center" border="1">
              <tr>
                <td width = "50%"><font size="7">Paso 1</font></td>
                <td width = "50%"><font size="3">
                  <p>SI SOLICITASTE CONDONACIÓN, REVISA RESULTADOS.
                  <font color="red"><br></br>Publicación lunes 29 de enero de 2020.</font></p>
                  <p>REVISA TU NÚMERO DE REFERENCIA Y CONVECION CIE
                    Si no aparece envía un correo a <font color="blue">maria.ochoa@tamazula.tecmm.edu.mx</font> para que te sea asignado</p></font></td>
              </tr>
              <tr>
                <td><font size="3">
                  <ul>
                    <li>REALIZA  EL PAGO  EN  BBVA  BANCOMER  CON TU NÚMERO DE  REFERENCIA Y CONVENIO CIE (1436864)  por  $2,500.00 (14  al 27 de enero de 2020)</li>
                    
                      <ul>
                        <li>Números de Referencia</li>
                        <li><a href="https://drive.google.com/file/d/1yrDNQe9pFSTam6JKi8de7ZrY027WLt_a/view?usp=sharing" target="_blank">Electromecánica</a></li>
                        <li><a href="https://drive.google.com/file/d/1z3dtpmXsJMv1OXpJggqKZho9Z8xm2R83/view?usp=sharing" target="_blank">Administración</a></li>
                        <li><a href="https://drive.google.com/file/d/1ymU4YSrY5fkxkr5fgNyHijJbVhUeE-fW/view?usp=sharing" target="_blank">Industrias Alimentarias</a></li>
                        <li><a href="https://drive.google.com/file/d/1ykMuVTaIgqAsyUSfyjM-8oxBKHzgN-y5/view?usp=sharing" target="_blank">Innovación Agrícola Sustentable</a></li>
                        <li><a href="https://drive.google.com/file/d/1yavlVO80lgPDemxO-UrzkrLhcmErUjJj/view?usp=sharing" target="_blank">Tecnologia de la Información y Comunicaciones</a></li>
                      </ul>
                    
                    <li> SI SOLICITASTE CONDONACIÓN,   ESPERA RESULTADOS  EL 29 DE ENERO DE 2020, YA QUE NO HABRÁ  REEMBOLSO. </li>
                    <li> ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  “CONCEPTO” INGRESEN TU NÚMERO DE CONTROL, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO. </li>
                  </ul></font>
                </td>
                <td><font size="7">Paso 2</font></td>
              </tr>
              <tr>
                <td><font size="7">Paso 3</font></td>
                <td>SI ERES ESTUDIANTE <font color="red">REGULAR</font> Y REALIZASTE  EL PAGO EN BANCO, PODRÁS SELECCIONAR MATERIAS DEL 3 AL 7 DE FEBRERO DE 2020. </td>
              </tr>
              <tr>
                <td><font size="3">ESTUDIANTES IRREGULARES, ACUDIR CON SU JEFATURA DE DIVISIÓN EL VIERNES 7 DE FEBRERO DE 2020.</font></td>
                <td><font size="7">Paso 4</font></td>
              </tr>
              <tr>
                <td><font size="7">Paso 5</font></td>
                <td><font size="3">EL PERIODO DE ALTAS Y BAJAS DE MATERIAS ES DEL 10 AL 21 DE FEBRERO DE 2020.</font></td>
              </tr>
              <tr>
                <td><font size="5" color="Red">INICIO DE SEMESTRE</font></td>
                <td><font size="4">
                  <ul>
                    <li>Escolarizado:   Lunes 10  de  febrero  de  2020. </li>
                    <li>Semiescolarizado:  Sábado 08  de  febrero de  2020. </li>
                  </ul> </font>
                </td>
              </tr>
            </table>
           <font size="5">Las y los alumnos que necesiten factura fiscal deberán solicitarla el mismo día de su pago enviando  un correo de <font color="blue">patricia.castellanos@tamazula.tecmm.edu.mx</font> la ficha de depósito y los datos con los que se generará la factura.</font>
        </div>
        <Footer/>
      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Reinscripcion, options);
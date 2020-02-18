import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import { Grid, Image } from 'semantic-ui-react'


import MenuCentral from './menuCentral.js'
import Footer from './footer.js'

import './styles/reinscripcion.css'

class Titulacion extends Component{

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
            <h1>PROCESO DE TITULACIÓN</h1>
            <table className="div-text" text-align="Center" border="1" border-color="#6D356C">
                <tr>
                    <td width ="50%"><font size="5">Del 17 de Febrero al 06 de Marzo del 2020</font></td>
                    <td width ="50%"><font size="5">Integración de Expediente de Titulación</font></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <font size="5">
                            Documentos para integrar expediente
                            <ol>
                                <li>
                                    Solicitud  de Integración de Expediente  <a href="http://www.tamazula.tecmm.edu.mx/Documentos/Titulacion/SOLICITUD.docx" target="_blank">Descárgala aquí</a> 
                                </li>
                                <li>
                                    Liberación del Proyecto para la Titulación Integral
                                </li>
                                <li>
                                    Constancia de No Inconveniencia.
                                </li>
                                <li>
                                    Evidencia formal de la Programación de Acto Protocolario 
                                </li>
                                <li>
                                    Acta de Nacimiento (original y dos copias)  
                                </li>
                                <li>
                                    Certificado de Preparatoria (original y dos copias)  
                                </li>
                                <li>
                                    CURP (tres copias)  
                                </li>
                                <li>
                                    Constancia de Servicio Social (original y dos copias) 
                                </li>
                                <li>
                                    Certificado de Ingeniería (original y dos copias) 
                                </li>
                                <li>
                                    Constancia de inglés (original y dos copias) 
                                </li>
                                <li>
                                    Constancia donación de libro (original y dos copias) 
                                </li>
                                <li>
                                    Constancia de no adeudo (original y dos copias)  (Departamento de Finanzas) 
                                </li>
                                <li>
                                    Certificado parcial *
                                </li>
                                <li>
                                    Dictamen de equivalencia*
                                </li>
                                <li>
                                    Una fotografía ovalada de estudio (5 x 7 cm.) 
                                </li>
                                <li>
                                    Pago de derechos <b>$800.00 (BBVA Bancomer, Convenio CIE 1436864 y el número de referencia de cada estudiante) Recuerda que  es tu número de control más un dígito.</b>
                                </li>
                            </ol>
                        </font>
                    </td>
                </tr>
                <tr>
                    <td>
                        <font size="5">Del 09 al 31 de Marzo del 2020</font>
                    </td>
                    <td>
                        <font size="5">Realización de “Actos Protocolarios de Titulación”<br/> La fecha en la que te tocará presentarte a tu acto, la notificara tu jefatura de carrera.</font>
                    </td>
                </tr>
            </table>
        </div>
        <Footer/>
      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Titulacion, options);
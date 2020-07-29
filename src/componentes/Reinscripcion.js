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
            <h1>Proceso de Reinscripcion Agosto 2020 - Enero 2021</h1>
            <br></br>
            <table className="div-text" text-align="center">
              <tr id="verde">
                <td width = "50%"><h1>Paso 1</h1></td>
                <td width = "50%">
                  <p>SI SOLICITASTE CONDONACIÓN, RECIBIRÁS UNA NOTIFICACIÓN EN TU CORREO INSTITUCIONAL CON EL DESCUENTO OBTENIDO.  
                  <font color="#6d346c"><br></br>NO HABRÁ REEMBOLSOS</font></p>
                  <p>REVISA TU NÚMERO DE REFERENCIA Y CONVENIO CIE
                    Si no aparece envía un correo a <font color="#6D356C">maria.ochoa@tamazula.tecmm.edu.mx</font> para que te sea asignado.</p>
                </td>
              </tr>
              <tr id="morado">
                <td><h1>Paso 2</h1></td>
                <td>
                    REALIZA EL PAGO EN BBVA BANCOMER CON TU NÚMERO DE REFERENCIA Y CONVENIO CIE (1436864) por $2,500.00 del 10 al 28 de agosto de 2020.
                    
                      <ul >
                        <li>Números de Referencia</li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Electro.pdf" target="_blank">Electromecánica</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Admin.pdf" target="_blank">Administración</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Innova.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Tics.pdf" target="_blank">Tecnologia de la Información y Comunicaciones</a></li>
                      </ul>
                    
                    ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  <font color="#2da19a">“CONCEPTO”</font> INGRESEN TU <font color="#2da19a">NÚMERO DE CONTROL</font>, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO.
                </td>
              </tr>
              <tr id="verde">
                <td><h1>Paso 3</h1></td>
                <td>ELECCIÓN DE MATERIAS A CURSAR EN EL SEMESTRE AGOSTO 2020  ENERO  2021 EN SISTEMA EDCORE DEL 17 AL 28 DE AGOSTO DE 2020. <br/><font size="5"><a href="http://187.174.80.184:8080/alum/login.jsp" target="_blank" id="morado">Clic aquí para EDCORE</a></font></td>
              </tr>
              <tr id="morado">
                <td><h1>AVISOS</h1></td>
                <td>
                  Conserva tu comprobante de pago en original y copia. Imprime tu carga horaria para que lo entregues en el Departamento de Servicios Escolares cuando se te solicite.<br/><br/>
                  Si requieres factura  deberás enviar tu comprobante de pago junto con tus datos de facturación al correo <font color="#2da19a">patricia.castellanos@tamazula.tecmm.edu.mx</font> el mismo día que realices tu depósito. La facturación se realiza al día.
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
export default withGetScreen(Reinscripcion, options);
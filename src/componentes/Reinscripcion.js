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
            <h1>Proceso de Reinscripción Agosto 2020 - Enero 2021</h1>
            <br></br>
            <table className="div-text" text-align="center">
              <tr id="verde">
                <td width = "50%"><h1>Paso 1</h1></td>
                <td width = "50%">
                  <p>SI SOLICITASTE CONDONACIÓN, RECIBIRÁS UNA NOTIFICACIÓN EN TU CORREO INSTITUCIONAL CON EL DESCUENTO OBTENIDO.  
                  <font color="#6d346c"><br></br>NO HABRÁ REEMBOLSOS</font>, por lo que es necesario que revises bien los datos y el monto que se te condonó.</p>
                  <p>REVISA TU NÚMERO DE REFERENCIA Y CONVENIO CIE Si no aparece envía un correo a <font color="#6D356C">maria.ochoa@tamazula.tecmm.edu.mx</font> para que te sea asignado.</p>
                </td>
              </tr>
              <tr id="morado">
                <td><h1>Paso 2</h1></td>
                <td>
                    <p>REALIZA EL PAGO EN BBVA BANCOMER CON TU NÚMERO DE REFERENCIA Y CONVENIO CIE <font color="#2da19a">(1436864)</font> por la cantidad que corresponda $2,500.00 del 10 al 28 de agosto de 2020.
                    <br/><br/>Números de Referencia
                      <ul >
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Electro.pdf" target="_blank">Electromecánica</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Admin.pdf" target="_blank">Administración</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Innova.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                        <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Tics.pdf" target="_blank">Tecnologias de la Información y Comunicaciones</a></li>
                      </ul>
                    <b>IMPORTANTE:</b><br/>
                    ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  <font color="#2da19a">“CONCEPTO”</font> INGRESEN TU <font color="#2da19a">NÚMERO DE CONTROL</font>, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO.
                    </p>
                </td>
              </tr>
              <tr id ="verde">
                <td colSpan="2">
                  <h1>Antes de realizar tu proceso, revisa los pasos descritos según tu estatus:</h1>
                </td>
              </tr>
              <tr id="morado">
                <td>
                  <h1>I. ESTUDIANTES REGULARES</h1>
                </td>
                <td>
                  <p>
                    <h2>PASO 1</h2>
                    REALIZA EL PAGO EN BBVA BANCOMER CON TU NÚMERO DE REFERENCIA Y CONVENIO CIE <font color="#2da19a">(1436864)</font> por la cantidad que corresponda $2,500.00 del 10 al 28 de agosto de 2020.
                    <br/><br/>Números de Referencia
                    <ul >
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Electro.pdf" target="_blank">Electromecánica</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Admin.pdf" target="_blank">Administración</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Innova.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Tics.pdf" target="_blank">Tecnologias de la Información y Comunicaciones</a></li>
                    </ul>
                    <b>IMPORTANTE:</b><br/>
                    ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  <font color="#2da19a">“CONCEPTO”</font> INGRESEN TU <font color="#2da19a">NÚMERO DE CONTROL</font>, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO.<br/><br/>
                    <h2>PASO 2</h2>
                    La selección de materias es del 17 al 28 de agosto.<br/><a href="http://187.174.80.184:8080/alum/login.jsp" target="_blank">Clic aquí para EDCORE</a><br/><br/>
                    Horarios:<br/>
                    <ul>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horario%20Administracion.pdf" target="_blank">Administración</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horario%20Administracion%20Sabado.pdf" target="_blank">Administración Sabatino</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horario%20Electromec%C3%A1nica.pdf" target="_blank">Electromecánica</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horario%20Electromec%C3%A1nica%20Sabado.pdf" target="_blank">Electromecánica Sabatino</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horarios%20alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horarios%20Innovaci%C3%B3n.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horarios%20Innovaci%C3%B3n%20Sabado.pdf" target="_blank">Innovación Agrícola Sustentable Sabatino</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Horarios%20Tics.pdf" target="_blank">Tecnologias de la Información y Comunicaciones</a></li>
                    </ul>
                    <h2>NOTA</h2>
                    <font color="#2da19a">Asegúrate de que tus materias seleccionadas correspondan a tu grupo.</font><br/>
                  </p>
                </td>
              </tr>
              <tr id="verde">
                <td>
                  <h1>II.	ESTUDIANTES CON MATERIA DE ESPECIALIDAD</h1>
                </td>
                <td>
                  <p>
                  <h2>PASO 1</h2>
                    REALIZA EL PAGO EN BBVA BANCOMER CON TU NÚMERO DE REFERENCIA Y CONVENIO CIE <font color="#6D356C">(1436864)</font> por la cantidad que corresponda $2,500.00 del 10 al 28 de agosto de 2020.
                    <br/><br/>Números de Referencia
                    <ul >
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Electro.pdf" target="_blank">Electromecánica</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Admin.pdf" target="_blank">Administración</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Innova.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Tics.pdf" target="_blank">Tecnologias de la Información y Comunicaciones</a></li>
                    </ul>
                    <b>IMPORTANTE:</b><br/>
                    ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  <font color="#6D356C">“CONCEPTO”</font> INGRESEN TU <font color="#6D356C">NÚMERO DE CONTROL</font>, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO.<br/><br/>
                    <h2>PASO 2</h2>
                    Para solicitud de especialidad de la carrera, deberás enviar correo a Ma. de Jesús Ochoa Ortiz. Jefa de Servicios Escolares. Al correo:<br/>
                    <font color="#6D356C">maria.ochoa@tamazula.tecmm.edu.mx</font>
                  </p>
                </td>
              </tr>
              <tr id="morado">
                <td><h1>III.	ESTUDIANTES IRREGULARES</h1></td>
                <td>
                  <p>
                  <h2>PASO 1</h2>
                    REALIZA EL PAGO EN BBVA BANCOMER CON TU NÚMERO DE REFERENCIA Y CONVENIO CIE <font color="#2da19a">(1436864)</font> por la cantidad que corresponda $2,500.00 del 10 al 28 de agosto de 2020.
                    <br/><br/>Números de Referencia
                    <ul >
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Electro.pdf" target="_blank">Electromecánica</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Admin.pdf" target="_blank">Administración</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Alimentarias.pdf" target="_blank">Industrias Alimentarias</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Innova.pdf" target="_blank">Innovación Agrícola Sustentable</a></li>
                      <li><a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/Tics.pdf" target="_blank">Tecnologias de la Información y Comunicaciones</a></li>
                    </ul>
                    <b>IMPORTANTE:</b><br/>
                    ASEGÚRATE  QUE AL MOMENTO DE REALIZAR EL PAGO EN EL BANCO EN  EL ESPACIO DE  <font color="#2da19a">“CONCEPTO”</font> INGRESEN TU <font color="#2da19a">NÚMERO DE CONTROL</font>, PARA QUE EL DEPARTAMENTO DE  FINANZAS  REALICE EL DESBLOQUEO POR CONCEPTO DE PAGO.<br/><br/>
                    
                    <br/><h2>Estudiantes irregulares</h2> <br/>
                    REVISA LOS HORARIOS PUBLICADOS, PARA QUE ELIJAS LAS MATERIAS QUE CURSARÁ ESTE SEMESTRE, RECUERDA QUE NO DEBEN ESTAR EN LOS MISMOS HORARIOS, YA QUE NO SERÁ POSIBLE DARLAS DE ALTA EN EL SISTEMA. 
                    LAS MATERIAS QUE TE APAREZCAN EN EL SISTEMA SERÁN LAS QUE PUEDES CURSAR ÚNICAMENTE, ES IMPORTANTE QUE REVISES LOS HORARIOS CON DETENIMIENTO PARA QUE SELECCIONES LA MAYOR CANTIDAD DE MATERIAS. 
                    COMO SUGERENCIAS, SELECCIONA PRIMERO LAS MATERIAS MÁS ATRASADAS, Y POSTERIORMENTE LAS MATERIAS DE TU SEMESTRE EN CURSO, PROCURA NO ADELANTAR MATERIAS SI NO ES NECESARIO. 
                    <br/><br/>
                    Para dudas particulares y específicas, puedes enviar un correo a tu Jefatura de División..<br/><br/>

                    Ing. Industrias Alimentarias<br/>
                    Betsaida Ríos<br/>
                    <font color="#2da19a">betsaida.rios@tamazula.tecmm.edu.mx</font><br/><br/>

                    Ing. Innovación Agrícola Sustentable<br/>
                    Xochiquetzal Magallón<br/>
                    <font color="#2da19a">xochiquetzal.magallon@tamazula.tecmm.edu.mx</font><br/><br/>

                    Ing. Electromecánica <br/>
                    Irma Judith Silva <br/>
                    <font color="#2da19a">judith.silva@tamazula.tecmm.edu.mx</font><br/><br/>

                    Ing. Administración <br/>
                    Christian Quiroz<br/>
                    <font color="#2da19a">christian.quiroz@tamazula.tecmm.edu.mx</font><br/><br/>

                    Ing. Tics<br/>
                    Christian Quiroz<br/>
                    <font color="#2da19a">christian.quiroz@tamazula.tecmm.edu.mx</font><br/><br/>
                    </p>
                </td>
              </tr>
              <tr id="verde">
                <td>
                  <h1>IV.	ESTUDIANTES CON MATERIAS EN ESPECIAL</h1>
                </td>
                <td>
                  <h2>Si eres estudiante con materias en especial:</h2>
                  <p>
                  Especiales<br/><br/>

                  Para solicitar materias en curso especial, enviar un correo a Ma. de Jesús Ochoa Ortiz. Jefa de Servicios Escolares, para la alta de materias y se te indique el monto a pagar. El correo es:
                  <font color="#6D356C">maria.ochoa@tamazula.tecmm.edu.mx</font>

                  </p>
                </td>
              </tr>
              <tr id="morado">
                <td><h1>AVISOS GENERALES</h1></td>
                <td>
                  <p>
                    Conserva tu comprobante de pago en original y copia. Imprime tu carga horaria para que lo entregues en el Departamento de Servicios Escolares cuando se te solicite.<br/><br/>
                    Si requieres factura  deberás enviar tu comprobante de pago junto con tus datos de facturación al correo <font color="#2da19a">patricia.castellanos@tamazula.tecmm.edu.mx</font> el mismo día que realices tu depósito. La facturación se realiza al día.
                  </p>
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
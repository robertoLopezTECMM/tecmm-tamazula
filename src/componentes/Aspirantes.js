import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import { Grid, Image } from 'semantic-ui-react'


import MenuCentral from './menuCentral.js'
import Footer from './footer.js'

import './styles/aspirantes.css'


class Aspirantes extends Component{

 constructor(props){
    super(props);
    this.state={

    }
  }


  render(){
    return(
      <div className="div-principal">
        <MenuCentral/>
        <div id="morado" class="div-aspirantes">
            
            <div class="div-texto">
                <h1>Paso 1</h1>
                <p>
                    Regístrate en el portal EDCORE, completa los formularios y sube tus documentos del 10 de febrero al 7 de agosto del 2020.
                </p>
                <a target="_blank" href="http://www.edcore.tecmm.edu.mx"><button>Registro Aquí</button></a>
            </div>
            
            <img class="img-seccionAspirantes" src="http://www.tamazula.tecmm.edu.mx/imagenes/Edcore.png"/>  

        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 2</h1>
            <p>
              Del 4 de mayo al 7 de agosto, realiza tu pago por $450.00 en la cuenta 0110362026 BBVA Bancomer clabe interbancaria: 012090001103620261, en el concepto de pago debe llevar el nombre completo del aspirante.<br/><br/>
              Una vez  hecho el pago  escanéalo  en formato pdf y envíalo al correo  <font>caja@tamazula.tecmm.edu.mx</font>  citando  tus datos personales: nombre completo, carrera y número de celular.
            </p>
          </div>
          <div id="morado" class="div-texto">
          <h1>Paso 3</h1>
            <p>
              El Departamento de Servicios Escolares hará el cotejo del expediente en sistema EDCORE y enviará las fichas de examen a los correos electrónicos de las y los aspirantes. <br/><br/>Del  15 de junio  al  7 de agosto 2020.
            </p>
          </div>
        </div>
        <div id="morado" class="div-aspirantes">
          <div class="div-texto">
          <h1>Paso 4</h1>
            <p>
              Descarga la guía de examen de admisión PAA COLLAGE BOARD<br/>
              <a target="_blank" href="https://latam.collegeboard.org/wp-content/uploads/2020/04/Guia_de_estudios_PAA_WEB_.pdf"><button>Descarga aquí</button></a>
            </p>
          </div>
          <div id="verde" class="div-texto">
          <h1>Paso 5</h1>
            <p>
              Presenta tu examen de admisión el 12 de agosto del 2020. <br/><br/>
              Se informará oportunamente el mecanismo de evaluación, ante COVID-19 (en línea o presencial con el protocolo de sanidad autorizado para tal efecto).
            </p>
          </div>
        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
          <h1>Paso 6</h1>
            <p>
            Consulta en la página oficial del TecMM la lista de personas aceptadas <a href="https://tamazula.tecmm.edu.mx/Documentos/reinscripcionAgo2020/LISTA%20TAMAZULA.pdf"><h2>Clic aquí</h2></a>
            </p>
          </div>
          <div id="morado" class="div-texto">
          <h1>Paso 7</h1>
            <p>
            Si estás en la lista de personas aceptadas, realiza el pago en BBVA Bancomer a la cuenta 0110362026 clave interbancaria: 012090001103620261, por $2,500.00 del 17 al 28 de agosto de 2020.
            <br/><br/>Al realizar el pago en el apartado de concepto coloca tu nombre completo.
            </p>
          </div>
        </div>
        <div id="morado" class="div-aspirantes">
          <div class="div-texto">
          <h1>Paso 8</h1>
            <p>
            La entrega de documentos será previa calendarización: 24 de agosto: Electromecánica, 25 de agosto: Industrias Alimentarias y Tecnologías de la Información y Comunicaciones, 26 y 27 de agosto: Innovación Agrícola Sustentable y 28 de agosto: Administración.<br/><br/>
              
                <b>Solicitud de inscripción</b> (Descárgala desde la plataforma EDCORE)<br/><br/>
                <b>Certificado de bachillerato</b> (Original, sólo para cotejo y copia)<br/><br/>
                <b>Contancia de estudios, donde indique el avance de créditos</b> (Original)<br/><br/>
                <b>Dictamen de revalidación del bachillerato concluido en el caso de ser extranjero</b> (Original, sólo para cotejo y copia)<br/><br/>
                <b>Acta de nacimiento</b> (Original)<br/><br/>
                <b>CURP</b><br/><br/>
                <b>Fotografia digital en formato jpg</b><br/><br/>
                <b>Comprobante de pago original por $2,500.00 por concepto de inscripción.</b><br/><br/>
                <b>Comprobante oficial del No. de seguro social único ordinario.</b><br/><br/>
                <b>Copia del registro del NSS del aspirante para obtenerlo deberán de entrar a <a target="_blank" href="http://www.imss.gob.mx/faq/seguro-estudiantes">http://www.imss.gob.mx/faq/seguro-estudiantes.</a></b><br/><br/>
              
            </p>
          </div>
          <div id="verde" class="div-texto">
            <h1>Paso 9</h1>
            <p>
              Recoge tu horario y paquete de materias en ventanilla de control escolar del 24 al 28 de agosto.
            </p>
          </div>
        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 10</h1>
            <p>
            Asiste al curso de nivelación del 17 al 27 de agosto del 2020, consulta la programación en tu Unidad Académica.
            </p>
          </div>
          <div id="morado" class="div-texto">
            <h1>Paso 11</h1>
            <p>
              ¡BIENVENIDAS Y BIENVENIDOS!<br/><br/>Inicio de clases:  31 de agosto del 2020<br/><br/>
              NOTA: Se informará oportunamente el mecanismo de ingreso, ante COVID-19 cuidando el protocolo de sanidad autorizado para tal efecto.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Aspirantes, options);
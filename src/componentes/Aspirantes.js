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
                    Registrate en el portal EDCORE, completa los formularios y sube tus documentos del 10 de febrero al 22 de junio del 2020.
                </p>
                <a target="_blank" href="http://www.edcore.tecmm.edu.mx"><button>Registro Aquí</button></a>
            </div>
            
            <img class="img-seccionAspirantes" src="http://www.tamazula.tecmm.edu.mx/imagenes/Edcore.png"/>  

        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 2</h1>
            <p>
              Realiza tu pago por $450.00 en la cuenta 0110362026 BBVA Bancomer, en el concepto de pago debe llevar el nombre completo del aspirante.
            </p>
          </div>
          <div id="morado" class="div-texto">
            <h1>Paso 3</h1>
            <p>
              Recopila los siguientes documentos:<br/><br/>
              <font size="4">
                <b>Solicitud de inscripción</b> (Descargala desde la plataforma EDCORE)<br/>
                <b>Certificado de bachillerato</b> (Original, solo para cotejo y copia)<br/>
                <b>Contancia de estudios donde indique el avance de crédito</b> (Original)<br/>
                <b>Dictamen de revalidación del bachillerato concluido en el caso de ser extranjero</b> (Original, solo para cotejo y copia)<br/>
                <b>Acta de nacimiento</b> (Original)<br/>
                <b>CURP</b><br/>
                <b>Fotografia digital en formato jpg</b><br/>
                <b>Comprobante de pago original por concepto de inscripción.</b><br/>
                <b>Compobante oficial del No. de seguro social único ordinario.</b><br/>
                <b>Copia del registro del NSS del aspirante para obtenerlo deberán de entrar a <a target="_blank" href="http://www.imss.gob.mx/faq/seguro-estudiantes">http://www.imss.gob.mx/faq/seguro-estudiantes.</a></b><br/>
              </font>
            </p>
          </div>
        </div>
        <div id="morado" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 4</h1>
            <p>
              Entrega y valida los documentos en ventanilla de control escolar y recibe tu ficha y horario de <b>Examen de admisión</b> del 4 de mayo al 22 de junio del 2020.
            </p>
          </div>
          <div id="verde" class="div-texto">
            <h1>Paso 5</h1>
            <p>
              Descarga la guía de examen de admisión PAA COLLAGE BOARD<br/>
              <a target="_blank" href="http://latam.collageboard.org/paa/como-prepararse-para-la-paa/"><button>Descarga aquí</button></a>
            </p>
          </div>
        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 6</h1>
            <p>
              Presenta tu examen de admisión el 26 de junio del 2020 a las 8:00 a.m.
            </p>
          </div>
          <div id="morado" class="div-texto">
            <h1>Paso 7</h1>
            <p>
              Consulta la página oficial del Tecmm la <b>lista de aceptados</b> el 14 e julio a partir de las 17:00 hrs.
            </p>
          </div>
        </div>
        <div id="morado" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 8</h1>
            <p>
              Si eres aceptado, realiza el pago en el banco autorizado por tu unidad académica por la cantidad de $2500.00 del 11 al 21 de agosto del 2020.
            </p>
          </div>
          <div id="verde" class="div-texto">
            <h1>Paso 9</h1>
            <p>
              Asiste al curso de nivelacion del 11 al 21 de agosto del 2020, consulta la programación en tu unidad academica.
            </p>
          </div>
        </div>
        <div id="verde" class="div-aspirantes">
          <div class="div-texto">
            <h1>Paso 10</h1>
            <p>
              Recoge tu horario y paquete de materias en ventanilla de control escolar del 17 al 21 de agosto del 2020.
            </p>
          </div>
          <div id="morado" class="div-texto">
            <h1>Paso 11</h1>
            <p>
              BIENVENIDAS Y BIENVENIDOS A CLASES<br/>24 de Agosto 2020 
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
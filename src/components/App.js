import React from 'react'
import { Container, Google, Imagen, Input, Label, Linea, Padre } from '../style/app_css'
import logo from '../img/Logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const App = () => {
  return (
    <Padre>
        <Container>
      <Imagen>
        <img src={logo} alt=' logo'></img>
      </Imagen>
    <h1>
        Iniciar sesion
    </h1>
    <Google>
    <i className="bi bi-google"> Continuar con google</i>
       
    </Google>
    <Linea/>
      <Label>
        Correo Electronico
      </Label>
      <Input type=' text' placeholder='Ingrese su correo elctronico'>
      </Input>
        </Container>

    </Padre>
  )
}

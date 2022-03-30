import React from 'react'
import { Logos, TestsLogos, Title } from '../style/app_css'
import Html from '../img/Html.png'
import Css from '../img/Css.png'
import Js from '../img/Js.png'
import ReactL from '../img/React2.png'

export const Test = () => {
  return (
    <div>
      <Title>Practica tus conocimientos en la categoría que prefieras.</Title>

      <TestsLogos>
        <Logos src={Html} alt='Html'></Logos>
        <Logos src={Css} alt='Css'></Logos>
        <Logos src={Js} alt='Js'></Logos>
        <Logos src={ReactL} alt='ReactL'></Logos>
        
      </TestsLogos>
    </div>
  )
}

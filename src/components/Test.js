import { Logos, TestsLogos, Title } from '../style/app_css'
import Html from '../img/Html.png'
import Css from '../img/Css.png'
import Js from '../img/Js.png'
import ReactL from '../img/React2.png'
import { useNavigate } from 'react-router-dom'



export const Test = () => {

  let navigate = useNavigate();
  const getTech = (iden)=>{
    localStorage.setItem('tech', iden)
    navigate('/Quest')
}
  

  return (
    <div>
      <Title>Practica tus conocimientos en la categoría que prefieras.</Title>

      <TestsLogos>
        <Logos src={Html} alt='Html' onClick={()=>getTech('html')}></Logos>
        <Logos src={Css} alt='Css' onClick={()=>getTech('css')}></Logos>
        <Logos src={Js} alt='Js' onClick={()=>getTech('javascript')}></Logos>
        <Logos src={ReactL} alt='ReactL' onClick={()=>getTech('react')}></Logos>
      </TestsLogos>
    </div>
  )
}

import { Icon } from '@mui/material'
import React, {useEffect, useState } from 'react'
import { PadreAns, Answer, Stat, User, TextUser, ContainerUser, Check1, Contador } from '../style/app_css'
import user from '../img/User.png'
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom'
import { getD } from '../helpers/getData'
import Swal from 'sweetalert2';
export const Quest = () => {

    ///EStados
    let url = 'https://daily-bits-a.herokuapp.com/'
    let tech = localStorage.getItem('tech')
            const navigate = useNavigate()

    const [idQ, setIdQ] = useState(1)
    const [question, setQuestion] = useState({
        preguntaQ: '',
        a: '',
        b: '',
        c: '',
        correct: '',
    })

    ///cambia la pregunta
    const handleSumar = () => {
        if (idQ == 0) {
            setIdQ(1)
        }else if(idQ == 6){
            Swal.fire({
                title: 'Test finalizado',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            navigate('/Home')
        }
        setIdQ(idQ + 1)
        console.log(idQ)
        getData(tech, idQ)
    }

    ///Me trae la data
    const getData = async (tecnologia, i) => {
        let urlId = url + tecnologia + "/" + i
        console.log(urlId)
        const data = await getD(url + tecnologia + "/" + i)
        console.table(data)
        setQuestion({
            preguntaQ: data.pregunta,
            a: data.respuestas[0],
            b: data.respuestas[1],
            c: data.respuestas[2],
            correct: data.correcta,
        })
        console.log(question)
    }

    ///Me carga la funcion al iniciare la pagina
    useEffect(() => {
        // getData(tech, idQ)
        handleSumar()
    }, [])

    const { preguntaQ, a, b, c, correct } = question;

    const Compare = (answer) => {
        if(answer===correct){
            alert('respuesta correcta')
        } else {
            alert('respuesta incorrecta')
        }
    }

    return (
        <PadreAns>
            <Icon as={Link} to="/Home">

                <CloseIcon color="primary" />
            </Icon>
            <Contador>{idQ - 1} / 5</Contador>
            <ContainerUser>
                <User>
                    <img src={user} alt='user'></img>
                </User>
                <TextUser>
                    {preguntaQ}
                </TextUser>

            </ContainerUser>
            <Stat>

                <Answer onClick={()=> {
                    Compare(a)
                }}>
                    {a}
                </Answer>
                <Answer onClick={()=> {
                    Compare(b)
                }}>
                    {b}
                </Answer> 
                <Answer onClick={()=> {
                    Compare(c)
                }}>
                    {c}
                </Answer>  
            </Stat>
               <Check1 onClick={() => { handleSumar() }}>Revisar</Check1>

        </PadreAns>
    )
}



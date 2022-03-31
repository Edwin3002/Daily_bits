import { Icon } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import { PadreAns, Answer, Stat, User, TextUser, ContainerUser, Check1 } from '../style/app_css'
import user from '../img/User.png'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { getD } from '../helpers/getData'
export const Quest = () => {

    ///EStados
    let url = 'https://daily-bits-a.herokuapp.com/'
    let tech = localStorage.getItem('tech')
    const [ans, setAns] = useState('')
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

    const { preguntaQ, a, b, c, correct } = question

    return (
        <PadreAns>
            <Icon as={Link} to="/Home">

                <CloseIcon color="primary" />
            </Icon>
            <div>{idQ - 1} / 5</div>
            <ContainerUser>
                <User>
                    <img src={user} alt='user'></img>
                </User>
                <TextUser>
                    {preguntaQ}
                </TextUser>

            </ContainerUser>
            <Stat>

                <Answer onClick={()=>{setAns(a)}}>
                    {a}
                </Answer>
                <Answer onClick={()=>{setAns(b)}}>
                    {b}
                </Answer>
                <Answer onClick={()=>{setAns(c)}}>
                    {c}
                </Answer>
            </Stat>
            <Check1 onClick={() => { handleSumar() }}>Revisar</Check1>

        </PadreAns>
    )
}


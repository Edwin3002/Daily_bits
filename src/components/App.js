import React, { useState } from "react";
import {
  Container,
  Google,
  Imagen,
  Input,
  Label,
  Linea,
  Padre,
  GreenText,
  SignupLink,
  ButtonContainer
} from "../style/app_css";
import logo from "../img/Logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';

export const App = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    { data: '' }
  );

  const { data } = email;

  ///Ingresa correo
  const handleChanged = ({ target }) => {
    setEmail({
      ...email,
      [target.name]: target.value,
    });
  };

  ///Verificca que el correo si existe
  const Login = async (email) => {
    const api = await fetch(`https://daily-bits-a.herokuapp.com/users?email=${email}`);
    const user = await api.json();
    if (user.length !== 0) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Sesion Iniciada!',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.setItem('user', JSON.stringify(user[0]))
      navigate('/Home');
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El correo no esta registrado!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <Padre>
      <Container>
        <Imagen>
          <img src={logo} alt=" logo"></img>
        </Imagen>
        <h1>Iniciar sesion</h1>
        <Google>
          <i className="bi bi-google"> Continuar con google</i>
        </Google>
        <Linea />
        <Label>Correo Electronico</Label>
        <Input type="text" onChange={handleChanged} name="data" value={data} placeholder="Ingrese su correo elctronico"></Input>
        <ButtonContainer>
          <Button color="success" onClick={() => { Login(email.data) }} variant="contained">
            Iniciar Sesion
          </Button>
        </ButtonContainer>
        <GreenText>¿Se te olvidó tu contraseña?</GreenText>
        <SignupLink>
          <p>¿Aun no tienes una cuenta?</p>
          <GreenText
            onClick={() => {
              navigate("/Signup");
            }}
          >
            Inscribirse
          </GreenText>
        </SignupLink>
      </Container>
    </Padre>
  );
};

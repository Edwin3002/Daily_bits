import React, {useState} from "react";
import {
  Container,
  Imagen,
  Input,
  Label,
  Linea,
  Padre,
  ImgBox,
  ButtonContainer
} from "../style/app_css";
import logo from "../img/Logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from '@mui/material/Button';
import {fileUpload } from '../helpers/fileUpload';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export const SignUp = () => {

    const navigate = useNavigate();

    const [data, setData] = useState(
        {
            nombre: '',
            email: '',   
        }
    );

    const [btnDisabled, setBtnDisabled] = useState(true);

    const [btnInfo, setBtnInfo] = useState('Registrarse');

    const { nombre, email } = data;

    const POST = async() => {
        await fetch("https://daily-bits-a.herokuapp.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then((res)=>{
            localStorage.setItem('user', JSON.stringify(data));
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario Registrado',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/Home');
        }).catch((res, error) => {
            console.log(res.status,error)
        });
    }

    const handleChanged = ({ target }) => {
        setData({
          ...data,
          [target.name]: target.value,
        });
      };
    
      const handleFileChanged = (e) => {  
        setBtnInfo('Subiendo imagen');
        const file = e.target.files[0];
        fileUpload(file)
          .then((resp) => {
            data.img = resp;
            setBtnInfo('Registrarse')
            setBtnDisabled(false);
          })
          .catch((err) => console.log(err));
      };

    


  return (
    <Padre>
      <Container>
        <Imagen>
          <img src={logo} alt=" logo"></img>
        </Imagen>
        <h1>Registrarse</h1>
        <Linea />
        <Label>Nombre</Label>
        <Input name="nombre" value={nombre} type="text" onChange={handleChanged} placeholder="Ingrese su nombre"></Input>
        <Label>Correo Electronico</Label>
        <Input name="email" type="text" value={email} onChange={handleChanged} placeholder="Ingrese su correo elctronico"></Input>
        <ImgBox>
          <Label>Imagen</Label>
          <Button
            variant="contained"
            component="label"
            >
            Subir Imagen
            <input
                type="file"
                hidden
                onChange={handleFileChanged}
            />
        </Button>
        </ImgBox>
        <ButtonContainer>
            <Button disabled={btnDisabled} fullWidth={true} color="success" variant="contained" onClick={()=>{POST()}}>
                {btnInfo}
            </Button>
        </ButtonContainer>
      </Container>
    </Padre>
  );
};

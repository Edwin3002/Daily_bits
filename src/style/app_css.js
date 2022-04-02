import styled from 'styled-components'

export let Padre = styled.div`
  height: 60%;
  display: flex;
  align-self: center;
  align-content: center;
`;
export let Container = styled.div`
  margin: auto;
  height: 50%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  bottom: 50%;
  @media (max-width: 1000px) {
    width: 80%;
  }
`;
export let Imagen = styled.div`
  margin-top: 20px;
`;
export let Google = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  background-color: #ef4565;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 100%;
`;
export let Linea = styled.hr`
  width: 90%;
  color: red;
`;
export let Label = styled.label`
  display: flex;
  margin: 10px 20px;
  align-self: flex-start;
`;
export let Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 12px 0px;
`;

export let GreenText = styled.p`
  color: #2cb67d;
`;

export let SignupLink = styled.div`
  display: flex;
  gap: 10px;
`;

export let ImgBox = styled.div`
  display: flex;
  margin: 25px;
`;

///Home
export let Title = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

///Test
export let TestsLogos = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export let Logos = styled.img`
  border-radius: 200px;
  border: 10px solid #2cb67d;
  padding: 10px;
  margin: 20px 0px;
  width: 10%;
  @media (max-width: 1000px) {
    width: 30%;
  }
`;
///Nav
export let NavF = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: "red";
`;
///Profile

export let Prof = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export let Photo = styled.img`
  margin-top: 20px;
  width: 10%;
  border-radius: 500px;
  @media (max-width: 1000px) {
    width: 30%;
  }
`;
export let Name = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;
export let Email = styled.div`
  margin-top: 20px;
`;
export let LoginOut = styled.div`
  margin-top: 40px;
  color: #ef4565;
  font-weight: bold;
  font-size: 150%;
  &:hover{
    transform: scale(1.05);
  }
`;
///Statistics

export let Stat = styled.div``;
export let Result = styled.div`
  margin: 20px auto;
  border-radius: 5px;
  border: 2px solid #94a1b2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  align-items: center;
  padding: 10px 0px;
  font-size: 120%;
`;
export let L = styled.div``;
export let Num = styled.div`
  float: right;
`;

//Signup
export let ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px;
    width: 100%;
`

///Quest

export let Contador = styled.h2`
    text-align: center;
    font-size: 150%;
`
export let PadreAns = styled.div`
display: flex;
flex-direction: column;

`
export let ContainerUser = styled.div`
margin: 50px auto;
display: flex;
    height: 50%;
    width: 50%;
    align-items: center;
    @media (max-width: 1000px) {
        width: 80%;
    }

`

export let Answer = styled.div`
background-color: #232E35;
margin: 20px auto;
border-radius: 5px;
border:  2PX solid #94A1B2;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 50%;
align-items: center;
padding: 10px 0px;
font-size: 120%;
@media (max-width: 1000px) {
 width:90% ;
}
&:hover{
    background-color: #232a35;
    transform: scale(1.03);
}
`
export let User = styled.div`
width: 15%;
`
export let TextUser = styled.div`
width: 75%;
margin: 20px;
font-size: 150%;
`
export let Check1 = styled.button`
font-size: 150%;
padding: 10px;
font-weight: bold;
width: 90%;
margin: 50px auto;
border-radius: 10px;
border: none;
    background-color: #D4CAF3;
    box-shadow: 2px 2px #AB90FF;
    &:hover{
    transform: scale(1.03);
}
`



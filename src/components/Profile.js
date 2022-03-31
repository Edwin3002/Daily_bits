import React, { useEffect, useState } from "react";
import { Email, LoginOut, Name, Photo, Prof } from "../style/app_css";
import { NavF } from "../style/app_css";
import Nav from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
export const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user)
  }, []);
  return (
    <>
      <div>
        <h4>Profile</h4>
        <Prof>
          <Photo src={user.img} alt="Photo" />
          <Name>{user.nombre}</Name>
          <Email>{user.email}</Email>
          <LoginOut
            onClick={() => {
              localStorage.removeItem("user");
              Swal.fire('Su sesion ha sido cerrada')
              navigate("/");

            }}
          >
            Close session
          </LoginOut>
        </Prof>
      </div>
      <NavF>
        <Nav />
      </NavF>
    </>
  );
};

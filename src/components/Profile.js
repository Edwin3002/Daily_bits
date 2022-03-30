import React from 'react'
import { Email, LoginOut, Name, Photo, Prof} from '../style/app_css'
import PhotoP from '../img/ProfileL.png';

export const Profile = () => {
  return (
    <div>
      <h4>Profile</h4>
      <Prof>
        <Photo src={PhotoP} alt='Photo'/>
        <Name>Paco</Name>
        <Email>Paco@gmail.com</Email>
        <LoginOut>Close session</LoginOut>
        </Prof>
    </div>
  )
}

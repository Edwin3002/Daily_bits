import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TextsmsIcon from "@mui/icons-material/Textsms";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { L, Num, Result, Stat } from "../style/app_css";
import { NavF } from "../style/app_css";
import Nav from "../components/Navbar";


export const Statistics = () => {



  return (
    <div>
      <div>
        <h4>Statistics</h4>
        <Stat>
          <Result>
            <L>
              <AccessTimeIcon />
            </L>
            <div>Time for study (hours)</div>
            <Num>2</Num>
          </Result>
          <Result>
            <L>
              <TextsmsIcon color="primary" />
            </L>
            <div>Answered answers</div>
            <Num>20</Num>
          </Result>
          <Result>
            <L>
              <CheckIcon color="success" />
            </L>
            <div>Correct answers</div>
            <Num>10</Num>
          </Result>
          <Result>
            <L>
              <ClearIcon color="secondary" />
            </L>
            <div>Incorrect answers</div>
            <Num>10</Num>
          </Result>
        </Stat>
      </div>
      <NavF>
        <Nav />
      </NavF>
    </div>
  );
};

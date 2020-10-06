import { IonButton } from "@ionic/react";
import React from "react";
import "../css/help.css";
import {Link} from 'react-router-dom'

function help() {
  return (
    <div className="help center">
      <div className="container">
        <h1>Play Rules</h1>
        <div>
          <p className="title">Swipe Right</p>
          <p className="info">Swipe the card Right, if you know to location. (+1 point)</p>
        </div>
        <div>
          <p className="title">Swipe Left</p>
          <p className="info">Swipe the card Left, if you don't know to location.</p>
        </div>
        <div>
          <p className="title">How to see the card info?</p>
          <p className="info">
            <strong>On Laptop : </strong>Double click on the card.
          </p>
          <p className="info">
            <strong>On Mobile : </strong>Just tap on the card.
          </p>
        </div>
        <div style={{marginTop:"80px"}}>
            <Link to="/play">
            <IonButton>play game</IonButton>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default help;

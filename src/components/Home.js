import { IonButton } from "@ionic/react";
import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <h1>Welcome to <span>Tindarr.</span></h1>
      <div className="center">
        <p style={{marginBottom:"30px", fontSize:"25px"}}>Are you a Champ?</p>
        <Link to="/help">
          <IonButton>Play game</IonButton>
        </Link>
      </div>
    </div>
  );
}

export default Home;

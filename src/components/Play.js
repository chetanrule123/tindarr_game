import React, { useState } from "react";
import "../css/play.css";
import TinderCard from "react-tinder-card";
import { IonButton, IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import {
  locationOutline,
  helpCircleOutline,
  closeCircleOutline,
  refreshOutline,
  homeOutline,
} from "ionicons/icons";
import data from "../components/data";
function Play() {
  const animate = (id) => {
    const d1 = document.querySelector(".front" + id);
    const d2 = document.querySelector(".back" + id);
    d1.classList.toggle("rotate0");
    d1.classList.toggle("rotate180");
    d1.classList.toggle("rotate180");
    d2.classList.toggle("rotate0");
  };

  var [game_score, setGame_score] = useState(0);
  const [isfinish, setStatus] = useState(false);
  return (
    <div className="play">
      {isfinish ? (
        <div className="result center">
          <h1 style={{ marginBottom: "50px" }}>
            {game_score > data.length / 2
              ? "Hurray! Good game..."
              : "Bad game. Better luck next time."}
          </h1>
          <p style={{ marginBottom: "15px" }}>Your score is:</p>
          <h1>
            <span style={{ color: "rgb(253, 106, 125)" }}>{game_score}</span> /{" "}
            {data.length}
          </h1>
          <div style={{ marginTop: "100px", display: "flex" }}>
            <Link to="/help" style={{ margin: "0 30px" }}>
              <IonButton>
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>{" "}
                &nbsp;Play again
              </IonButton>
            </Link>
            <Link to="/" style={{ margin: "0 30px" }}>
              <IonButton>
                <IonIcon slot="start" icon={homeOutline}></IonIcon> &nbsp;Home
              </IonButton>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p style={{ textAlign: "center", margin: "50px 0 30px 0" }}>
            Do you know the place?
          </p>
          <div className="cards">
            {data.map((card) => (
              <TinderCard
                onSwipe={(direction) => {
                  if (direction === "right")
                    setGame_score((game_score) => game_score + 1);
                }}
                onCardLeftScreen={() => {
                  if (card.id === data.length) setStatus(true);
                }}
                preventSwipe={["up", "bottom"]}
                className="card"
                key={card.id}
              >
                <div
                  onDoubleClick={() => animate(card.id)}
                  onTouchEnd={() => {
                    animate(card.id);
                  }}
                  id="eve_ele"
                >
                  <div className={`front rotate0 ` + `front${card.id}`}>
                    <img src={require(`../assets/${card.img}`)} alt="" />
                    <p className="card_title">{card.title}</p>
                  </div>
                  <div className={"back rotate180 " + `back${card.id}`}>
                    <p className="title">{card.title}</p>
                    <p className="info">{card.info}</p>
                    <p className="location">
                      <IonIcon
                        style={{ color: "rgb(253, 106, 125)" }}
                        icon={locationOutline}
                      />{" "}
                      {card.location}
                    </p>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
          <div
            style={{
              margin: "50px 0",
              flexDirection: "row",
              width: "100%",
            }}
            className="center"
          >
            <Link to="/" style={{ margin: "0 50px" }}>
              <IonButton>
                <IonIcon slot="start" icon={closeCircleOutline}></IonIcon>{" "}
                &nbsp;Resign
              </IonButton>
            </Link>
            <Link to="/help" style={{ margin: "0 50px" }}>
              <IonButton>
                <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>{" "}
                &nbsp;Help{" "}
              </IonButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Play;

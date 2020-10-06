import { IonApp, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Play from "./components/Play";
import Help from './components/help'
import "./css/main.css";
function App() {
  return (
    <div className="App">
      <IonApp>
        <div className="bg_layer1"></div>
        <div className="bg_layer2"></div>
        <Router>
        <IonHeader>
          <IonToolbar>
            <div className="header">
              <Link to="/" className="center" style={{flexDirection:"row", textDecoration:"none"}}>
              <img src={require("./assets/tinder.png")} alt="" />
              <IonTitle className="ion-title">Tindarr</IonTitle>
              </Link>
            </div>
          </IonToolbar>
        </IonHeader>
        
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/play" component={Play} />
          </Switch>
        </Router>
      </IonApp>
    </div>
  );
}

export default App;

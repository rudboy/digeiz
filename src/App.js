import React, { Component } from "react";
import "./App.css";
import data from "./assets/trajectoires.json";
import MyChart from "./component/graf";
import MyChartTime from "./component/timeGraf";
import ShematUser from "./component/userShema";
import ShematUserTime from "./component/userShemaTime";
import MyChartDistance from "./component/userDistance";

class App extends Component {
  state = { orderTab: [] };

  async componentDidMount() {
    for (let i = 0; i < data.length; i++) {
      data[i].points.sort(function(a, b) {
        let comparison = 0;
        if (a.time > b.time) {
          comparison = 1;
        } else if (a.time < b.time) {
          comparison = -1;
        }
        return comparison;
      });
    }
    this.setState({ orderTab: data });
  }

  ReadJson = () => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TEST DIGEIZ</h1>
        </header>
        <section className="App-chart">
          <h2>Analyse de données</h2>
          <p>Graphique en barre</p>

          <div className="Barre">
            <div className="Chart">
              <p>Nombres d'arrets par utilisateur</p>
              <MyChart data={this.state.orderTab}></MyChart>
            </div>
            <div className="Chart">
              <p>Temps de parcours par utilisateur</p>
              <MyChartTime data={this.state.orderTab}></MyChartTime>
            </div>
            <div className="Chart">
              <p>Distance parcouru par utilisateur</p>
              <MyChartDistance data={this.state.orderTab}></MyChartDistance>
            </div>
          </div>
          <p>Graphique en ligne</p>

          <div className="Line">
            <div className="Chart">
              <p>Shéma du parcours utilisateur</p>
              <ShematUser data={this.state.orderTab}></ShematUser>
            </div>
            <div className="Chart">
              <p> Temps de parcours par utilisateur entre chaque arret</p>
              <ShematUserTime data={this.state.orderTab}></ShematUserTime>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

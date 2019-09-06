import React from "react";
import axios from "axios";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers = () => {
     
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
      
        this.setState({ players: response.data });
      })
      .catch(err => console.log(err));
    
};

  render() {
    return (
      <div>
        {this.state.players.map(player => {
          return (
            <div className="players" key={player.id}>
            
              <h4>Name:{player.name}</h4>
             <h3>Country: {player.country}</h3>
             <p>Searches: {player.searches}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Players;
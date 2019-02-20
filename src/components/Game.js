import React, { Component } from 'react';
import Ceil from './Ceil';

const winnerCombinations = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8]
];

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      ceils: Array(9).fill(null),
      winner: null,
      currentTurn: 1
    }
  }

  _getIndexCeil(event) {
    const ceil = event.target.closest('[data-index]');
    
    if (!ceil) return;

    const index = ceil.dataset.index;
    this._markCeil(index);
  }

  _markCeil(index) {
    const [...ceils] = this.state.ceils;
    let currentTurn = this.state.currentTurn;
    let winner = this.state.winner;

    if(ceils[index] !== null ) return;
    if(winner !== null) return;
   
    
    const marker = currentTurn % 2 === 1 ? 'X' : 'O' 
    ceils[index] = marker;
    currentTurn += 1; 

    winner = this._checkWinner(ceils); 

    this.setState({
      ceils: ceils,
      currentTurn: currentTurn,
      winner: winner,
     }
    );
  }

  _getCellText(value) {
    return value || '';
   }

   _checkWinner(ceils){
     

     for (let combination of winnerCombinations ) {
       const [a, b, c] = [...combination];

       if(
         ceils[a] !== null &&
         ceils[a] === ceils[b] &&
         ceils[b] === ceils[c]
        ) {
           return ceils[a];
         }
      }
      return null;
   }

  render() {
    const winner = this.state.winner;
    const currentTurn = this.state.currentTurn;
    return (
      <div 
        className="Game_field" 
        onClick={(event) => {
          this._getIndexCeil(event)
         }
        }
      >
        <h3>Tic Tac Toe { winner
          ? `(Winner: ${winner})`
          : `(Turn: ${currentTurn})`
        } 
        </h3>

        <div 
          className="Ceil_container"
           
        >
          <Ceil index="0" value={this._getCellText(this.state.ceils[0])} />
          <Ceil index="1" value={this._getCellText(this.state.ceils[1])} />
          <Ceil index="2" value={this._getCellText(this.state.ceils[2])} />
        </div>

        <div 
          className="Ceil_container" 
        >
          <Ceil index="3" value={this._getCellText(this.state.ceils[3])} />
          <Ceil index="4" value={this._getCellText(this.state.ceils[4])} />
          <Ceil index="5" value={this._getCellText(this.state.ceils[5])} />
        </div>

        <div 
          className="Ceil_container" 
        >
          <Ceil index="6" value={this._getCellText(this.state.ceils[6])} />
          <Ceil index="7" value={this._getCellText(this.state.ceils[7])} />
          <Ceil index="8" value={this._getCellText(this.state.ceils[8])} />
        </div>

        <button 
          className="Game_btn__rest"
          onClick={() => this.setState({
            ceils: Array(9).fill(null),
            winner: null,
            currentTurn: 1
            })
          }
        >
          Restart
        </button>
      </div>
    )
   
  }
}

export default Game;

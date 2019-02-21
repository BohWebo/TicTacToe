import React, { Component } from 'react';

const winnerCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      winner: null,
      currentTurn: 1
    }
  }

  _markCell(index) {
    let {winner, currentTurn, } = this.state;
    const {cells} = this.state;
    
    if(cells[index] !== null ) return;
    if(winner !== null) return;
    
    const marker = currentTurn % 2 === 1 ? 'X' : 'O' 
    cells[index] = marker;
    currentTurn += 1; 
    winner = this._checkWinner(cells); 

    this.setState({
      cells,
      currentTurn,
      winner,
    });
  }

  _getCellText(value) {
    return value || '';
  }

  _checkWinner(cells){
    for (let combination of winnerCombinations ) {
      let [a, b, c] = [...combination];

      if(
        cells[a] !== null &&
        cells[a] === cells[b] && 
        cells[b] === cells[c]
      ) {
          return cells[a];
        }
    }
    return null;
  }

  render() {
    const {winner, currentTurn} = this.state;
    const {cells} = this.state;

    return (
      <>
        <h2>Tic Tac Toe { winner
          ? `(Winner: ${winner})`
          : `(Turn: ${currentTurn})`
        } 
        </h2>

        <div 
          className="Game-field" 
        >
          {cells.map((cell, index) => (
            <div 
              class="Cell" 
              key={index} 
              data-index={index} 
              onClick={() => this._markCell(index)}
            >
              {this._getCellText(cells[index])}
            </div>
            )
            )
          }
        
          <div 
            className="btn-container"
          > 
            <button 
              className="Game-btn--restart"
              onClick={() => this.setState({
                cells: Array(9).fill(null),
                winner: null,
                currentTurn: 1
                })
              }
            >
              Restart
            </button>
          </div> 
        </div>
      </>
    )
  }
}

export default Game;

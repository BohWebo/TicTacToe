import React, { Component } from 'react';
import Cell from './Cell';

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
      cells: Array(9).fill(null),
      winner: null,
      currentTurn: 1
    }
  }

  _getIndexCell(event) {
    const cell = event.target.closest('[data-index]');
    
    if (!cell) return;

    const index = cell.dataset.index;
    this._markCeil(index);
  }

  _markCeil(index) {
    let {winner, currentTurn, cells: [...cells]} = this.state;
    
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
     }
    );
  }

  _getCellText(value) {
    return value || '';
   }

   _checkWinner(cells){
     

     for (let combination of winnerCombinations ) {
       const [a, b, c] = [...combination];

       if(
         cells[a] !== null &&
         cells[a] === cells[b] && cells[b] === cells[c]
        ) {
           return cells[a];
         }
      }
      return null;
   }

  render() {
    const {winner, currentTurn} = this.state;
    return (
      <div 
        className="Game-field" 
        onClick={(event) => {
          this._getIndexCell(event)
         }
        }
      >
        <h3>Tic Tac Toe { winner
          ? `(Winner: ${winner})`
          : `(Turn: ${currentTurn})`
        } 
        </h3>

        <div 
          className="Ceil-container"
           
        >
          <Cell index="0" value={this._getCellText(this.state.cells[0])} />
          <Cell index="1" value={this._getCellText(this.state.cells[1])} />
          <Cell index="2" value={this._getCellText(this.state.cells[2])} />
        </div>

        <div 
          className="Ceil-container" 
        >
          <Cell index="3" value={this._getCellText(this.state.cells[3])} />
          <Cell index="4" value={this._getCellText(this.state.cells[4])} />
          <Cell index="5" value={this._getCellText(this.state.cells[5])} />
        </div>

        <div 
          className="Ceil-container" 
        >
          <Cell index="6" value={this._getCellText(this.state.cells[6])} />
          <Cell index="7" value={this._getCellText(this.state.cells[7])} />
          <Cell index="8" value={this._getCellText(this.state.cells[8])} />
        </div>
        <div className="btn-container"> 
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
    )
   
  }
}

export default Game;

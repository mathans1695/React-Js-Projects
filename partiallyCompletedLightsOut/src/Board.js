import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import { randomNumber } from './helpers';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
	nrows: 5,
	ncols: 5,
	chanceLightStartsOn: randomNumber()
  }

  constructor(props) {
    super(props);
	this.state = {
		board: this.createBoard()
	}
    // TODO: set initial state
	this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
	for(let i=0; i<this.props.nrows; i++) {
		let temp = new Array(5);
		board[i] = temp;
		for(let j=0; j<this.props.ncols; j++) {
			board[i][j] = false;
		}
	}
	
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it
	  
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
	
	flipCell(y, x);
	flipCell(y-1, x);
	flipCell(y+1, x);
	flipCell(y, x-1);
	flipCell(y, x+1);
	
	let numTrue = 0;
	for(let i=0; i<nrows; i++) {
		for(let j=0; j<ncols; j++) {
			if(board[i][j] !== false) {
				numTrue = 1;
			}
		}
	}
	
	if(numTrue === 0) {
		this.props.handleWon(true);
	} else {
		this.props.handleWon(false);
	}
	
	this.setState({board: board});

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won
  }


  /** Render game board or winning message. */

  render() {
	let { nrows, ncols } = this.props;
	let board = this.state.board;
	let tableArr = [];
	let row = [];
	
	for(let i=0; i<nrows; i++) {
		let temp = new Array(ncols);
		tableArr.push(temp);
		
		for(let j=0; j<ncols; j++) {
			tableArr[i][j] = <Cell key={`${i}-${j}`} isLit={board[i][j]} flipCellsAroundMe={this.flipCellsAround} coord={`${i}-${j}`}/>
		}
		
		row.push(<tr key={`row-${i}`}>{tableArr[i]}</tr>);
	}
	
	
	  
	return (
		<table className='Board'>
			<tbody>
				{row}
			</tbody>
		</table>
	);

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}


export default Board;

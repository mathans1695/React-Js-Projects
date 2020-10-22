import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import TotalPoints from "./TotalPoints";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
	  isUsed: {
		ones: false,
        twos: false,
        threes: false,
        fours: false,
        fives: false,
        sixes: false,
        threeOfKind: false,
        fourOfKind: false,
        fullHouse: false,
        smallStraight: false,
        largeStraight: false,
        yahtzee: false,
        chance: false
	  },
	  isRolling: false
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
	this.roll = this.roll.bind(this);
	this.toggleLocked = this.toggleLocked.bind(this);
	this.restartGame = this.restartGame.bind(this);
  }
  
  restartGame() {
	this.setState({
		locked: Array(NUM_DICE).fill(false),
		rollsLeft: NUM_ROLLS,
		scores: {
			ones: undefined,
			twos: undefined,
			threes: undefined,
			fours: undefined,
			fives: undefined,
			sixes: undefined,
			threeOfKind: undefined,
			fourOfKind: undefined,
			fullHouse: undefined,
			smallStraight: undefined,
			largeStraight: undefined,
			yahtzee: undefined,
			chance: undefined
		},
		isUsed: {
			ones: false,
			twos: false,
			threes: false,
			fours: false,
			fives: false,
			sixes: false,
			threeOfKind: false,
			fourOfKind: false,
			fullHouse: false,
			smallStraight: false,
			largeStraight: false,
			yahtzee: false,
			chance: false
		},
		isRolling: false
	});
	this.roll();
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
	this.setState({
		isRolling: true
	});
	
	setTimeout(() => {
		this.setState(st => ({
			dice: st.dice.map((d, i) =>
			st.locked[i] ? d : Math.ceil(Math.random() * 6)
			),
			locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
			rollsLeft: st.rollsLeft - 1,
			isRolling: false
		}));
	}, 1000);
    
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
	if(this.state.rollsLeft > 0) {
		this.setState(st => {
			return {locked: [
			...st.locked.slice(0, idx),
			!st.locked[idx],
			...st.locked.slice(idx + 1)
			]}
		});
	}
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
	  isUsed: { ...st.isUsed, [rulename]: true }
    }));
    this.roll();
  }

  render() {
	const restartCondition = !Object.values(this.state.isUsed).some(isUsed => !isUsed) && this.state.rollsLeft < 3;
	
	let restart;
	if(restartCondition) {
		restart = (
			<button
                className='Game-restart'
				onClick={this.restartGame}
            >
                Restart Game
            </button>
		);
	} else {
		restart = (
			<button
				className='Game-reroll'
				disabled={this.state.locked.every(x => x)}
				onClick={this.roll}
			>
				{this.state.rollsLeft < 3 
					? `${this.state.rollsLeft} Rolls Left`
					: "Start Game"
				}
			</button>
		);
	}
	
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
			  isRolling={this.state.isRolling}
			  rollsLeft={this.state.rollsLeft}
            />
            <div className='Game-button-wrapper'>
			  {restart}
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} isUsed={this.state.isUsed} rollsLeft={this.state.rollsLeft} />
		<TotalPoints scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;

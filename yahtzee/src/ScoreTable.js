import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore, isUsed, rollsLeft } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} isUsed={isUsed.ones} rollsLeft={rollsLeft} points="1 point per 1" />
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} isUsed={isUsed.twos} rollsLeft={rollsLeft} points="2 points per 2" />
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} isUsed={isUsed.threes} rollsLeft={rollsLeft} points="3 points per 3" />
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} isUsed={isUsed.fours} rollsLeft={rollsLeft} points="4 points per 4" />
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} isUsed={isUsed.fives} rollsLeft={rollsLeft} points="5 points per 5" />
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} isUsed={isUsed.sixes} rollsLeft={rollsLeft} points="6 points per 6" />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} isUsed={isUsed.threeOfKind} rollsLeft={rollsLeft} points="Sum all dice if 3 are the same" />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} isUsed={isUsed.fourOfKind} rollsLeft={rollsLeft} points="Sum all dice if 4 are the same" />
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} isUsed={isUsed.fullHouse} rollsLeft={rollsLeft} points="25 points for a full house" />
              <RuleRow name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} isUsed={isUsed.smallStraight} rollsLeft={rollsLeft} points="30 points for a small straight" />
              <RuleRow name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} isUsed={isUsed.largeStraight} rollsLeft={rollsLeft} points="40 points for a large straight" />
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} isUsed={isUsed.yahtzee} rollsLeft={rollsLeft} points="50 points for yahtzee" />
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} isUsed={isUsed.chance} rollsLeft={rollsLeft} points="Sum all the dice" />
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;
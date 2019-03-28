import React from "react";
import "../css/petRater.css";
import { ScoreCard } from "./ScoreCard";
import { Rater } from "./Rater";

class PetRater extends React.Component {
  state = { pro: 0, con: 0, index: 0 };

  getNewIndex = () => {
    return this.state.index === this.props.imageUrls.length - 1
      ? 0
      : this.state.index + 1;
  };

  onProClick = () => {
    this.setState(state => ({
      ...state,
      pro: state.pro + 1,
      index: this.getNewIndex()
    }));
  };

  onConClick = () => {
    this.setState(state => ({
      ...state,
      con: state.con + 1,
      index: this.getNewIndex()
    }));
  };

  render() {
    return (
      <div className={"petRater"}>
        <ScoreCard pro={this.state.pro} con={this.state.con} />
        <Rater
          imageUrl={this.props.imageUrls[this.state.index]}
          onProClick={this.onProClick}
          onConClick={this.onConClick}
        />
      </div>
    );
  }
}

export { PetRater };

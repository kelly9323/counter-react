import React, { Component } from 'react';
import Counter from './../Counter';
import styles from './CounterSection.module.scss'

class CounterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "",
    };
  }
//   stepHandler = (event) => {
//     this.setState({
//       step: event.target.value,
//     });
//   };

  stepHandler = (event) => {
    if (event.target.value > 0 && event.target.value < 1000000) {
      this.setState({
        step: event.target.value,
      });
    } 
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Counter step={this.state.step} />
        <h2>Step: {this.state.step}</h2>
        <input 
          onChange={this.stepHandler}
          className={styles.input}
          value={this.state.step}
          type="number"
          name="step"
          placeholder="enter your step"
        ></input>
        
      </div>
    );
  }
}

export default CounterSection;

import React, { Component } from "react";
import styles from "./Counter.module.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
      click: false,
    };
  }
  changeHandler = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  };
  clickHandler = () => {
    if (this.state.isAdd) {
      this.setState({
        count: this.state.count + Number(this.props.step),
      });
    } else {
      this.setState({
        count: this.state.count - Number(this.props.step),
      });
    }
  };
  render() {
    const { count, isAdd } = this.state;
    const buttonValue = isAdd ? "Add" : "Sub";
    return (
      <article>
        <h1 className={styles.header}>Counter</h1>
        <h2>{count}</h2>
        <div>
          <button className={styles.button} onClick={this.clickHandler}>
            {buttonValue}
          </button>
          <button className={styles.button} onClick={this.changeHandler}>
            Change Mode
          </button>
        </div>
      </article>
    );
  }
}

export default Counter;

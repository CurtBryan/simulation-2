import React, { Component } from "react";
import store, { UPDATE_HEY2 } from "../../store";

class Header extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      hey2: reduxState.hey2
    };
  }

  handleHeyChange(heyVal) {
    this.setState({
      hey2: heyVal
    });
  }

  saveChange() {
    store.dispatch({
      type: UPDATE_HEY2,
      payload: this.state.hey2
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Houser</h1>
          <div>
            <input
              defaultValue={this.state.hey2}
              onChange={e => this.handleHeyChange(e.target.value)}
            />
            <input />
            <button onClick={() => this.saveChange()}>Login</button>
          </div>
          <div>hey</div>
        </div>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import axios from "axios";

class Body1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/homes")
      .then(response => {
        this.setState({
          homes: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { homes } = this.state;
    const mappedHomes = homes.map(element => {
      return (
        <div key={element.id}>
          <div>
            <img src={element.image} />
            {console.log({ mappedHomes })}
          </div>
        </div>
      );
    });
    return <div>{mappedHomes}</div>;
  }
}

export default Body1;

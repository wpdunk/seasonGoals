import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Target = props => (
  <tr>
    <td className={props.target.target_completed ? "completed" : ""}>
      {props.target.target_description}
    </td>
    <td className={props.target.target_completed ? "completed" : ""}>
      {props.target.target_priority}
    </td>
    <td>
      <Link to={"/edit/" + props.target._id}>Edit</Link>
    </td>
  </tr>
);

export default class TargetList extends Component {
  constructor(props) {
    super(props);
    this.state = { targets: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/targets/")
      .then(response => {
        this.setState({ targets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  targetList() {
    return this.state.targets.map(function(currentTarget, i) {
      return <Target target={currentTarget} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Targets:</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.targetList()}</tbody>
        </table>
      </div>
    );
  }
}

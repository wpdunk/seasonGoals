import React, { Component } from "react";
import axios from "axios";

export default class EditTarget extends Component {
  constructor(props) {
    super(props);

    this.onChangeTargetDescription = this.onChangeTargetDescription.bind(this);
    this.onChangeTargetPriority = this.onChangeTargetPriority.bind(this);
    this.onChangeTargetCompleted = this.onChangeTargetCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      target_description: "",
      target_priority: "",
      target_completed: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/targets/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          target_description: response.data.target_description,
          target_priority: response.data.target_priority,
          target_completed: response.data.target_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTargetDescription(e) {
    this.setState({
      target_description: e.target.value
    });
  }

  onChangeTargetPriority(e) {
    this.setState({
      target_priority: e.target.value
    });
  }

  onChangeTargetCompleted(e) {
    this.setState({
      target_completed: !this.state.target_completed
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      target_description: this.state.target_description,
      target_priority: this.state.target_priority,
      target_completed: this.state.target_completed
    };
    console.log(obj);
    axios
      .post(
        "http://localhost:4000/targets/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3 align="center">Update Target</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.target_description}
              onChange={this.onChangeTargetDescription}
            />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.target_priority === "Low"}
                onChange={this.onChangeTargetPriority}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.target_priority === "Medium"}
                onChange={this.onChangeTargetPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.target_priority === "High"}
                onChange={this.onChangeTargetPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              id="completedCheckbox"
              type="checkbox"
              name="completedCheckbox"
              onChange={this.onChangeTargetCompleted}
              checked={this.state.target_completed}
              value={this.state.target_completed}
            />
            <label className="form-check-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>

          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Target"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

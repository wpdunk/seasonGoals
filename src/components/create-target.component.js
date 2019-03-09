import React, { Component } from "react";

export default class CreateTarget extends Component {
  constructor(props) {
    super(props);

    this.onChangeTargetDescription = this.onChangeTargetDescription.bind(this);
    this.onChangeTargetPriority = this.onChangeTargetPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      target_description: "",
      target_priority: "",
      target_completed: false
    };
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

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Target Description: ${this.state.target_description}`);
    console.log(`Target Priority: ${this.state.target_priority}`);

    this.setState({
      target_description: "",
      target_priority: "",
      target_completed: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Target</h3>
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

          <div className="form-group">
            <input
              type="submit"
              value="Create Target"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

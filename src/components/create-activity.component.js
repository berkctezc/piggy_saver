import React, { Component } from "react";
import DatePicker from 'react-datepicker';


export default class CreateActivity extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      desc: "",
      price: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user"
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const activity = {
      username: this.state.username,
      desc: this.state.desc,
      price: this.state.price,
      date: this.state.date
    };
    console.log(activity);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Payment Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Payment Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

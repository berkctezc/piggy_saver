import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Activity = props => (
    <tr>
        <td className="text-capitalize">{props.activity.username}</td>
        <td>{props.activity.desc}</td>
        <td className="price">{props.activity.price}₺</td>
        <td>{props.activity.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.activity._id}>🖋️</Link> | <a href='#' onClick={() => { props.deleteActivity(props.activity._id) }}>🗑️</a>
        </td>

    </tr>
)


export default class ActivityList extends Component {
    constructor(props) {
        super(props);

        this.deleteActivity = this.deleteActivity.bind(this);

        this.state = { activities: [] };
    }

    totalPrice() {
        const priceArray = document.body.querySelectorAll(".price");
        var sum = 0;
        for (var i = 0; i < priceArray.length; i++) {
            sum += parseInt(priceArray[i].innerText);
            console.log(sum);
        };
       
        return sum;
    }

    componentDidMount() {
        axios.get('http://localhost:5000/activities')
            .then(response => {
                this.setState({ activities: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteActivity(id) {
        axios.delete('http://localhost:5000/activities/' + id)
            .then(res => console.log(res.data));
        this.setState({
            activities: this.state.activities.filter(el => el._id !== id)
        })
    }

    activityList() {
        return this.state.activities.map(currentActivity => {
            return <Activity activity={currentActivity} deleteActivity={this.deleteActivity} key={currentActivity._id} />;
        })
    }


    render() {
        return (
            <div>
                <h3 className="text-center">Previous Payments</h3>
                <table className="table table-hover table-dark">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.activityList()}
                    </tbody>
                    <tr>Total = {this.totalPrice()}</tr>
                </table>
            </div>

        );
    }
}

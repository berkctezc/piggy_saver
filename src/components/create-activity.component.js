import React, { Component } from "react";

export default class CreateActivity extends Component {
  constructor(props){
      super(props);

      this.state = {
          username : '',
          desc:'',
          price:0,
          date: new Date(),
          users:[]
      }
  }

  onChangeUsername(e){
      this.setState({
          username:e.target.value
      });
  }

  onChangeDesc(e){
      this.setState({
          desc:e.target.value
      });
  }

  onChangePrice(e){
      this.setState({
          price:e.target.value
      });
  }

  onChangeDate(date){
      this.setState({
          date:date
      });
  }

  onSubmit(e){
      e.preventDefault();
      
      const activity = {
          username: this.state.username,
          desc:this.state.desc,
          price:this.state.price,
          date:this.state.date
      }
      console.log(activity);
      
  }
   
    render() {
    return (
    
        <div>
            <p>You are on Create Activity Component</p>
        </div>
         
    );
  }
}

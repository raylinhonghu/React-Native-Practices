import React, { Component } from 'react';
import User from './User';

class Users extends Component {

// reseved word
  state = {
    //property
    users: [
      {name: "John", age:20},
      {name: "Jill", age:30},
      {name: "Peter", age:40},
    ],
    title: "User List",
    key: 1
  };

  makeMeYounger = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      if(tempUser.age>0){
        tempUser.age -= 10;
      }

      return tempUser;
    });
    this.setState({newState});
  }



  render(){
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
        <br/>
        <h1> {this.state.title} </h1>

        {
          this.state.users.map((user)=>{

            return <User key={user.name} age={user.age}> {user.name} </User>
          })
        }

        <h2> {this.props.children} + {this.props.game}</h2>
      </div>
    )
  }
}

export default Users;

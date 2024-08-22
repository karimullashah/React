import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url:"null"
        }
    };

    console.log(this.props.name + "Child Constructor Called");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child componentDidMount Called");

    const result = await fetch("https://api.github.com/users/karimullashah");

    const userData = await result.json();
    
    console.log(userData);
    this.setState({userInfo: userData});
  }

  componentDidUpdate(){
    console.log("ComponentDidUpdate called");
  }

  componentWIllUnmount(){
    console.log("ComponentWillUnmount called");
  }

  render() {
    // const { name, location } = this.props;
    const {name,location,avatar_url} = this.state.userInfo;
    // debugger;
    console.log("Child render Called", name);
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @karim</h4>
      </div>
    );
  }
}

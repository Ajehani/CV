import React, { Component } from "react";
class General extends Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = this.props.general;
  };
  type = e => { // generalise this method
    let data = e.target.getAttribute("data-type");
    console.log(e.target.parentElement.parentElement.getAttribute("data-num"))
    this.setState({[data]:e.target.value}); // magic is here
    this.props.changeState("general",this.state);
  }; 
  render() {
    const template = (
      <div data-num={this.count} className="formChildren">
    <div>
      <label>Name: </label>
      <input onChange={this.type} data-type="name" value={this.state.name}/>
    </div>
    <div>
      <label>Email: </label>
      <input onChange={this.type} data-type="email" value={this.state.email}/>
    </div>
    <div>
      <label>Phone: </label>
      <input onChange={this.type} data-type="phone" value={this.state.phone}/>
    </div>
    <div>
      <label>Address: </label>
      <input onChange={this.type} data-type="address" value={this.state.address}/>
    </div>
    <div>
      <label>Profile Pic URL: </label>
      <input onChange={this.type} data-type="img" value={this.state.img}/>
    </div>
    </div>
    );
    return (
      <div className="formChildren">
          <h2>General Information:</h2>
          {template}
      </div>
    );
  }
}
export default General;

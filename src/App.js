import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Profile from './Components/Profile';
import './App.css';
import { Button, Nav } from 'react-bootstrap';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show :false};
  }
  toggle=() =>{
    this.setState({show:!this.state.show});
  }
  render() {
    return (
      <div>
<div className='cart'>
<Button onClick={this.toggle} variant="success">TOGGLE</Button>{' '}

  {this.state.show &&  <Profile/>}
</div>
<div>
  <Nav/>
</div>
<div>


</div>
      </div>
    )
  }
}

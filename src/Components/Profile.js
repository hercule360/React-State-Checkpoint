import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {Person :{FullName :' MOHAMED jihed  Gharbi ' ,
         Bio: 'gomycode-React State Checkpoint' ,
        imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdAg3k1-_ddaCF2NYmNUaZtfRkF4OsbF13cn_1AIr1A&s' , 
        Profesionel : ' When the show state is true, the persons profile will appear ' 
      } };
      }
    


  componentDidMount() {
    document.title = `Vous avez cliqué ${this.state.count} fois`;
  }
  componentDidUpdate() {
    document.title = `Vous avez cliqué ${this.state.count} fois`;
  }


  render() {
    return (
      <div>
        <div>
        <p>conteur entrain de calclue  {this.state.count} fois</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Conteur  ici
        <span> 0</span>
        </button>
      </div>
      <div>
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={this.state.Person.imgSrc}/>
      <Card.Body>
        <Card.Title>{this.state.Person.FullName} </Card.Title>
        <Card.Text>
        {this.state.Person.Profesionel}
        </Card.Text>
        <Card.Text>
        {this.state.Person.Bio}
        </Card.Text>
        <Button variant="primary">clic ici pour voir </Button>
      </Card.Body>
    </Card>
</div>
</div>
      
    )
  }
}

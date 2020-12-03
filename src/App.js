import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './index.css'

//create a todo list


class App extends React.Component {
  handleClick() {
    
  }

  render() {
    return (

      <div className="main">
        <Card style={{ width: '18rem'}}>
          <Card.Img 
            height={110}
            width={110}
            variant="top" 
            src="./image/scaling.jpg" 
          />
          <Card.Body>
            <Card.Title>Initial Post</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button 
              variant="primary"
              onClick={this.handleClick}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

    ) 
  }
}


export default App;

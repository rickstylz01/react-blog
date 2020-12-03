import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './BlogCard.css';


class Blog extends React.Component {
  handleClick = (e) => {
    console.log('clicked')
  }

  render() {
    return (
      <div className="Blog">
        <Card style={{ width: '20rem' }}>
          <Card.Img
            height={200}
            width={110}
            variant="top"
            src={this.props.imageSource}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Blog
import React, { Component } from 'react';
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
  } from 'reactstrap';

export class Learn extends Component {
    render() {
        return (
            <div>
                <Card body style={{ backgroundColor: '#555', borderColor: '#333', width: '18rem', display: 'block' }}>
                    <CardImg top width="100%" src={ require('./assets/xboxController.jpg') } alt="Picture of Xbox controller" />
                    <CardBody>
                        <CardTitle>Games</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width: '18rem', display: 'block' }}>
                    <CardImg top width="100%" src={ require('./assets/youtubeIcon.png') } alt="Youtube Logo" />
                    <CardBody>
                        <CardTitle>YouTube Tutorials</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
                <Card body inverse style={{ backgroundColor: '#111', borderColor: '#333', width: '18rem' }}>
                    <CardImg top width="100%" src={ require('./assets/onlineCourses.jpg') } alt="Computer course" />
                    <CardBody>
                    <CardTitle>Online Courses</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
                <Card body inverse style={{ backgroundColor: '#999', borderColor: '#333', width: '18rem' }}>
                    <CardImg top width="100%" src={ require('./assets/books.jpg') } alt="Books on a shelf" />
                    <CardBody>
                    <CardTitle>Books</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Learn;

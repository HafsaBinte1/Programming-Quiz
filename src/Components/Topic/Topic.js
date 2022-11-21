import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Topic.css'
const Topic = ({ topic }) => {
    // console.log(topic)
    const { logo, name, total, id } = topic
    console.log(topic)
    return (
        <div className='card-topic'>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={logo} /> */}
                <img className='img-fluid bg-dark' src={logo} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <p>Questions: {total}</p>
                </Card.Body>
                <Link to={`/quizeQuestions/${id}`} className='card'>Start Practice</Link>
            </Card>
        </div>
    );
};

export default Topic;

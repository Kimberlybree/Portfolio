import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


function Projects(props) {
    return (
        <div className="projectsClass">

            <CardGroup>
            <Card>
                <Card.Body>
                <Card.Img variant="top"/>
                <Card.Title>
                <h1>Javascript Flashcard Deck</h1>
                </Card.Title>
                <Card.Text>
                An Educational Flashcard deck to practice Javascript vocabulary.
                <button> <a className="flashcards" href="https://kimberlybree.github.io/Flashcard-Game/">Play here!</a></button>
                </Card.Text>
                </Card.Body>
             
            </Card>
            <Card>
                <Card.Body>
                {/* <Card.Img variant="top" src="/Planning.md/Curiosity.png" /> */}
                <Card.Title><h1>Curiosity Rover Photos using API</h1></Card.Title>
                <Card.Text>
                This project is built using React App, Javascript, HTML, CSS. The information is retrieved from NASA's open API source to render images taken on mars from an
                 one of the 7 cameras on an active mission from the rover.
                </Card.Text>
        
                </Card.Body>
                
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="/Planning.md/Porto.png" /> */}
                <Card.Body>
                <Card.Title><h1>Porto App</h1></Card.Title>
                <Card.Text>
                The inspiration behind this project was to fill a need for a user-friendly website that connects a recruiter to a potential candidate based on their history and projects. The app allows you to search by name, title, or location and will pull up a user profile with projects and contact/resume info.  This was a group project was built front end and back end using React, React Bootstrap, Heroku, Cors, Express, Mongoose, and more. 
                   
                </Card.Text>
                </Card.Body>
           
            </Card>
            </CardGroup>


        

            

        </div>
    );
}

export default Projects;
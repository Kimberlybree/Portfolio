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
                Javascript Flashcard Deck
                </Card.Title>
                <Card.Text>
                Created a JavaScript learning game using flashcards. This consisted of HTML, CSS, JavaScript, and using DOM Manipulation. The game contains an introduction pop-up modal, clickable flashcard container, a countdown timer, and a desk-themed CSS styling. <br/> 
                <button> <a className="flashcards" href="https://kimberlybree.github.io/Flashcard-Game/"> Play here!</a></button>
                </Card.Text>
                </Card.Body>
             
            </Card>
            <Card>
                <Card.Body>
                {/* <Card.Img variant="top" src="/Planning.md/Curiosity.png" /> */}
                <Card.Title>API React App</Card.Title>
                <Card.Text>
                Connected NASA’s open source API to build a kid-friendly website that renders images from Curiosity’s Rover on Mars. This was created using React-App and bootstrap
                </Card.Text>
        
                </Card.Body>
                
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="/Planning.md/Porto.png" /> */}
                <Card.Body>
                <Card.Title>Portfolio React App</Card.Title>
                <Card.Text>
                A Full-Stack portfolio platform that allows users to add and view profiles with their work. This was created by 4 software engineers for CRUD functionality, add and search functionality using React, bootstrap, express, handlebars, and mongoose. 

                </Card.Text>
                </Card.Body>
           
            </Card>
            </CardGroup>


        

            

        </div>
    );
}

export default Projects;
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


function Projects(props) {
    return (
        <div className="projectsClass">

            <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>
                    Javascript Flashcard Deck
                    </Card.Title>
                <Card.Text>
                An Educational Flashcard deck to practice Javascript vocabulary. <br/>
                <button> <a class="flashcards" href="https://kimberlybree.github.io/Flashcard-Game/">Play here!</a></button>
                </Card.Text>
                </Card.Body>

            </Card>
            <Card>

                <Card.Body>
                {/* <Card.Img variant="top" src="/Planning.md/Curiosity.png" /> */}
                <Card.Title>API React App</Card.Title>
                <Card.Text>
                Connected NASA’s open source API to build a kid-friendly website that renders images from Curiosity’s Rover on Mars. This was created using React-App and bootstrap.
                </Card.Text>
        
                </Card.Body>
                
            </Card>
            <Card>
                {/* <Card.Img variant="top" src="/Planning.md/Porto.png" /> */}
                <Card.Body>
                <Card.Title>Full-Stack Portfolio Site</Card.Title>
                <Card.Text>
                A Full-Stack portfolio platform that allows users to add and view profiles with their work. This was created by 4 software engineer students for CRUD functionality, add and search functionality using React, bootstrap, express, handlebars, and mongoose. 

                </Card.Text>
                </Card.Body>
           
            </Card>

            <Card>
                {/* <Card.Img variant="top" src="/Planning.md/Porto.png" /> */}
                <Card.Body>
                <Card.Title>E-Commerce Shopify API</Card.Title>
                <Card.Text>
                I am currently building a fully functional e-commerce website mock up with two fellow Software Engineers utilizing technologies such as React, Next.js, Tailwind CSS, and Shopify API. We are using Figma for Wire framing and design, and GitHub Project Boards and Trello for project plan our final product.

                </Card.Text>
                </Card.Body>
           
            </Card>
            </CardGroup>


        

            

        </div>
    );
}

export default Projects;
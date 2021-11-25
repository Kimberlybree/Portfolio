import React from 'react';
import { Route } from 'react-router-dom';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import LandingPage from './Components/LandingPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function App(props) {
    return (
       <div>
        <div className="App">
        <Navbar bg="light" variant="light">
            <Container>
            <Nav className="me-auto">
            <Nav.Link href="/LandingPage">Welcome to My Portfolio!</Nav.Link>
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
        
    
            </Nav>
            </Container>
        </Navbar>
        <br />
     
                <Route exact path="/LandingPage"
                    component={LandingPage}/>  

                <Route exact path="/Contact"
                    component={Contact} /> 

                
                <Route exact path="/AboutMe"
                    component={AboutMe} /> 

                <Route exact path="/Projects"
                    component={Projects} /> 


        </div>
    </div>
    );
}

export default App;
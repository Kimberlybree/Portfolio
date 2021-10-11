import React from 'react';
import { Route, Link } from 'react-router-dom';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact';
import Main from './Components/Main';
import AboutMe from './Components/AboutMe';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function App(props) {
    return (
       <div>
        <div className="App">
            {/* <button variant="aboutButton"> <Link to="/Main">Main</Link></button> */}
            {/* <button variant="contactButton"> <Link to="/Contact">Contact </Link> </button> */}
            {/* <button variant="resumeButton"><a href='https://www.canva.com/design/DAEr_RHv7wY/4GuIItHKvARb2tjTFPrd3Q/view?utm_content=DAEr_RHv7wY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'>Resume</a></button>      
            <button variant="projectsButton"> <Link to="/Projects"> Projects </Link> </button>
        
            <> */}
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/Main">Welcome to My Portfolio!</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/AboutMe">About Me</Nav.Link>
            <Nav.Link href="https://www.canva.com/design/DAEr_RHv7wY/4GuIItHKvARb2tjTFPrd3Q/view?utm_content=DAEr_RHv7wY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Resume</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
    
    
            </Nav>
            </Container>
        </Navbar>
        <br />
     
                <Route exact path="/"
                    component={Main}/>  

                <Route exact path="/Contact"
                    component={Contact} /> 

                
                <Route exact path="/AboutMe"
                    component={AboutMe} /> 

                <Route exact path="/Projects"
                    component={Projects} /> 
            
                <Route exact path="/Main"
                    component={Main} /> 


        </div>
    </div>
    );
}

export default App;
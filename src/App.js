import React from 'react';
import { Route, Link } from 'react-router-dom';
import Projects from './Components/Projects.jsx';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Main from './Components/Main';


function App(props) {
    return (
       <div>
        <div className="App">
            <button variant="contactButton"> <Link to="/Contact">Main</Link></button>
            <button variant="aboutButton"> <Link to="/AboutMe"> About Me</Link> </button>
            <button variant="resumeButton"><a href='https://www.canva.com/design/DAEr_RHv7wY/4GuIItHKvARb2tjTFPrd3Q/view?utm_content=DAEr_RHv7wY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'>Resume</a></button>      
            <button variant="projectsButton"> <Link to="/Projects"> Projects </Link> </button>
            
        
            
                <Route exact path="/Main"
                    component={Main} />  

                <Route exact path="/AboutMe"
                    component={AboutMe} /> 

                <Route exact path="/Projects"
                    component={Projects} /> 
            
                <Route exact path="/Contact"
                    component={Contact} /> 


        </div>
    </div>
    );
}

export default App;
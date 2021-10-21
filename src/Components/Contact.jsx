import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';


function Contact(props) {
    return (
        <div className="contactButtons">
            <button className="linkedInButton"><a className="linked" href="https://www.linkedin.com/in/kimberlybree/"><FaLinkedin/> LinkedIn</a></button>
            <button className="gitHubButton"><a className="gitHub" href="https://github.com/Kimberlybree"><FaGithub/> GitHub</a></button>
            <button variant="emailButton"><a className="mailto" href="mailto: Kimberlybreek@gmail.com"><FaMailBulk /> E-Mail</a> </button>
            <button variant="callButton"><a className="tel" href="tel: 310-867-9394"><FaPhoneSquareAlt/> Call</a></button>     
            
        </div>
    );
}

export default Contact;
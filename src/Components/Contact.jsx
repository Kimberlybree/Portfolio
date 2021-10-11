import React from 'react';

function Contact(props) {
    return (
        <div className="contactButtons">
            <button variant="emailButton"><a className="mailto" href="mailto: Kimberlybreek@gmail.com">E-Mail</a> </button>       
            <button variant="callButton"><a className="tel" href="tel: 310-867-9394">Call</a> </button>     
            <button className="linkedInButton"><a className="linked" href="https://www.linkedin.com/in/kimberlybree/">LinkedIn</a></button>
            <button className="gitHubButton"><a className="gitHub" href="https://github.com/Kimberlybree">GitHub</a></button>
            
        </div>
    );
}

export default Contact;
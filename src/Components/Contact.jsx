import React from 'react';

function Contact(props) {
    return (
        <div>
            <button variant="emailButton"><a class="mailto" href="mailto: Kimberlybreek@gmail.com">E-Mail</a> </button>       
            <button variant="callButton"><a class="tel" href="tel: 310-867-9394">Call</a> </button>     
            <button className="linkedInButton"><a class="linked" href="https://www.linkedin.com/in/kimberlybree/">LinkedIn</a></button>
            <button className="gitHubButton"><a class="gitHub" href="https://github.com/Kimberlybree">GitHub</a></button>
        </div>
    );
}

export default Contact;
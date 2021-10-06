import React from 'react';

function AboutMe(props) {
    return (
    <div className="aboutMe">
        <h2>I am a Full-Stack Software Engineer</h2>

        <h1>Technologies:</h1>
        <ul> 
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Python</li>
            <li>Django</li>
            <li>MongoDB, Mongoose</li>
            <li>PostgreSQL</li>
            <li>Github</li>
            <li>VSCode</li>
        </ul>

        <h1>Valuable Skills:</h1>

        <ul> 
            <li>Wire framing</li>
            <li>Team Collaboration using Git Workflow, Slack, Discord</li>
            <li>Organized Note Taking</li>
            <li>Strong Communication</li>
            <li>Planning Skills using Project Boards, Trello</li>
        </ul> 

        <h1>Hobbies & Interests:</h1>
        <ul>
            <li>Learning new programming languages</li>
            <li>Outdoor activities</li>
            <li>Tech Podcasts</li>
            <li>Travel</li>
            <li>Women in tech/STEM</li>
            <li>Electric Vehicles</li>
            <li>Sustainability</li>
        </ul>

</div>
    );
}

export default AboutMe;
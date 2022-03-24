import React from 'react';


const Projects = () => {
    return (
        <div className='page-div'>
            <div className='page page-fade-in'>
                <h2 className='page-title'>About Me</h2>
                <div className='page-text'>
                    Never knew people read these, how interseting! Hi, im a thirteen year old from VA and a full stack Web Developer (not working of course, just for fun). 
                    Some of my hobbies are cricket, swimming, basketball, and watching TV.
                    My journey began when I started to learn Java, basic OOP patterns and inheritence/polymorphism facinated me. 
                    As a former Java developer himself, my dad quickly caught on to my interests, and started to teach me new concepts in java.
                    One of those new concepts was the MYSQL database, I started to play around with connections using Java JDBC drivers and databases running on localhost.
                    My dad then taught me the basics of HTTP, and this absolutely blew my mind away. He taught me how to Java servlets and respond to a request with a jsp page. 
                    The sheer fact that I could create dynamic content my connecting it to the SQL databases that I learnt before was amazing.
                    I then went on a rampage with web technologies. With my previous knowledge of Javascript, 
                    I learnt frontend frameworks like React (the one that this site is made with), Spring, JPA, Postgre SQL, NodeJS (not really a web framework but learnt it because I wanted to learn express), express, mongodb, etc.
                    After I was confident in my ability to make web applications, I needed a way to push them to a production enviornment.
                    I experimented with tools like github pages, AWS, heroku, google, and just straight up exposing ports on my network and portforwarding them to a rasberry pi running a docker image of my app.
                </div>
            </div>
            
        </div>
    )
}

export default Projects;
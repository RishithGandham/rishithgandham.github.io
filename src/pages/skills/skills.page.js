import React from 'react';


const Skills = () => {

    
    const skills = {
        languagesAndFramworks: ['javascript-plain', 'nodejs-plain',  'html5-plain', 'react-original',  'css3-plain', 'java-plain', 'spring-plain', 'unity-original', 'npm-original-wordmark'],
        databases: ['mysql-plain', 'mongodb-plain', 'postgresql-plain'],
        OS: ['windows8-plain', 'ubuntu-plain'],
        servicesAndPaaS: ['docker-plain', 'amazonwebservices-original', 'heroku-original'],
        devTools: ['vscode-plain', 'git-plain', 'github-plain', 'intellij-plain', 'bash-plain', 'firefox-plain', 'chrome-plain']

    }


    return (
        <div className='page-div'>
            <div className='page page-fade-in'>
                <h2 className='page-title text-bold'>My Skills</h2>
                <div className='page-text'>
                    <div id='languages'>
                        <h4>Languages & Frameworks</h4> 
                        <br/>
                        {skills.languagesAndFramworks.map(language => (<i  key={language}className={'devicon-'+ language + ' change-icon-size colored'} ></i>))}
                    </div>
                    <br/>
                    <div id='databases'>
                        <h4>Databases</h4> 
                        <br/>
                        {skills.databases.map(database => (<i key={database} className={'devicon-'+ database + ' change-icon-size colored'}></i>))}
                    </div>
                    <br/>
                    <div id='OS'>
                        <h4>OS</h4> 
                        {skills.OS.map(os => (<i className={'devicon-'+ os + ' change-icon-size colored'} key={os}></i>))}
                    </div>
                    <br/>
                    <div id='other-services'>
                        <h4>Other Services</h4>
                        <br/>
                        {skills.servicesAndPaaS.map(service => (<i className={'devicon-'+ service + ' change-icon-size colored'} key={service}></i>))}
                    </div>
                    <br/>
                    <div id='dev-tools'>
                        <h4>Developer Tools</h4>
                        <br/>
                        {skills.devTools.map(tool => (<i className={'devicon-'+ tool + ' change-icon-size colored'} key={tool}></i>))}
                    </div>
                    
                </div>
            </div>
            
        </div> )
}

export default Skills;
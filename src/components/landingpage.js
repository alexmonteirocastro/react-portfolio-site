import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" 
                            alt="avatar"
                            className="avatar-img"/>
                            <div className="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTML5/CSS3 | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
                                <div className="social-links">
                                    {/*Linkedin*/}
                                    <a href="#!" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>
                                    {/*GitHub*/}
                                    <a href="#!" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                    {/*Free Code Camp*/}
                                    <a href="#!" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>
                                    {/*Youtube*/}
                                    <a href="#!" 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <i className="fa fa-youtube-square" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;
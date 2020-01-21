import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Hector from '../Static/hector.png'
class landing extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col = {12}>
                <img className = "hector-img" src = {Hector} alt = "Hector"/>
                <div className = "banner-text"> 
                <h1><center>Computer Science Student</center>
                </h1>
                <hr/>
                <p>
                <center>HTML/CSS | BootStrap | Javascript | React | NodeJS | Wordpress | MySQL | Python | Java  </center>
                </p>
                
                <div className ="social-links">
                    {/*Github*/}
                    <a href = "https://github.com/hmendoza23" target ="_blank" rel = "noopener noreferrer">
                        <i className = "fa fa-github" areia-hidden = "true"></i>
                    </a>
                    {/*Linkedin*/}
                    <a href = "https://www.linkedin.com/in/hector-mendoza-4a10b2195/" target ="_blank" rel = "noopener noreferrer">
                        <i className = "fa fa-linkedin" areia-hidden = "true"></i>
                    </a>
                    <a href = "https://github.com/hmendoza23" target ="_blank" rel = "noopener noreferrer">
                        <i className = "far fa-file" areia-hidden = "true"></i>
                    </a>
                </div>
                </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default landing;
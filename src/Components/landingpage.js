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
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default landing;
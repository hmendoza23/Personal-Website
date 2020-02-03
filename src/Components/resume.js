import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Resume extends Component{
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
            <Grid className = "resume-grid">
            
                <Cell col = {12}>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;
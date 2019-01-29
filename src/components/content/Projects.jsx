import React from 'react';
import { Typography, Paper } from '@material-ui/core/';
import YouTube from 'react-youtube';
import Img from 'react-image';
import unis_logo from './img/unis_logo.png'

const styles = {
    Paper: {
        padding: 20,
        margin: 10,
    }
}

export default props =>
    <div>
        <Typography variant='h3'>
            Projects
            </Typography>
        <p>
            Here you can see my projects.
            </p>
        <Paper>
            <YouTube videoId="2osKNdVObbI" >
            </YouTube>
        </Paper>
        <Paper>
            <Img src={unis_logo} alt="UNIS"  style={{width:"100 vw"}}/>
        </Paper>
        <Paper>
            <a href="https://github.com/Shkamp?tab=repositories">My Github page</a>
        </Paper>
    </div>
import React from 'react';
import { Typography, Paper } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import Img from 'react-image';

const styles = {
    Paper: {
        padding: 20,
        margin: 10,
    }
}

export default props =>
    <div>
        <Typography variant='h3'>
            About me
        </Typography>
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Img src="https://imgflip.com/s/meme/Doge.jpg"></Img>
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    I am a doggo who enjoys coding and playing fetch.
                </Paper>
            </Grid>

        </Grid>
        

    </div>
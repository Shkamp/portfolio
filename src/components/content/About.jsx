import React from 'react';
import { Typography, Paper } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';

const styles = {
    Paper: {
        padding: 20,
        margin: 10,
    }
}

export default props =>
    <div>
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    Left pane
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    Right pane
                </Paper>
            </Grid>

        </Grid>
        <Typography variant='display4'>
            About me
        </Typography>

    </div>
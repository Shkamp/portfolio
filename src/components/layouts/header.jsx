import React from 'react';
/* import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'; */
import { AppBar, Toolbar, Typography } from '@material-ui/core/';



export default class Header extends React.Component{
    render() {
        return (
            <AppBar position="sticky" style={{backgroundColor:'black'}}>
              <Toolbar>
                <Typography variant="headline" style={{color:'gray'}}>
                  Leo Gombač
                </Typography>
              </Toolbar>
            </AppBar>);
    }
}
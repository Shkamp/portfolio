import React from 'react';
/* import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'; */
import { Button, Tab, Tabs, AppBar, Toolbar, Typography } from '@material-ui/core/';



export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this);
    this.setLanding = this.setLanding.bind(this);

    this.state = {
      value: this.props.currentPage
    }
  }

  setPage(e, value) {
    console.log(value);
    const index = e.target.value;
    this.props.changePage(value);
    this.setState({
      value: value
    })
  }

  setLanding(e) {
    this.setPage(e, 4);
  }

  render() {
    return (
      <AppBar position="sticky" variant='text' style={{ backgroundColor: 'black' }}>
        <Toolbar>


          <Tabs
            value={this.state.value}
            onChange={this.setPage}

            centered
          >
            <Tab label="Leo Gombač"></Tab>
            <Tab label="About" />
            <Tab label="CV" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>);
  }
}
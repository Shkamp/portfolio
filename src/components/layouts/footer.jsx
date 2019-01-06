import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { positions } from '@material-ui/system';


export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.setPage = this.setPage.bind(this);
        
        this.state = {
            value : this.props.currentPage
        }
    }

    setPage(e, value){
        console.log(value);
        const index = e.target.value;
        this.props.changePage(value);
        this.setState({
            value : value
        })
    }
    render() {
        return (
            <Paper >
                <Tabs
                    value ={this.state.value}
                    onChange = {this.setPage}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    
                    <Tab label="Landing Page" />
                    <Tab label="About" />
                    <Tab label="CV" />
                    <Tab label="Projects" />
                </Tabs>
            </Paper>);
    }
}
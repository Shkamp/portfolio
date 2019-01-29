import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { positions } from '@material-ui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faGitlab, faFacebook } from '@fortawesome/free-brands-svg-icons'

const style = {
    position: 'fixed',
    bottom : '0',
    align : 'center'
}

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        //this.setPage = this.setPage.bind(this);
        
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
            <Paper style={style}>
                
                <Tabs            
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    
                    <Tab target="_blank" href="https://www.linkedin.com/in/leo-gomba%C4%8D-9694b141/" label={<FontAwesomeIcon icon={faLinkedin} />}> </Tab>
                    <Tab target="_blank" href="https://github.com/shkamp" label={<FontAwesomeIcon icon={faGithub} />} />
                    <Tab target="_blank" href="https://gitlab.com/shkamp" label={<FontAwesomeIcon icon={faGitlab} />} />
                   
                </Tabs>
            </Paper>);
    }
}
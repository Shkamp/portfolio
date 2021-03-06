import React, { Component } from 'react';
import './App.css';
import { Header, Footer } from './components/layouts'
import Landing from './components/content/Landing'
import About from './components/content/About'
import Resume from './components/content/Resume'
import Projects from './components/content/Projects'
import Contact from './components/content/Contact'


/* import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import darkBaseTheme from 'material-ui/core/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/core/styles/getMuiTheme'; */

const pages = {
    0: < Landing />,
    1: < About / > ,
    2: < Resume / > ,
    3: < Projects / >,
    4: < Contact / >,
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentIndex: 0
        }
        this.changePage = this.changePage.bind(this);
    }
    changePage(index) {
        console.log(index);
        this.setState({
            contentIndex: index
        })

    };

    currentPage(key) {
        return pages[this.state.contentIndex]
    }

    render() {
        return (

            <div className = "App"
            style = {
                { height: '100vh' } } >
            <
            Header currentPage = { this.state.contentIndex }
            
            changePage = { this.changePage } / > { this.currentPage(this.state.contentIndex) } <
            Footer style = {
                { bottom: 0 } }
            currentPage = { this.state.contentIndex }
            changePage = { this.changePage }
            /> <
            /div>

        );
    }
}

export default App;
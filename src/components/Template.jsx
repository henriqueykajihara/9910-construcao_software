import React, { Component } from 'react'; 
import '../styles/global/base.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Routes from '../app/Routes';

class Template extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false,
        }
        this.sideNavOpen = this.sideNavOpen.bind(this);
    }

    sideNavOpen (newState) {
        this.setState({
            expanded: newState
        })
    }

    render () {
        return (
            <div className="main-wrapper">
                <Header />
                <div id="main-container" className={`position-relative ${this.state.expanded ? 'side-nav-expanded' : ''}`}>
                    <Sidebar
                        expanded={this.state.expanded}
                        sideNavOpen={this.sideNavOpen}
                    />
                    <div className={`container h-100`} >
                        <Routes />
                    </div>
                </div>
            </div>
        );
    }
}

export default Template;
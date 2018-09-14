import React, { Component } from 'react';
import { render } from 'react-dom';
import SideBar from './Containers/SideBarContainer';
import MainContent from './Containers/MainContentContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

  }

  render() {
    return(
      <div className = "container-fluid">
            <div className="row">
              <SideBar/>
              <MainContent/>
            </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

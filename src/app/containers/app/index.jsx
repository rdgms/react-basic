import { observer } from 'mobx-react';
import React, { Component } from 'react';
import logo from './logo-mescla.png';

@observer(['todo'])
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: undefined,
      },
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="header">
          <img alt="Mescla" className="header__logo" src={logo} />
        </div>
        <div className="menu btn-group" role="group" >
          <a href="#state" className="btn btn-default">state example</a>
          <a href="#event" className="btn btn-default">event binding example</a>
          <a href="#mobx" className="btn btn-default">
            simple mobx example
            {this.props.todo.count && <div>{this.props.todo.count}</div>}
          </a>
        </div>
        <div className="wrapper">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

App.propTypes = { todo: React.PropTypes.func };

export default App;

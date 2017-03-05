import React from 'react';

class Hi extends React.Component {

  constructor() {
    super();

    this.state = {
      msg: 'Hello',
    };
  }

  render() {
    return (
      <div>
        <h1>React state example</h1>
        {this.state.msg}
      </div>
    );
  }
}

export default Hi;

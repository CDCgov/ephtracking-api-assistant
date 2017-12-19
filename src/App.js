import React, { Component } from 'react';

import SelectContentArea from './components/SelectContentArea';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title"> EPH Tracking API Assistant</h1>
          <p className="subtitle">
            Easily create API statements to access CDC's Environmental Public Health Tracking API
          </p>
        </div>
        <section className="section is-large">
          <SelectContentArea />
        </section>
      </section>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';

class Contentareas extends Component {
  constructor(props) {
    super(props);    
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked
    });
  }

  render() {
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/contentareas/json`
    return (
      <Fragment>
        <h1 className="title">Retrieving List of all Content Areas</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/contentareas/{'{'}returnType{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>        
        <hr />
        <Preview url={url} />
      </Fragment>
    );
  }
}

export default Contentareas;

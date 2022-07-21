import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import WithRouter, { IWithRouterProps } from './WithRouter'
class Delete extends React.Component<IWithRouterProps, any> {
  id = this.props.params.id ? this.props.params.id : "";

  async componentDidMount() {
    const response = await fetch(`http://localhost:8080/music//${this.id}`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <div>
      {/* <HomePage /> */}
    </div>
  }
}
export default WithRouter(Delete);
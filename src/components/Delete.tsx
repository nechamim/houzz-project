import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';
import WithRouter, { IWithRouterProps } from './WithRouter'
const DeleteWithRouter = WithRouter(class Delete extends React.Component<IWithRouterProps, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");

  componentDidMount() {

    fetch(`http://localhost:8080/music//${this.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Unable to delete item.', error));
  }

  render() {
    return <div>
<HomePage />
      {/* <Link to={"/home"}></Link> */}
    </div>
  }
})
export default DeleteWithRouter;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import WithRouter, { IWithRouterProps } from './WithRouter'
const ReadWithRouter = WithRouter(class Read extends React.Component<IWithRouterProps, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");

  state = {
    musicalInstrument: { id: 0, instrument: "", description: "", price: 0 }
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8080/music/${this.id}`);
    const data = await response.json();
    this.setState({ musicalInstrument: data })
  }

  render() {
    const { musicalInstrument } = this.state;
    return <div>
      <h1>{musicalInstrument.instrument}</h1>
      <p>{musicalInstrument.description}</p><br />
      <p>price: {musicalInstrument.price}</p>
      <Button variant="outline-primary"><Link to={`/update/${musicalInstrument.id}`} id={"link"}>Update</Link></Button>
      <Button variant="outline-primary"><Link to={`/delete/${musicalInstrument.id}`} id={"link"}>Delete</Link></Button>
    </div>
  }
})
export default ReadWithRouter;
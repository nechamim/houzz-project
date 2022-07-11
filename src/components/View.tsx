import React from 'react';
import { musicalInstruments } from '../data/musicalInstruments';
import WithRouter, { IWithRouterProps } from './WithRouter'
const ViewWithRouter = WithRouter(class View extends React.Component<IWithRouterProps, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");

  render() {
    return <div>
      <h1>{musicalInstruments[this.id].instrument}</h1>
      <p>{musicalInstruments[this.id].description}</p><br />
      <p>price: {musicalInstruments[this.id].price}</p>
    </div>
  }
})
export default ViewWithRouter;
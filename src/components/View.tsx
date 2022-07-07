import React from 'react';
import { musicalInstruments } from '../data/musicalInstruments';
// interface ViewProps {
//   id: number;
// }

export default class View extends React.Component</*ViewProps*/{}, any> {

  // constructor(props: ViewProps) {
  //   super(props);
  // }

  // render() {
  //   const { id } = this.props;
  //   return <div>
  //     <h1>{musicalInstruments[id].instrument}</h1>
  //     <p>{musicalInstruments[id].description}</p><br />
  //     <p>price: {musicalInstruments[id].price}</p>
  //   </div>
  // }
//   constructor({ match, ...props }) {
//     super({ match, ...props })
//     console.log(match.params)
// }
render() {
  const array:string [] = document.URL.split('/');
  array.forEach((p,i) => console.log(p + "index" + i));
  const id = parseInt(document.URL.split('/')[7])
  return <> 
      <h2>Productttttttttttt </h2>
      <p>  { musicalInstruments[id].instrument } </p>
  </> 
}
 
}
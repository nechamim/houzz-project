import React, { Component } from 'react';
import { musicalInstruments } from '../data/musicalInstruments';
import View from './View';
import Edit from './Edit';
import { Link, Outlet } from 'react-router-dom';
export default class HomePage extends Component<{}, any> {

  constructor(props: any) {
    super(props)
    this.state = { filteredList: [], selectedIM: "" };
  }
  // changeState = (id: number) => {
  //   console.log("in on click" + id);
  //   this.setState({id});
  // };



  render() {
    const search = () => {
      // this.setState({selectedIM: (document.getElementById('nameForSearch') as HTMLInputElement).value});
      const str = (document.getElementById('nameForSearch') as HTMLInputElement).value;
      let miFiltered = musicalInstruments.filter(im => im.instrument.startsWith(str)).map(filteredMI => (
        <li>
          {filteredMI.instrument}
        </li>))
      console.log(' selectedIM: ' + miFiltered[0]);
    }

    return <>
      <h2>MUSICALL</h2>
      <h3> There are {musicalInstruments.length} musical instruments in store  </h3>
      {/*<View id={this.state.id} />*/}
      {/* <Edit id={this.state.id} />  */}
      <form>
        <input type="text" name="nameForSearch" placeholder='enter nusical instrument to search' />
        <button onClick={() => search()}>🔍</button>
      </form>
      <ul className="products">
        {musicalInstruments.map((innerItem, i) => <li>
          <Link to={"/view/" + (i)}>{innerItem.instrument} </Link></li>)}
        {/* <button onClick={() => this.changeState(i)}>edit</button> */}
        {/* <button> <Link to={"/product" + ( i )}>Enter </Link> </button> */}
      </ul>
      <div>
        <h3>Selected Musical Instrument</h3>
        <Outlet />
      </div>

    </>
  }
}
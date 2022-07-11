import React, { Component } from 'react';
import { musicalInstruments } from '../data/musicalInstruments';
import { Link } from 'react-router-dom';
import { IMusicalInstruments } from '../interfaces/IMusicalInstrument';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
export default class HomePage extends Component<{}, any> {
  miFiltered: IMusicalInstruments[] | undefined;
  constructor(props: any) {
    super(props)
    this.state = {
      filteredList: musicalInstruments,
      strForSearch: ""
    };
  }

  search = () => {
    console.log("i am in search");
    const str = (document.getElementById('nameForSearch') as HTMLInputElement).value;
    this.miFiltered = musicalInstruments.filter(mi => mi.instrument.startsWith(str));
    console.log(' selectedIM: ' + this.miFiltered[0].instrument);
    this.setState({ filteredList: this.miFiltered, strForSearch: str });
  }


  render() {
    return <>
      {console.log("i am loading")
      }
      <h2>MUSICALL</h2>
      <h3> There are {musicalInstruments.length} musical instruments in store  </h3>
      <Form>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" id="nameForSearch" placeholder='enter musical instrument to search' />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.search}>🔍</Button> */}
        <InputGroup className="mb-3">
          <Button variant="outline-secondary" id="button-addon1" onClick={this.search}>🔍</Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            type="text" id="nameForSearch" placeholder='enter musical instrument to search'
          />
        </InputGroup>
      </Form>
      <ul className="products">
        {this.state.filteredList.map((innerItem: IMusicalInstruments) => <li>
          {/* hi Ester, i didn't succeed to do inner router. i will be happy to know why! */}
          {/* <Link to={"/view/" + (i)}>{innerItem.instrument} </Link> */}
          {/* <Link to={"/edit/" + (i)}>edit </Link>} */}
          <a href={`/view/${innerItem.id}`}>{innerItem.instrument}</a>
          <Button variant="outline-primary"><a id='editLink' href={`/edit/${innerItem.id}`}>edit</a></Button></li>)}
      </ul>
    </>
  }
}
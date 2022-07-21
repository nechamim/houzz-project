import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
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
      filteredList: [{ _id: "", instrument: "", description: "", price: 0 }],
      strForSearch: ""
    };
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/music/');
    const data = await response.json();
    console.log("data: " + data);
    this.setState({ filteredList: data })
  }

  search = () => {
    const { filteredList } = this.state;
    console.log("i am in search");
    const str = (document.getElementById('nameForSearch') as HTMLInputElement).value;
    this.miFiltered = filteredList.filter((mi: IMusicalInstruments) => mi.instrument ? mi.instrument.startsWith(str) : true);
    this.setState({ filteredList: this.miFiltered, strForSearch: str });
  }


  render() {
    const { filteredList } = this.state;
    return <div className="card text-center m-3">
      <h2>MUSICALL</h2>
      <h3> There are {filteredList.length} musical instruments in store  </h3>
      <Form>
        <InputGroup className="mb-3">
          <Button variant="primary" id="button-addon1" onClick={this.search}>🔍</Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            type="text" id="nameForSearch" placeholder='enter musical instrument to search'
          />
        </InputGroup>
      </Form>
      <div className="card-body">
        <ul>
          {filteredList.map((innerItem: IMusicalInstruments) => <li key={innerItem._id}>
            <Link to={`/view/${innerItem._id}`}>{innerItem.instrument}</Link>
          </li>)}
        </ul>
        <Button variant="outline-primary"><Link to={`/add`} id={"link"}>Add</Link></Button>
      </div>
    </div>
  }
}
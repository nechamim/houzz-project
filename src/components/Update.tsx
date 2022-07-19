import { Component } from 'react';
import WithRouter, { IWithRouterProps } from './WithRouter';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { IMusicalInstruments } from '../interfaces/IMusicalInstrument';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';


interface IUpdateProps {
  music: IMusicalInstruments;
}

const UpdateWithRouter = WithRouter(class Update extends Component<IWithRouterProps/* & IUpdateProps*/, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");
  newItem: IMusicalInstruments;
  constructor(props: any) {
      super(props);
      this.newItem = { id: 0, instrument: " ", description: " ", price: 0 };
      this.state = {
          musicalInstrument: { id: 0, instrument: "", description: "", price: 0 }
      }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/music/${this.id}`)
      .then(response => response.json())
      .then(data => this.setState({ musicalInstrument: data }));
  }

  // callToServer = () => {
  //   console.log("instrument: " + this.state.musicalInstrument.instrument + ", description: " + this.state.musicalInstrument.description);
  //   fetch(`http://localhost:8080/music/${this.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state.musicalInstrument)
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log("data: "+ data))
  //     .catch(error => console.error('Unable to update item.', error));
  // }

  async callToServer () {
    console.log("instrument: " + this.state.musicalInstrument.instrument + ", description: " + this.state.musicalInstrument.description);
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.musicalInstrument)
    };
    const response = await fetch(`http://localhost:8080/music/${this.id}`, requestOptions);
    const data = await response.json();
    console.log("data: " + data)
    debugger
}


  render() {
    const { musicalInstrument } = this.state;

    const handleChange = (changedValue: string, field: string) => {
      this.newItem = { ...this.state.musicalInstrument }
      console.log(changedValue);
      switch (field) {
          case "instrument":
              console.log("I am in musicalInstrument.instrument: " + musicalInstrument.instrument);
              this.newItem.instrument = changedValue;
              break;
          case "description":
              console.log("i am in  musicalInstrument.description: " + musicalInstrument.description);
              this.newItem.description = changedValue;
              break;
          case "price":
              console.log("i am in musicalInstrument.price: " + musicalInstrument.price)
              this.newItem.price = parseInt(changedValue);
              break;
      }
      this.setState({ musicalInstrument: this.newItem });
  };


    return (
      <div>
        <Form onSubmit={() =>  this.callToServer()}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={musicalInstrument.instrument} onChange={(e) => handleChange(e.target.value, "instrument")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={musicalInstrument.description} onChange={(e) => handleChange(e.target.value, "description")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" value={musicalInstrument.price} onChange={(e) => handleChange(e.target.value, 'price')} />
          </Form.Group>
          <Button variant="primary" type="submit">
           {/*<Link to={`/home`} id={"link"}>*/}Submit{/*</Link>*/}</Button> 
        </Form>
      </div>
    );
  }
})
export default UpdateWithRouter;
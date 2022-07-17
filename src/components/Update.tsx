import { Component } from 'react';
import WithRouter, { IWithRouterProps } from './WithRouter';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { IMusicalInstruments } from '../interfaces/IMusicalInstrument';


interface IUpdateProps {
  music: IMusicalInstruments;
}

const UpdateWithRouter = WithRouter(class Update extends Component<IWithRouterProps/* & IUpdateProps*/, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");

  state = {
    musicalInstrument: { id: 0, instrument: "", description: "", price: 0 }
  }

  componentDidMount() {
    fetch(`http://localhost:8080/music/${this.id}`)
      .then(response => response.json())
      .then(data => this.setState({ musicalInstrument: data }));
    // this.setState({ musicalInstrument: data })
  }

  callToServer = () => {
    fetch(`http://localhost:8080/music/${this.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.musicalInstrument)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Unable to update item.', error));
  }


  render() {
    const { musicalInstrument } = this.state;

    const handleChange = (changedValue: string, field: string) => {
      console.log(changedValue);
      switch (field) {
        case "instrument":
          this.setState({ musicalInstrument: { instrument: changedValue } });
          break;
        case "description":
          this.setState({ musicalInstrument: { description: changedValue } });
          break;
        case "price":
          this.setState({ musicalInstrument: { price: changedValue } });
          break;
      }
    };


    return (
      <div>
        <Form onSubmit={this.callToServer}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={musicalInstrument.instrument} onChange={(e) => handleChange(e.target.value, "instrument")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={musicalInstrument.description} onChange={(e) => handleChange(e.target.value, "description")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" value={musicalInstrument.price} onChange={(e) => handleChange(e.target.value, 'price')} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
})
export default UpdateWithRouter;
import { Component } from 'react';
import { musicalInstruments } from '../data/musicalInstruments';
import WithRouter, { IWithRouterProps } from './WithRouter';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';

const EditWithRouter = WithRouter(class Edit extends Component<IWithRouterProps, any> {
  id = parseInt(this.props.params.id ? this.props.params.id : "0");

  state = { instrument: musicalInstruments[this.id].instrument, description: musicalInstruments[this.id].description, price: musicalInstruments[this.id].price };

  render() {
    const handleChange = (changedValue: string, field: string) => {
      console.log(changedValue);
      switch (field) {
        case "instrument":
          this.setState({ instrument: changedValue });
          break;
        case "description":
          this.setState({ description: changedValue });
          break;
        case "price":
          this.setState({ price: changedValue });
          break;
      }
    };

    const writeToMusInstFile = () => {
      musicalInstruments[this.id].instrument = this.state.instrument;
      musicalInstruments[this.id].description = this.state.description;
      musicalInstruments[this.id].price = this.state.price;
    }

    return (
      <div>
        {/* <form onSubmit={writeToMusInstFile}>
          <input type="text" value={this.state.instrument} onChange={(e) => handleChange(e.target.value, "instrument")} />
          <input type="text" value={this.state.description} onChange={(e) => handleChange(e.target.value, "description")} />
          <input type="number" value={this.state.price} onChange={(e) => handleChange(e.target.value, 'price')} />
          <input type="submit" />
        </form> */}
        <Form onSubmit={writeToMusInstFile}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={this.state.instrument} onChange={(e) => handleChange(e.target.value, "instrument")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" value={this.state.description} onChange={(e) => handleChange(e.target.value, "description")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="number" value={this.state.price} onChange={(e) => handleChange(e.target.value, 'price')} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
})
export default EditWithRouter;
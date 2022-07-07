import React, { Component } from 'react';
import { musicalInstruments } from '../data/musicalInstruments';

interface EditProps {
  id: number;
}

export default class Edit extends Component<EditProps, any> {

  constructor(props: EditProps) {
    super(props)
    this.state = { instrument: musicalInstruments[props.id].instrument, description: musicalInstruments[props.id].description, price: musicalInstruments[props.id].price };
  }

  render() {
    const { id } = this.props;
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
      musicalInstruments[id].instrument = this.state.instrument;
      musicalInstruments[id].description = this.state.description;
      musicalInstruments[id].price = this.state.price;
    }

    return (
      <div>
        <form onSubmit={writeToMusInstFile}>
          <input type="text" value={this.state.instrument} onChange={(e) => handleChange(e.target.value, "instrument")} />
          <input type="text" value={this.state.description} onChange={(e) => handleChange(e.target.value, "description")} />
          <input type="number" value={this.state.price} onChange={(e) => handleChange(e.target.value, 'price')} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
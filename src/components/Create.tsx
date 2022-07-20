import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IMusicalInstruments } from '../interfaces/IMusicalInstrument';
import HomePage from './HomePage';

export default class Create extends React.Component<{}, any> {
    newItem: IMusicalInstruments;
    constructor(props: any) {
        super(props);
        this.newItem = { _id: "", instrument: " ", description: " ", price: 0 };
        this.state = {
            musicalInstrument: { _id: "", instrument: "", description: "", price: 0 }
        }
    }


    async callToServer () {
        console.log("instrument: " + this.state.musicalInstrument.instrument + ", description: " + this.state.musicalInstrument.description);
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.musicalInstrument)
        };
        const response = await fetch('http://localhost:8080/music/', requestOptions);
        await response.json();
    }

    render() {
        const { musicalInstrument } = this.state;

        const handleChange = (changedValue: string, field: string) => {
            this.newItem = { ...musicalInstrument }
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
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

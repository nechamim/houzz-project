import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomePage from './HomePage';

export default class Create extends React.Component<{}, any> {

    state = {
        musicalInstrument: { instrument: " ", description: " ", price: 0 }
    }

    callToServer = () => {
        console.log("instrument: " + this.state.musicalInstrument.instrument + ", description: " + this.state.musicalInstrument.description);
        debugger
        fetch('http://localhost:8080/music/', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin':"*"
            },
            body: JSON.stringify(this.state.musicalInstrument)
        })
            .then(response => response.json())
            .then((data) => console.log(data))
            .catch(error => console.error('Unable to add item.', error));
    }

    render() {
        const { musicalInstrument } = this.state;
        const handleChange = (changedValue: string, field: string) => {
            console.log(changedValue);
            switch (field) {
                case "instrument":
                    console.log("I am in musicalInstrument.instrument: " + musicalInstrument.instrument);
                    this.setState({ musicalInstrument: { instrument: changedValue } });
                    break;
                case "description":
                    console.log("i am in  musicalInstrument.description: " + musicalInstrument.description);
                    this.setState({ musicalInstrument: { description: changedValue } });
                    break;
                case "price":
                    console.log("i am in musicalInstrument.price: " + musicalInstrument.price)
                    this.setState({ musicalInstrument: { price: changedValue } });
                    break;
            }
        };


        return (
            <div>
                <Form onSubmit={this.callToServer}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" value={musicalInstrument.instrument } onChange={(e) => handleChange(e.target.value, "instrument")} />
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

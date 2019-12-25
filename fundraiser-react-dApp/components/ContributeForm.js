import React, { Component } from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'

class ContributeForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Enter a Contribution Amount</label>
                    <Input label="ether" labelPosition="right"/>
                </Form.Field>

                <Button primary>
                    Contribute
                </Button>
            </Form>
        )

    }
}

export default ContributeForm;
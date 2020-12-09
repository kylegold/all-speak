import React from 'react';
import { Button } from 'react-bootstrap';

export function BlockBtn(props) {
    <Button variant="primary" size="lg" block>
        {props.name}
    </Button>
}
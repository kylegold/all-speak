import React from 'react';
import { Button } from 'react-bootstrap';

export function BlockBtn(props) {
    <Button variant="primary" size="lg" block>
        {props.name}
    </Button>
}

export function LargeBtn(props) {
    <Button variant="primary" size="lg">
        {props.name}
    </Button>
}

export function SmallBtn(props) {
    <Button variant="primary" size="sm">
        {props.name}
    </Button>
}
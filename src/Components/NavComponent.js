import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

export default class CAPanel extends Component {
    render() {
        return(
            <div className="xxx">
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Nav Summary</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <div className="nav-description"> Current Nav :</div>
                        <div className="nav-value">39.25</div>
                    </Panel.Body>
                    <Panel.Body>
                        <div className="glyphicon glyphicon-triangle-top nav-increase"></div>
                        <div className="nav-increase-value">0.03</div>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}
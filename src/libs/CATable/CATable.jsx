import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import './style.css';

export default class CATable extends Component {

    renderRow(row) {
        return row.map(rowdata => <td>{rowdata}</td>);
    }

    renderHeader(columns) {
        return (
            <thead>
                <tr>
                    {columns.map(column => <th>{column}</th>)}
                </tr>
            </thead>
        )
    }

    renderRows(rows) {
        return(
            <tbody>
                {rows.map(row => <tr>{this.renderRow(row)}</tr>)}
            </tbody>);
    }

    render() {
        return (
                <Table responsive bordered hover>
                    {this.renderHeader(this.props.columns)}
                    {this.renderRows(this.props.rows)}    
                </Table> 
        )}
}
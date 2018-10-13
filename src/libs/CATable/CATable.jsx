import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import './style.css';

export default class CATable extends Component {

    renderRow(row) {
        return row.map((rowdata, index) => <td key = {index}>{rowdata}</td>);
    }

    renderHeader(columns) {
        return (
            <thead>
                <tr>
                    {columns.map(column => <th key={column}>{column}</th>)}
                </tr>
            </thead>
        )
    }

    renderRows(rows) {
        return(
            <tbody>
                {rows.map((row, index) => <tr  className="vija" key = {index} onClick = {(index) => this.props.onClick(row[0])}>{this.renderRow(row)}</tr>)}
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
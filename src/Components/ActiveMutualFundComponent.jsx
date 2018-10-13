import React, {Component} from 'react';
import CATable from '../libs/CATable/CATable';
import './style.css';
export default class ActiveMutualFund extends Component {

    onMutualFundClick = (row) => {
        this.props.onClick(row);
    }

    render() {
        return (
            <div>
                <div className = "mutual-fund-overview-toolbar">
                </div>
                <div id="mutual-fund-table">
                    <CATable columns={this.props.columns}
                        rows={this.props.rows}
                        onClick = {this.onMutualFundClick}
                    />
                </div>
            </div>
        )
    }
}
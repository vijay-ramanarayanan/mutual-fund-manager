import React, {Component} from 'react';
import GaugeSeries from "./GaugeSeries";
import Guage from './Guage';

export default class App extends Component {
	render() {
		return(
  			<div >
    			{<GaugeSeries />}
  				</div>
			);
	}
}
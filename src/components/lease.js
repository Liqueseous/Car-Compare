//
//Name: Ryan DeLosh, ryan_delosh@student.uml.edu
//Computer Science Department, UMass Lowell Comp.4610, GUI Programming I
//File: /usr/cs/2018/rdelosh/public_html/midterm Created: 23-Oct-2017
//Last updated by RD: 23-Oct-2017
//Built using ReactJS Library version 16.0.0
//
//I decided to use ReactJS for this assignment because I wanted to learn 
//it and get some hands on experience with it. A lot of Javascript development
//in the field is switching to React and I felt like I should learn it for
//a better start out in the job world. Along with becoming a new industry standard
//React is a very powerful library that make it easy to make some very powerful sites.
//React is also very friendly with other libraries and frameworks, It is all around useful.
import React from 'react';
import { formatPrice } from '../helpers';

//lease component that is used to render the information that the user has inputted for a lease option
class Lease extends React.Component {

	render() {
		// eslint-disable-next-line
		const { details, index } = this.props;
		return(
			//renders out or values and categories to the user for comparision
			<li className="compare-prices">
					<span className="name"><em>Lease: </em> {details.name}</span>
				<p>
					<span className="lst"><em>MSRP: </em> {formatPrice(details.msrp)}</span>
				</p>
				<p>
					<span className="lst"><em>Term: </em> {details.term}</span>
					<span className="lst"><em>DownPayment: </em>{details.downPayment}% </span>
					<span className="lst"><em>MilesCovered: </em> {formatPrice(details.milesCovered)} </span>
				</p>
				<p>
					<span className="lst"><em>Miles Per Year: </em> {details.miles}</span>
					<span className="lst"><em>¢ Per Mile Over: </em> ¢{details.costMileOver}</span>
				</p>
				<p>
					<span className="total"><em><strong>Total: </strong>PerMonth~ </em> {formatPrice(this.props.calculateMonthly(details))} <em>PerMile~ </em>  {formatPrice(this.props.calculatePriceMile(details))}</span>
				</p>
			</li>
		)
	}
}

export default Lease;
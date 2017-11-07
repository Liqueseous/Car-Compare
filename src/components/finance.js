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

//finance component that is used to render the information that the user has inputted for a finance option
class Finance extends React.Component {



	render() {
		// eslint-disable-next-line
		const { details, index } = this.props;
		var discount;
		var rebate;
		//checks to see if a dicount or rebate value was entered and will display accordingly
		if (details.discount) {
			discount = <span className="lst"><em>Discount: </em> {formatPrice(details.discount)}</span>;
		} else {
			discount = <span className="lst"><em>Discount: </em> NO DISCOUNT</span>
		}
		if (details.rebate) {
			rebate = <span className="lst"><em>Rebate: </em> {formatPrice(details.rebate)}</span>;
		} else {
			rebate = <span className="lst"><em>Rebate: </em> NO REBATE</span>
		}
		return(
			//renders out or values and categories to the user for comparision
			<li className="compare-prices">
					<span className="name"><em>Finance: </em> {details.name}</span>
				<p>
					<span className="lst"><em>MSRP: </em> {formatPrice(details.msrp)}</span>
					{discount} 
					{rebate} 
				</p>
				<p>
					<span className="lst"><em>Term: </em> {details.term} </span>
					<span className="lst"><em>DownPayment: </em> {`${details.downPayment} %`} </span>
					<span className="lst"><em>Interest: </em> {`${details.interest} %`} </span>
				</p>
				<p>
					<span className="lst"><em>Miles Per Year: </em> {details.miles} </span>
				</p>
				<p>
					<span className="total"><em><strong>Total: </strong>PerMonth~ </em> {formatPrice(this.props.calculateMonthly(details))} <em>PerMile~ </em> {formatPrice(this.props.calculatePriceMile(details))}</span>
				</p>
			</li>
		)
	}
}

export default Finance;
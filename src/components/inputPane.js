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
import AddFinanceForm from './addFinanceForm';
import AddLeaseForm from './addLeaseForm';

//This is our right most panel that contains all the forms and buttons required to add, 
//update, and remove eitehr a finance or lease option
class inputPane extends React.Component {
	constructor() {
		super();
		this.renderFinances = this.renderFinances.bind(this);
		this.handleChangeFinance = this.handleChangeFinance.bind(this);
		this.renderLeases = this.renderLeases.bind(this);
		this.handleChangeLease = this.handleChangeLease.bind(this);
	}

	//if there was a change to the information we will run this to update the Finance
	handleChangeFinance(e, key) {
		const finance = this.props.finances[key];
		var field = e.target.name;
		
		var value = e.target.value;
		
		const updatedFinance = {
			...finance, 
			[field]: value,
		}
		console.log(updatedFinance);
		this.props.updateFinance(key, updatedFinance);
  	}
  	//render our list of finances that we can edit or remove
  	renderFinances(key) {
		const finance = this.props.finances[key];
	  	return(
	  		<div  className="finance-edit" key={key}>
	     		<div>
					<label htmlFor="name">Name*:</label>
					<input id="name" name="name" value={finance.name} type="text" placeholder="* Finance Name"/>
				</div>
				<div>
					<label htmlFor="msrp">MSRP*:</label>
					<input id="msrp" name="msrp" value={finance.msrp} type="number" placeholder="* MSRP Value"/>
				</div>
				<div>
					<label htmlFor="discount">Discount:</label>
					<input id="discount" name="discount" value={finance.discount} type="number" placeholder="Discount Price" />
				</div>
				<div>
					<label htmlFor="rebate">Rebate:</label>
					<input id="rebate" name="rebate" value={finance.rebate} type="number" placeholder="Rebate Price"/>
				</div>
				<div>
					<label htmlFor="term">Term*:</label>
					<input id="term" name="term" value={finance.term} type="number" placeholder="* Term Period"/>
				</div>
				<div>
					<label htmlFor="down">Down Payment*:</label>
					<input id="down" name="downPayment" value={finance.downPayment} type="number" placeholder="* Down Payment %"/>
				</div>
				<div>
					<label htmlFor="interest">Interest*:</label>
					<input id="interest" name="interest" value={finance.interest} type="number" placeholder="* Interest Rate %"/>
				</div>
				<div>
					<label htmlFor="miles">Miles Driven per Year*:</label>
					<input id="miles" name="miles" value={finance.miles} type="number" placeholder="* Miles Per Year"/>
				</div>
				<button onClick={() => this.props.removeFinance(key)}>Remove Option</button>
	     	</div>
	  	)
  	}
  	//if there was a change to the information we will run this to update the Lease
	handleChangeLease(e, key) {
		const lease = this.props.leases[key];
		var field = e.target.name;

		var value = e.target.value;

		const updatedLease = {
			...lease,
			[field]: value
		}
		console.log(updatedLease);
		this.props.updateLease(key, updatedLease);
  	}
  	
  	//render our list of leases that we can edit or remove
  	renderLeases(key) {
		const lease = this.props.leases[key];
	  	return(
	  		<div  className="finance-edit" key={key}>
				<div>
					<label htmlFor="name">Name*:</label>
					<input id="name" name="name" value={lease.name} type="text" placeholder="* Lease Name"/>
				</div>
				<div>
					<label htmlFor="msrp">MSRP*:</label>
					<input id="msrp" name="msrp" value={lease.msrp} type="number" placeholder="* MSRP Value"/>
				</div>
				<div>
					<label htmlFor="term">Term*:</label>
					<input id="term" name="term" value={lease.term} type="number" placeholder="* Term Period"/>
				</div>
				<div>
					<label htmlFor="down">Down Payment*:</label>
					<input id="down" name="downPayment" value={lease.downPayment} type="number" placeholder="* Down Payment %"/>
				</div>
				<div>
					<label htmlFor="milesL">Miles Covered in Lease*:</label>
					<input id="milesL" name="milesCovered" value={lease.milesCovered} type="number" placeholder="* Max Miles"/>
				</div>
				<div>
					<label htmlFor="miles">Miles Driven per Year*:</label>
					<input id="miles" name="miles" value={lease.miles} type="number" placeholder="* Miles Per Year"/>
				</div>
				<div id="last">
					<label htmlFor="mileOver">¢ Per Mile*:</label>
					<input id="mileOver" name="costMileOver" value={lease.costMileOver} type="number" placeholder="* ¢ Per Mile" />
				</div>
				<button onClick={() => this.props.removeLease(key)}>Remove Lease</button>
	     	</div>
	  	)
  	}

	render() {
		return (
			//map through renderFinances and renderLeases
			//also include the AddFinanceForm and AddLeaseForm for user data entry
			<div className="inputPane">
				<h2>Add Comparison</h2>
				<h3>Finance Options</h3>
				{Object.keys(this.props.finances).map(this.renderFinances)}
				<AddFinanceForm addFinance={this.props.addFinance} />
				<h3>Lease Options</h3>
				{Object.keys(this.props.leases).map(this.renderLeases)}
				<AddLeaseForm addLease={this.props.addLease} />
			</div>
		)
	}
}

export default inputPane;
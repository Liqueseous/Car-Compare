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

//AddFinanceForm is the component that houses the finance form for data entry, it also contains object 
//and states required for this data entry
class AddFinanceForm extends React.Component {
	//creates a finance object when the submit button of the form is clicked
	//once the states are created it is passed to addFinance(home component) through an object for simplicity
	createFinance(event) {
		event.preventDefault();
		console.log('Creating Finance')
		const finance = {
			type: 'finance',
			name: this.name.value,
			msrp: this.msrp.value,
  			discount: this.discount.value,
  			rebate: this.rebate.value,
  			term: this.term.value,
  			downPayment: this.downPayment.value,
  			interest: this.interest.value,
  			miles: this.miles.value,
  			totalPerMonth: '',
  			totalPerMile: '',
		}
		this.props.addFinance(finance);
		//clears the form for the next entry
		this.financeForm.reset();
	}

	render() {
		return (
			<form ref={(input) => this.financeForm = input} className="finance-edit" onSubmit={(e) => this.createFinance(e)}>
				<div>
					<label htmlFor="name">Name*:</label>
					<input ref={(input) => this.name = input} id="name" type="text" placeholder="* Finance Name" required />
				</div>
				<div>
					<label htmlFor="msrp">MSRP*:</label>
					<input ref={(input) => this.msrp = input} id="msrp" type="number" placeholder="* MSRP Value" required />
				</div>
				<div>
					<label htmlFor="discount">Discount:</label>
					<input ref={(input) => this.discount = input} id="discount" type="number" placeholder="Discount Price" />
				</div>
				<div>
					<label htmlFor="rebate">Rebate:</label>
					<input ref={(input) => this.rebate = input} id="rebate" type="number" placeholder="Rebate Price" />
				</div>
				<div>
					<label htmlFor="term">Term*:</label>
					<input ref={(input) => this.term = input} id="term" type="number" placeholder="* Term Period" required/>
				</div>
				<div>
					<label htmlFor="down">Down Payment*:</label>
					<input ref={(input) => this.downPayment = input} id="down" type="number" placeholder="* Down Payment %" required />
				</div>
				<div>
					<label htmlFor="interest">Interest*:</label>
					<input ref={(input) => this.interest = input} id="interest" type="number" placeholder="* Interest Rate %" required />
				</div>
				<div>
					<label htmlFor="miles">Miles Driven per Year*:</label>
					<input ref={(input) => this.miles = input} id="miles" type="number" placeholder="* Miles Per Year" required/>
				</div>
				<button type="submit">+ Add Item</button>
	     	</form>
			)
	}
}

export default AddFinanceForm;
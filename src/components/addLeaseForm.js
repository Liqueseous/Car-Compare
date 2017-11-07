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

//AddLeaseForm is the component that houses the lease form for data entry, it also contains object 
//and states required for this data entry
class AddLeaseForm extends React.Component {

	//creates a lease object when the submit button of the form is clicked
	//once the states are created it is passed to addLease(home component) through an object for simplicity
	createLease(event) {
			event.preventDefault();
			console.log('Creating Lease')
			const lease = {
				type: 'lease',
				name: this.name.value,
				msrp: this.msrp.value,
	  			term: this.term.value,
	  			downPayment: this.downPayment.value,
	  			milesCovered: this.milesCovered.value,
	  			miles: this.miles.value,
	  			costMileOver: this.costMileOver.value,
	  			totalPerMonth: '',
	  			totalPerMile: '',
			}
			this.props.addLease(lease);
			//clears the form for the next entry
			this.leaseForm.reset();
		}
	render() {
		return (
			<div>
			     <form ref={(input) => this.leaseForm = input} className="finance-edit" onSubmit={(e) => this.createLease(e)}>
				<div>
					<label htmlFor="name">Name*:</label>
					<input ref={(input) => this.name = input} id="name" type="text" placeholder="* Lease Name" required />
				</div>
				<div>
					<label htmlFor="msrp">MSRP*:</label>
					<input ref={(input) => this.msrp = input} id="msrp" type="number" placeholder="* MSRP Value" required />
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
					<label htmlFor="milesL">Miles Covered in Lease*:</label>
					<input ref={(input) => this.milesCovered = input} id="milesL" type="number" placeholder="* Max Miles" required />
				</div>
				<div>
					<label htmlFor="miles">Miles Driven per Year*:</label>
					<input ref={(input) => this.miles = input} id="miles" type="number" placeholder="* Miles Per Year" required/>
				</div>
				<div id="last">
					<label htmlFor="mileOver">¢ Per Mile*:</label>
					<input ref={(input) => this.costMileOver = input} id="mileOver" type="number" placeholder="* ¢ Per Mile" required/>
				</div>
					<button type="submit">+ Add Item</button>
			     </form>
		     </div>
			)
	}
}
export default AddLeaseForm;
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
import Finance from './finance';
import Lease from './lease';
import Header from './header';
import InputPane from './inputPane';


//Main Application component contains an object that has 2 states finances and leases
class Home extends React.Component {
  constructor() {
    super();
    this.addFinance = this.addFinance.bind(this);
    this.updateFinance = this.updateFinance.bind(this);
    this.removeFinance = this.removeFinance.bind(this);
    this.addLease = this.addLease.bind(this);
    this.updateLease = this.updateLease.bind(this);
    this.removeLease = this.removeLease.bind(this);
    this.calculateMonthly = this.calculateMonthly.bind(this);
    this.calculatePriceMile = this.calculatePriceMile.bind(this);
    
    //initial state
    //each state has a list of objects which in themselves contain states. These objects are
    //each individual lease or finance option
    this.state = {
      finances: {},
      leases: {},
    };
  }
  //adds a lease object to our leases state
  addLease(lease) {
    //first take a copy of our state then (better pactice)
    // update our state
    const leases = this.state.leases;
    //add in our new option
    const timestamp = Date.now();
    leases[`lease-${timestamp}`] = lease;
    // set state
    this.setState({ leases })
  }
  //updates a lease if a user changes some information
  updateLease(key, updatedLease) {
    const leases = this.state.leases;
    leases[key] = updatedLease;
    this.calculateMonthly(leases[key].details);
    this.calculatePriceMile(leases[key].details);
    console.log('Lease Updated');
    this.setState({ leases });
  }
  //remove the lease from the application
  removeLease(key){
    const leases = this.state.leases;
    delete leases[key];
    this.setState({ leases });
  }

  //adds a finance object to our finances state
  addFinance(finance) {
    //first take a copy of our state then (better pactice)
    // update our state
    const finances = this.state.finances;
    //add in our new option
    const timestamp = Date.now();
    finances[`finance-${timestamp}`] = finance;
    // set state
    this.setState({ finances })
  }
  //updates a finance if the user changes some information
  updateFinance(key, updatedFinance) {
    const finances = this.state.finances;
    finances[key] = updatedFinance;
    this.calculateMonthly(finances[key].details);
    this.calculatePriceMile(finances[key].details);
    console.log('Finance Updated');
    this.setState({ finances });
  }
  //remove the finance from the application
  removeFinance(key){
    const finances = this.state.finances;
    delete finances[key];
    this.setState({ finances });
  }
  
  //calculate our per month total for a given entry
  calculateMonthly(details) {
    let total = 0;
    let downTotal$ = 0;
    try {
      if (details.downPayment != 0) {
        downTotal$ = (details.msrp/details.downPayment)
      }
      if (details.downPayment == 0) {
        downTotal$ = 0
      }

      //since leases contain different information we will check to see if it is a lease
      if(details.type === 'lease') {
        total = (details.msrp - downTotal$);
        if(details.miles > details.milesCovered) {
          total = (total + ((details.miles - details.milesCovered) * (details.costMileOver/100)));
        }
        total = total / details.term;
      }
      else {
        total = (((details.msrp - downTotal$)- details.rebate) - details.discount);

        if(details.interest !== 0) {
          total = (total / details.interest) + total;
        }
        total = total / details.term;
      } 
    }catch(e){
      console.log("calculateMonthly", e);
      total = 0;
    }
    details.totalPerMonth = total;
    return details.totalPerMonth;
  }

  //calculate our per mile total for a given entry
  calculatePriceMile(details) {
    let total = 0;
    let downTotal$ = 0;
    try {
      if (details.downPayment != 0) {
        downTotal$ = (details.msrp/details.downPayment)
      }
      if (details.downPayment == 0) {
        downTotal$ = 0
      }
      //since leases contain different information we will check to see if it is a lease
      if(details.type === 'lease') {
        total = (details.msrp - downTotal$);
        if(details.miles > details.milesCovered) {
          total = (total + ((details.miles - details.milesCovered) * (details.costMileOver/100)));
        }
        total = total / details.miles;
      }
      else {
        total = (((details.msrp - downTotal$)- details.rebate) - details.discount);

        if(details.interest !== 0) {
          total = (total / details.interest) + total;
        }
        total = total / details.miles;
      } 
    }catch(e){
      console.log("calculatePerMile", e);
      total = 0;
    }
    details.totalPerMile = total;
    return details.totalPerMile;
  }

  render() {
    return (
      //Renders our skeleton for the Application, the left side is tge list of objects that were mapped out
      //the right side is our InputPane component
      <div className="app">
        <div className="comparePane">
          <Header className="App-header" tagline="Compare Prices Fast"/>
          <ul className="list-of-offers">
            {Object.keys(this.state.finances).map(key => <Finance key={key} index={key} details={this.state.finances[key]} calculateMonthly={this.calculateMonthly} calculatePriceMile={this.calculatePriceMile}/>)}
            {Object.keys(this.state.leases).map(key => <Lease key={key} index={key} details={this.state.leases[key]} calculateMonthly={this.calculateMonthly} calculatePriceMile={this.calculatePriceMile}/>)}
          </ul>
        </div>
        <InputPane leases={this.state.leases} finances={this.state.finances} addLease={this.addLease} updateLease={this.updateLease} removeLease={this.removeLease} addFinance={this.addFinance} updateFinance={this.updateFinance} removeFinance={this.removeFinance}/>
      </div>
    )
  }
}

export default Home;

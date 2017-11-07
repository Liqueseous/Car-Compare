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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';

//our router which will take us to our Home component if we are at the home file directory 
//if not display 404 error
//<Route path='/*' component={ () => {return <div> 404 </div>}} />
class Routes extends React.Component{
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path='/*' component={Home} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Routes

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

//function used for price formatting
export function formatPrice(cents) {
  return `$${(cents * 1).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    // eslint-disable-next-line
    .replace(/\s+/g, '-')           // Replace spaces with -
    // eslint-disable-next-line
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    // eslint-disable-next-line
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    // eslint-disable-next-line
    .replace(/^-+/, '')             // Trim - from start of text
    // eslint-disable-next-line
    .replace(/-+$/, '');            // Trim - from end of text
}

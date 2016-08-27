var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
   ]
};

// Asks React to render this class
var element = React.createElement(Dropdown, options);

// Asks React to place this class in body tag after it's rendered
ReactDOM.render(element, document.querySelector('.container'));

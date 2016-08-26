var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'Show Courses',
    number: 14,
    header: 'Learn React',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.React is a fantastic new library for making fast, dynamic pages.',
    imageURL: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 11,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageURL: 'http://brunch.io/images/others/gulp.png'
  }]
};

// Asks React to render this class
var element = React.createElement(ThumbnailList, options);

// Asks React to place this class in body tag after it's rendered
ReactDOM.render(element, document.querySelector('.container'));

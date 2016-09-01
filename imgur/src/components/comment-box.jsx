var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function() {
    return <ul className="list-group">
      {this.renderComments()}
    </ul>
  },
  renderComments: function() {
    return this.props.comments.slice(0, 20).map(function(comment){
      return <li className="list-group-item comment-box" key={comment.id}>
        <span className="badge">{comment.ups}</span>
        <h5><Link to={"user/" + comment.author}>{comment.author}</Link></h5>
        {comment.comment}
        console.log({comment.comment});
      </li>
    });
  }
});

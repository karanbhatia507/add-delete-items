var React= require('react');
var ReactDOM= require('react-dom');



var TodoItem=React.createClass({
  render(){
    return(
      <li>
      <div>
      <span>{this.props.item}</span>
      <span onClick={this.handleDelete}> x </span>
      </div>
      </li>
    )
  },
  handleDelete: function(){
this.props.onDelete(this.props.item)
  }
})

module.exports= TodoItem

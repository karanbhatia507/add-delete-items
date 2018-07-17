var React= require('react');
var ReactDOM= require('react-dom');

var AddItem= React.createClass({
    render: function(){
      return(
        <form onSubmit={this.handleSubmit}>
              <input type="text" required ref="newItem"/>
              <input type="submit" value="Hit me!" />
        </form>
      );
    },
    handleSubmit: function(e){
      e.preventDefault();
      this.props.onAdd(this.refs.newItem.value);
    }
});
module.exports= AddItem;

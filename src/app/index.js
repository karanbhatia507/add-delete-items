var React= require('react');
var ReactDOM= require('react-dom');
var TodoItem= require('./todoItem');
var AddItem= require('./addItem');


var TodoComponent= React.createClass({
  getInitialState(){
    return{
      todos:['wake up','have breakfast', 'goto work', 'return home']
    }
  },
  render(){
    var todos= this.state.todos;
    todos= todos.map((item, index)=>{
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />
    });

    return(
      <div>
      <p>The busiest people have the most leisure...</p>
      <ul>{todos}</ul>
      <AddItem onAdd={this.onAdd} />
      </div>
    );
  },

onDelete: function(item){
  var updatedTodos= this.state.todos.filter(function(val, index){
    return item!==val;
  });
  this.setState({
    todos: updatedTodos
  });
},

 onAdd: function(item){
   var updatedTodos= this.state.todos;
   updatedTodos.push(item);
   this.setState({
     todos: updatedTodos
   });
 }
});
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

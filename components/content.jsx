var React  = require("react");
var Todo = require("./todo");

module.exports = React.createClass({
   propTypes:{
     dataSource: React.propTypes.array
   },

   onToggle: function(event) {
     var items = this.props.dataSource;

     for(var i = 0, len = items.length; i < len; i++) {
       items[i].completed = event.target.checked;
     }
   },

   render: function() {
     return(
        <section className="main">
           <input className="toggle-all" type="checkbox" onClick={this.onToggle} />
           <label htmlFor="toggle-all">Mark all as completed </label>

           <ul className="todo-list">
            {
               this.props.dataSource.map(function(item, index){
                 return (< Todo key={item.uid} data={item} />);     
               })
            }
           </ul>
        </section>
     )
   }
});

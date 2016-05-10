var AllTouches = React.createClass({
  getInitialState: function() {
    return {
      touches: [] 
    };
  },

  componentDidMount() {
   $.getJSON('/api/v1/touches.json', (response) => {this.setState( {touches:response}) });
 }, 
 render() {
     var touches = this.state.touches.map((touch) => {
      
      return (
        <div key={touch.id}>
          <h3>{touch.calls }</h3>
          <h3>{touch.emails}</h3>
          <h3>{touch.mail}</h3>
          <h3>{touch.advertisements}</h3>
        </div>
        
      )
    });
    return (
      <div>
        {touches}
      </div>
    )
  }
});
          

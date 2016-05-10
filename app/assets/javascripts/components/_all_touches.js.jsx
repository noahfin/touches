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
        <div className="touch-box" key={touch.id}>
          <h3>{'Calls: ' +touch.calls }</h3>
          <h3>{'Emails: ' +touch.emails}</h3>
          <h3>{'Mail: ' +touch.mail}</h3>
          <h3>{'Advertisements: '+touch.advertisements}</h3>
        </div>
        
      )
    });
    return (
      <div className="right-side">
        {touches}
      </div>
    )
  }
});
          

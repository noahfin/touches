var AllTouches = React.createClass({
 
 render() {
     var touches = this.props.touches.map((touch) => {
      
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
          

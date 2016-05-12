var AllTouches = React.createClass({
 onUpdate(touch) {
    this.props.onUpdate(touch);
  },
 render() {
     var touches = this.props.touches.map((touch) => {
    
      
      return (
        <div className="touch-box" key={touch.id}>
          <Touch touch={touch}
          handleUpdate={this.onUpdate}/>
          
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
          

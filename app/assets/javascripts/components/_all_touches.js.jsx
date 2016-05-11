var AllTouches = React.createClass({
 
 render() {
     var touches = this.props.touches.map((touch) => {
      
      return (
        <div className="touch-box" key={touch.id}>
          <Touch touch={touch}
          handleEdit={this.handledit} />
          
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
          

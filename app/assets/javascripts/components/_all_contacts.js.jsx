



var AllContacts = React.createClass({
	
	handleDelete(id) {
		this.props.handleDelete(id);	
	},
	render() {
		  var touches = this.props.contacts.map((touch) => {
      console.log(touch);
      
			return (
				<div className="contact-box" key={touch.id}>
					<h3> {touch.name} </h3>
					<p> {touch.email} </p>
					<p> {touch.address} </p>
					<p> {touch.phone} </p>
					<button className="little-btnyyyy" onClick={this.handleDelete.bind(this, touch.id)}> Delete</button>
				</div>

			)
		
		});
		return (
			<div className="left-side">
				{touches}
				
			</div>
		)
	}
});

// var touch_id = contact.id;


var Body = React.createClass({

	 getInitialState: function() {
    return {
      touches: [],
      contacts: []
    };
  },

  componentDidMount() {
   $.getJSON('/api/v1/touches.json', (response) => {
	   	this.setState( {touches:response}); 
	   	var propName = response.length -1;
	    var contacts =	[];
	    for (var i = 0; i <= propName; i++) {
	    	contacts.push(response[propName.toString()].touch_contacts[i]);
	    };
	   		this.setState( {contacts: contacts}); 

   	 });
  }, 
	handleSubmit(contact) {
		var newState = this.state.contacts.concat(contact);
		this.setState({ contacts: newState})
	},
	handleDelete(id) {
		$.ajax({
			url:  `/api/v1/contacts/${id}`,
			type: 'DELETE',
			success: ()=>  {
				this.removeContactClient(id);
				
			}

		});
	},
	handleUpdate(touch) {
		$.ajax({
			url: `/api/v1/touches/${touch.id}`,
			type: 'PUT',
			data: {touch: touch},
			success: () => {
					this.updateTouches(touch);
			}
		}
	)},
	updateTouches(touch) {
		var touches = this.state.touches.filter((t) => {return t.id != touch.id});
		var index = touch.id -1;
		touches.splice(index, 0, touch);
		this.setState({touches: touches});
	},

	removeContactClient(id) {
		var newContacts = this.state.contacts.filter((contact) => {
			return contact.id != id;
		});
		var newTouches = this.state.touches.splice(1, id);
		
		this.setState( {contacts: newContacts});
		this.setState( {touches: newTouches});
	},
	
	render() {
		return (
			<div className="container"> 
				<NewContact handleSubmit={this.handleSubmit}/>
				<AllContacts contacts={this.state.contacts}  handleDelete={this.handleDelete}/>
				<AllTouches touches={this.state.touches} onUpdate={this.handleUpdate}/>
			</div>
		)
	}
});
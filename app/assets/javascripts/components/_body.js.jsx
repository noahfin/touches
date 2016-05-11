
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
	    for (var i = 0; i < propName; i++) {
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
	removeContactClient(id) {
		var newContacts = this.state.contacts.filter((contact) => {
			return contact.id != id;
		});
		this.setState( {contacts: newContacts});
	},
	render() {
		return (
			<div className="container"> 
				<NewContact handleSubmit={this.handleSubmit}/>
				<AllContacts contacts={this.state.contacts}  handleDelete={this.handleDelete}/>
				<AllTouches touches={this.state.touches} />
			</div>
		)
	}
});
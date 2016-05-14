var Body = React.createClass({

	 getInitialState: function() {
    return {
      touches: [],
      contacts: []
    };
  },

  componentDidMount() {
   $.getJSON('/api/v1/touches.json', (response) => {
   		
	   	var touches = response;
	   	var propName = response.length -1;
	    var contacts =	[];
	    for (var i = 0; i < propName; i++) {
	    	contacts.push(response[propName.toString()].touch_contacts[i]);
	    };
	   		this.setState( {contacts: contacts}); 
	   	
	   		touches.pop();
	
				this.setState( {touches:response}); 
   	 });
  }, 
	handleSubmit(contact) {
		var newState = this.state.contacts.concat(contact);
		var touches = this.state.touches

		 
		touches[touches.length] = {
	 		advertisements:		0,
			calls:	0,
			emails:	0,
			id:		contact.id,
			mail:		0,
			postcards:		0
		}
			
		 this.setState({ contacts: newState});
		 this.setState({ touches: touches});
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
 		 var touches = this.state.touches;
 		 var index = 0;

 		for (var i = 0; i < touches.length; i++) {
 			  if (touches[i].id ===  touch.id) {
 			   index = i;
 			   break;
 			  }
 		};
	   
		touches[index] = touch;
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
				<SearchContact />
				<AllContacts contacts={this.state.contacts}  handleDelete={this.handleDelete}/>
				<AllTouches touches={this.state.touches} onUpdate={this.handleUpdate}/>
			</div>
		)
	}
});
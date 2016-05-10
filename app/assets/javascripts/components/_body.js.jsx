
var Body = React.createClass({
	getInitialState() {
		return { contacts: [] }
	},

	componentDidMount() {
		$.getJSON('/api/v1/contacts.json', (response) => {this.setState( {contacts:response}) });
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
			<div> 
				<NewContact handleSubmit={this.handleSubmit}/>
				<AllContacts contacts={this.state.contacts}  handleDelete={this.handleDelete}/>
			</div>
		)
	}
});
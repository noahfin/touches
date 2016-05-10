
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
	render() {
		return (
			<div> 
				<NewContact handleSubmit={this.handleSubmit}/>
				<AllContacts contacts={this.state.contacts} />
			</div>
		)
	}
});
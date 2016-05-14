var NewContact = React.createClass({
	handleClick() {
		var name = this.refs.name.value;
		var company = this.refs.company.value;
		var email = this.refs.email.value;
		var address = this.refs.address.value;
		var phone = this.refs.number.value;
		$.ajax({
			url: '/api/v1/contacts',
			type: 'POST',
			data: { contact: {name: name, company: company,  email: email, address: address, phone: phone }},
			success: (response) => {
				this.props.handleSubmit(response);
			}
		});
	},
	render() {
		return (
			<div className="new-container"> 
				<input  className="largeIn" ref='name' type='text'placeholder='Enter the persons name'/>
				<input  className="largeIn" ref='company' type='text'placeholder='Enter the persons company'/>
				<input className="largeIn"  ref='email' type='text' placeholder='Enter their email address'/>
				<input className="largeIn"  ref='address' type='text' placeholder='Enter their street address'/>
				<input  className="largeIn" ref='number'  type='text'placeholder='Enter their phone number'/>
				<button onClick={this.handleClick}>Add new contact</button>
			</div>
		)
	}
})
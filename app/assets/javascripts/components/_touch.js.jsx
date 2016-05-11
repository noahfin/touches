var Touch = React.createClass({
	getInitialState() {
		return {editable: false}
	},
	handleEdit() {
		if(this.state.editable) {
			var calls = this.refs.calls.value;
			var emails = this.refs.emails.value;
			var mail = this.refs.mail.value;
			var advertisements =this.refs.mail.value;
			var id = this.props.touch.id;
			var touch = {id: id, calls: calls , emails: emails, mail: mail, advertisements: advertisements};
			this.props.handleUpdate(touch);
		}
    this.setState({ editable: !this.state.editable});	
  },
	render() {
		var calls = this.state.editable ? <span className="inABlock">{'Calls'} <input className="smallIn1" type='text' ref='calls'defaultValue={this.props.touch.calls}  /></span>: <h3>{'Calls: '  +this.props.touch.calls}</h3>;
		var emails = this.state.editable ? <span  className="inABlock">{'Emails:'}  <input className="smallIn2" type='text' ref='emails' defaultValue={this.props.touch.emails}  /></span> :<h3>{'Emails: ' +this.props.touch.emails}</h3>;;
		var mail = this.state.editable ? <span  className="inABlock">{'Mail: '} <input  className="smallIn3"  type='text' ref='mail' defaultValue={this.props.touch.mail} /></span> : <h3>{'Mail: '+this.props.touch.mail}</h3>;
		var advertisements = this.state.editable ? <span  className="inAlBlock">{'Advertisements:'}  <input className="smallIn4" type='text' ref='advertisements' defaultValue={this.props.touch.advertisements } /></span>  : <h3>{'Advertisements: ' +this.props.touch.advertisements}</h3>;;

		return (
			<div>
				{calls}
				{emails}
				{mail}
				{advertisements}				
        <button className="little-btn-edit"onClick={this.handleEdit}> {this.state.editable ? 'Save' : 'Edit' }</button>
       </div>
		)
	}
})
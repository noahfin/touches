var SearchContact = React.createClass({
	getInitialState() {
		return {editable: false}
	},
	handleSearch() {
		if (this.state.editable){
			var keyword = '#' + this.refs.keyword.value;
			keyword= keyword.replace(/ +/g, "");
			if ($(keyword.toLowerCase()).offset() !== undefined){
				
				$('html,body').animate({
	        scrollTop: $(keyword.toLowerCase()).offset().top},
	        'fast');
			}
		}
		this.setState({ editable: !this.state.editable});	
	},
	handleBack() {
		$('html,body').animate({
        scrollTop: $('.header').offset().top},
        'fast');
		
	},
	render() {
		var input = this.state.editable ?  <input className="search-input" type='text' ref='keyword' />: '';
		return (
			<div className="side-container"> 
				<button className="back" onClick={this.handleBack}></button>
				{input}
				<button className="search"onClick={this.handleSearch}>{this.state.editable ? 'Send' : 'Search' }</button>
			</div>
		)
	}
})
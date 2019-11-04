import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const val = this.myValue.value
        this.props.filterUpdate(val);
	}
	render() {	
		return (
			<form>
				<input 
				className="form-control input-lg"
				type="text" 
				ref={ (value) => {this.myValue = value} }
				onChange={this.filterUpdate.bind(this)}
				placeholder="Type to Filter" 
				/>
			</form>
		);
	}
}
export default Search;

import React from 'react';

class BuilingList extends React.Component {
	render() {
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data.filter((name) => {
			//Remove names not containing the filterText string and names in favorites
			 return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map((directory) => {
			//console.log(directory.id)
			return (
				<tr 
					key={directory.id}
					//Building IDs start at 0
					onClick={() => selectedUpdate(directory.id)}
				>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;
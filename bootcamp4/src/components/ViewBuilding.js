import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		if (selectedBuilding >= 0)
		{
			//console.log(selectedBuilding, data.find(o => o.id === selectedBuilding))
			const building = data.find(o => o.id === selectedBuilding);
			return (
				<div>
					<b>Selected Building Information:</b>
					<table cellSpacing="10" cellPadding="10">
						<tbody>
						{/* <tr>
							<td>ID</td>
							<td> {building.id} </td>
						</tr> */}
						<tr>
							<td>Code</td>
							<td> {building.code} </td>
						</tr>
						<tr>
							<td>Name</td>
							<td> {building.name} </td>
						</tr>
						{
							(building.hasOwnProperty("address") && building.address != null) ?
							<tr>
								<td>Address</td>
								<td> {building.address} </td>
							</tr>
							: null
						}	
						{
							(building.hasOwnProperty("coordinates") && building.coordinates.latitude != null) ?
							<tr>
								<td>Latitude:</td>
								<td > {building.coordinates.latitude} </td>
							</tr>
							: null
						}
						{
							(building.hasOwnProperty("coordinates") && building.coordinates.longitude != null) ?
							<tr>
								<td>Longitude:</td>
								<td> {building.coordinates.longitude} </td>
							</tr>
							: null
						}	
						</tbody>
						
					</table>
						
				</div>
			);
		}
		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
				
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
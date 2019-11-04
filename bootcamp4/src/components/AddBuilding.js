import Button from 'react-bootstrap/Button';
import React from 'react';


class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                id: -1,
                name: '',
                code: '',
                address: '',
                latitude: '',
                longitude: '',
                errorMessage: ''
          };
      }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler(event){
        event.preventDefault();
        if (this.state.name.length === 0 || this.state.code.length === 0)
        {
            alert("You must submit a name and a code");
        }
        else if ((this.state.latitude.length === 0 && this.state.longitude.length !== 0) || 
                (this.state.latitude.length !== 0 && this.state.longitude.length === 0) ||
                (this.state.latitude.length !== 0 && !Number(this.state.latitude)) || 
                (this.state.longitude.length !== 0 && !Number(this.state.longitude)))  
        {
            alert("Latitude and longitude values, must be decimal numbers.");
        }
        else
        {
            const { addBuilding } = this.props;
            let value = {
                id: addBuilding,
                name: this.state.name,
                code: this.state.code,
                address: (this.state.address.length > 0) ? this.state.address : null,
                coordinates: {
                    latitude: (this.state.latitude.length > 0) ? Number(this.state.latitude) : null,
                    longitude: (this.state.longitude.length > 0) ? Number(this.state.longitude) : null
                }
            };
            addBuilding(value);
            this.setState({
                id: -1,
                name: '',
                code: '',
                address: '',
                latitude: '',
                longitude: '',
                errorMessage: ''
            });
        }
    }

	render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitHandler}>
                    <table cellSpacing="10" cellPadding="10">
                        <tbody>
                            <tr>
                                <td>Name: (Required)</td>
                                <td>
                                    <input 
                                        name="name"
                                        type="text" 
                                        value={this.state.name} 
                                        onChange={this.handleInputChange.bind(this)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Code: (Required)</td>
                                <td>
                                    <input 
                                        name="code"
                                        type="text" 
                                        value={this.state.code} 
                                        onChange={this.handleInputChange.bind(this)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>
                                    <input 
                                        name="address"
                                        type="text" 
                                        value={this.state.address} 
                                        onChange={this.handleInputChange.bind(this)} 
                                    />
                                </td> 
                                   
                            </tr>
                            <tr>
                                <td>Latitude:</td>
                                <td>                                    
                                    <input 
                                    name="latitude"
                                    type="text" 
                                    value={this.state.latitude} 
                                    onChange={this.handleInputChange.bind(this)} 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Longitude:</td>
                                <td>
                                    <input 
                                        name="longitude"
                                        type="text" 
                                        value={this.state.longitude} 
                                        onChange={this.handleInputChange.bind(this)} 
                                        />
                                </td>     
                            </tr>
                        </tbody>
                    </table>
                </form>
                <Button variant="success"
                onClick={this.submitHandler.bind(this)}
                >
                    Add Building
                </Button>  
                <b>{this.state.errorMessage}</b>
            </React.Fragment>
        );

	}
}
export default AddBuilding;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding.js';

function arrayRemove(arr, index) {
  arr.splice(index,1);
  return arr;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      data: props.data
    };
    this.maxId = this.state.data.length;
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
    //console.log(id)
  }

  removeBuilding() {
    if (this.state.selectedBuilding >= 0)
    {
      //console.log(this.state.data.findIndex(o => o.id === this.state.selectedBuilding))
      this.setState({
        data: arrayRemove(this.state.data, this.state.data.findIndex(o => o.id === this.state.selectedBuilding)),
        selectedBuilding: -1
      });
    }
  }

  addBuilding(val) {
    val.id = ++this.maxId;
    //console.log(val)
    this.state.data.push(val);
    this.setState({ 
      data: this.state.data, 
      selectedBuilding: val.id
    });
    //console.log(this.state.data)
  }

  render() {
    
    return (
      <div className="bg-light">
        <main>
          <nav className="navbar bg-light justify-content-center">
            <h1>UF Directory App</h1>            
          </nav>
          <Search
                filterText={this.state.filterText}
                filterUpdate={this.filterUpdate.bind(this)}
              />
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Building</th>
                    </tr>
                  </thead>                  
                  <BuildingList
                      data={this.state.data}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                  </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
              {
                (this.state.selectedBuilding >= 0)  ?
                  <RemoveBuilding
                    removeBuilding={this.removeBuilding.bind(this)}
                    data={this.state.data}
                  /> 
                  : null
              }
             
              <div className = "addABuilding" style={{textAlignVertical: "center",textAlign: "center"}}>
                  <AddBuilding
                    addBuilding={this.addBuilding.bind(this)}
                    data={this.state.data} 
                  />
              </div>

            </div>

          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
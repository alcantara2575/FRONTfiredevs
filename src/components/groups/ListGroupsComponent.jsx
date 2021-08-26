import React, { Component } from 'react'
import GroupsService from '../../services/groupService'
import iconEditar  from '../../lapiz2.svg'
import iconBorrar  from '../../papelera.png'

class ListGroupsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                groups: []
        }
        this.addGroups = this.addGroups.bind(this);
        this.editGroups = this.editGroups.bind(this);
        this.deleteGroups = this.deleteGroups.bind(this);
    }

    deleteGroups(id){
        GroupsService.deleteGroups(id).then( res => {
            this.setState({groups: this.state.groups.filter(groups => groups.id !== id)});
        });
    }
    viewGroups(id){
        this.props.history.push(`/view-groups/${id}`);
    }
    editGroups(id){
        this.props.history.push(`/upd-groups/${id}`);
    }

    componentDidMount(){
        GroupsService.getGroups().then((res) => {
            this.setState({ groups: res.data});
        });
    }

    addGroups(){
        this.props.history.push('/upd-groups/_add');
    }

    render() {
        return (
            <div class="container min-hv-100">
                 <h1 className="text-center mt-2">Groups List</h1>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addGroups}> Add Group</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Teacher</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.groups.map(
                                        groups => 
                                        <tr key = {groups.id}>
                                             <td> {groups.name} </td>    
                                             <td> {groups.teacher}</td>
                                             <td>
                                                 <img src={iconEditar} height="30" onClick={ () => this.editGroups(groups.id)} className="btn btn-info" alt="Edit icon"></img>
                                                 <img style={{marginLeft: "10px"}} onClick={ () => this.deleteGroups(groups.id)} className="btn btn-danger" src={iconBorrar} height="30" alt="Delete icon"></img>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListGroupsComponent
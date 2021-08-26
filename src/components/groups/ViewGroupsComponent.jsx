import React, { Component } from 'react'
import GroupsService from '../../services/groupService'

class ViewGroupsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            group: {}
        }
    }

    componentDidMount(){
        GroupsService.getGroupsById(this.state.id).then( res => {
            this.setState({group: res.data[0]});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center mt-2"> Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name: { this.state.group.name }</label>
                        </div>
                        <div className = "row">
                            <label> Teacher: { this.state.group.techer }</label>
                        </div>
                    </div>

                </div>
                <div className = "text-center mt-2">
                    <button className="btn btn-secondary">
                        <a class="text-decoration-none text-white" href="/groups/">Go Back</a>
                    </button>
                 </div>
            </div>
        )
    }
}

export default ViewGroupsComponent
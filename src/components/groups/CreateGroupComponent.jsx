import React, { Component } from 'react'
import GroupsService from '../../services/groupService';

import TeacherData from '../../cache/teachers.json'

class CreateGroupsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            teacher: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeTeacherHandler = this.changeTeacherHandler.bind(this);
        this.saveOrUpdateGroup = this.saveOrUpdateGroup.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            GroupsService.getGroupsById(this.state.id).then( (res) =>{
                let groups = res.data[0];
                this.setState({name: groups.name,
                    teacher: groups.teacher
                });
            });
        }        
    }
    saveOrUpdateGroup = (e) => {
        e.preventDefault();
        let groups = {name: this.state.name, 
            teacher: this.state.teacher
        };
        //console.log('teacher => ' + JSON.stringify(teacher));

        // step 5
        if(this.state.id === '_add'){
            GroupsService.createGroups(groups).then(res =>{
                this.props.history.push('/groups');
            });
        }else{
            GroupsService.updateGroups(groups, this.state.id).then( res => {
                this.props.history.push('/groups');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeTeacherHandler= (event) => {
        this.setState({teacher: event.target.value});
    }

    cancel(){
        this.props.history.push('/groups');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Group</h3>
        }else{
            return <h3 className="text-center">Update Group</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div classNcityame = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Group Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Teacher: </label>
                                            <select class="form-select" aria-label="Default select example" onChange={this.changeTeacherHandler}>
                                                <option selected="true" disabled>Open this select menu</option>
                                                {
                                                TeacherData.map( 
                                                    teachersName => 
                                                        <option value={teachersName}>{teachersName}</option>
                                                        
                                                    )
                                                }
                                            </select>
                                            {/* <input placeholder="Teacher Name" name="City" className="form-control" 
                                                value={this.state.teacher} onChange={this.changeTeacherHandler}/> */}
                                        </div>

                                        <button className="btn btn-success mt-1" onClick={this.saveOrUpdateGroup}>Save</button>
                                        <button className="btn btn-danger mt-1" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateGroupsComponent
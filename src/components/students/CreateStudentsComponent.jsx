import React, { Component } from 'react'
import StudentsService from '../../services/studentService';
import GroupsService from '../../services/groupService';

import CityData from '../../cache/citys.json'

class CreateStudentsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            city: '',
            sex: '',
            age: '',
            group_id: '',
            born_date: '',
            email: '',
            groups: []
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeSexHandler = this.changeSexHandler.bind(this);
        this.changeGroupHandler = this.changeGroupHandler.bind(this);
        this.changeBornHandler = this.changeBornHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    componentDidMount(){

        GroupsService.getGroups().then( (res) =>{
            let groups = res.data;
            this.setState({
                groups: groups
            })
        });
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentsService.getStudentsById(this.state.id).then( (res) =>{
                let students = res.data[0];
                this.setState({name: students.name,
                    city: students.city,
                    age: students.age,
                    sex: students.sex,
                    born_date: students.born_date,
                    group_id: students.group_id,
                    email : students.email
                });
            });
        }        
    }

    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        //Validate email
        if (this.validateEmail(this.state.email)){
            //Validate age
            if ( this.validateAge(this.state.age)){
                let students = {name: this.state.name, 
                    email: this.state.email, 
                    city: this.state.city, 
                    age: this.state.age, 
                    sex: this.state.sex, 
                    group_id: this.state.group_id, 
                    born_date: this.state.born_date
                };
                    // step 5
                if(this.state.id === '_add'){
                    StudentsService.createStudents(students).then(res =>{
                        this.props.history.push('/students');
                    });
                }else{
                    StudentsService.updateStudents(students, this.state.id).then( res => {
                        this.props.history.push('/students');
                    });
                }
            } else {
                window.alert("Review age data");
            }
        }
        else {
            window.alert("Review email address");
        }

    }
    
    validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateAge(age){
        return ((this.state.age >= 10) && (this.state.age <= 15)) ? true : false
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }


    changeCityHandler= (event) => {
        this.setState({city: document.getElementById("city-select").value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeSexHandler= (event) => {
        this.setState({sex: document.getElementById("sex-select").value});
    }

    changeGroupHandler= (event) => {
        this.setState({group_id: document.getElementById("group-select").value});
    }

    changeBornHandler= (event) => {
        this.setState({born_date: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
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
                                        <div id="name" className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        
                                        <div id="email" className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="tuemail@gmail.com" name="Email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        
                                        <div id="age" className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="Age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        
                                        <div id="born" className = "form-group">
                                            <label> Born Date (YY-MM-DD): </label>
                                            <input placeholder="Born" name="Born" className="form-control" 
                                                value={this.state.born_date.slice(0, 10)} onChange={this.changeBornHandler}/>
                                        </div>

                                        <div id="city" className = "form-group">
                                            <label> City: </label>
                                            <select id="city-select" class="form-select" aria-label="Default select example" onChange={this.changeCityHandler}>
                                                <option selected="true" disabled>Open this select menu</option>
                                                {
                                                    CityData.map( 
                                                        cityName => 
                                                            <option value={cityName}>{cityName}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        
                                        <div id="sex" className = "form-group">
                                        <label> Sex: </label>
                                            <select id="sex-select" class="form-select" aria-label="Default select example" onChange={this.changeSexHandler}>
                                                <option selected="true" disabled>Open this select menu</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        
                                        <div id="group" className = "form-group">
                                            <label> Group: </label>
                                            <select id="group-select" class="form-select" aria-label="Default select example" onChange={this.changeGroupHandler}>
                                                <option selected="true" disabled>Open this select menu</option>
                                                {
                                                    this.state.groups.map( 
                                                        groups => 
                                                            <option value={groups.name}>{groups.name}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        
                                        <button className="btn btn-success mt-1" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentsComponent
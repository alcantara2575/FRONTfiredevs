import React, { Component } from 'react'
import StudentsService from '../../services/studentService';

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
            email: ''
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

    // step 3
    componentDidMount(){

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
        let students = {name: this.state.name, 
            email: this.state.email, 
            city: this.state.city, 
            age: this.state.age, 
            sex: this.state.sex, 
            group_id: this.state.group_id, 
            born_date: this.state.born_date
        };
        console.log('students => ' + JSON.stringify(students));

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
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    }

    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeSexHandler= (event) => {
        this.setState({sex: event.target.value});
    }

    changeGroupHandler= (event) => {
        this.setState({group_id: event.target.value});
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
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="Havana" name="City" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="tuemail@gmail.com" name="Email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Age: </label>
                                            <input placeholder="Age" name="Age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sex: </label>
                                            <input placeholder="Sex" name="Sex" className="form-control" 
                                                value={this.state.sex} onChange={this.changeSexHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Group: </label>
                                            <input placeholder="Group" name="Group" className="form-control" 
                                                value={this.state.group_id} onChange={this.changeGroupHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Born: </label>
                                            <input placeholder="Born" name="Born" className="form-control" 
                                                value={this.state.born_date} onChange={this.changeBornHandler}/>
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
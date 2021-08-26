import React, { Component } from 'react'
import StudentsService from '../../services/studentService'
import iconEditar  from '../../lapiz2.svg'
import iconBorrar  from '../../papelera.png'
import iconView  from '../../view.png'

class ListStudentsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: []
        }
        this.addStudents = this.addStudents.bind(this);
        this.editStudents = this.editStudents.bind(this);
        this.deleteStudents = this.deleteStudents.bind(this);
    }

    deleteStudents(id){
        StudentsService.deleteStudents(id).then( res => {
            this.setState({students: this.state.students.filter(students => students.id !== id)});
        });
    }
    viewStudents(id){
        this.props.history.push(`/view-students/${id}`);
    }
    editStudents(id){
        this.props.history.push(`/upd-students/${id}`);
    }

    componentDidMount(){
        StudentsService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudents(){
        this.props.history.push('/upd-students/_add');
    }

    render() {
        return (
            <div class="container min-hv-100">
                 <h1 className="text-center mt-2">Students List</h1>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudents}> Add Student</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Age</th>
                                    <th> City</th>
                                    <th> Group</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.students.map(
                                        students => 
                                        <tr key = {students.id}>
                                             <td> {students.name} </td>    
                                             <td> {students.age}</td>
                                             <td> {students.city}</td>   
                                             <td> {students.group_id}</td> 
                                             <td>
                                                 <img onClick={ () => this.editStudents(students.id)} className="btn btn-info" src={iconEditar} height="30" alt="Edit icon"></img> 
                                                 <img style={{marginLeft: "10px"}} onClick={ () => this.deleteStudents(students.id)} className="btn btn-danger" src={iconBorrar} height="30" alt="Delete icon"></img>
                                                 <img style={{marginLeft: "10px"}} onClick={ () => this.viewStudents(students.id)} className="btn btn-info" src={iconView} height="30" alt="View icon"></img>
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

export default ListStudentsComponent
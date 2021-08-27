import React, { Component } from 'react'
import StudentsService from '../../services/studentService'

class ViewStudentsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            students: {
                born_date : ''
            }
        }
    }

    componentDidMount(){
        StudentsService.getStudentsById(this.state.id).then( res => {
            this.setState({students: res.data[0]});
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
                            <label> Name: { this.state.students.name }</label>
                        </div>
                        <div className = "row">
                            <label> Email: { this.state.students.email }</label>
                        </div>
                        <div className = "row">
                            <label> City: { this.state.students.city }</label>
                        </div>
                        <div className = "row">
                            <label> Age: { this.state.students.age }</label>
                        </div>
                        <div className = "row">
                            <label> Sex: { this.state.students.sex }</label>
                        </div>
                        <div className = "row">
                            <label> Group: { this.state.students.group_id }</label>
                        </div>
                        <div className = "row">
                            <label> Born: { this.state.students.born_date.slice(0, 10) }</label>
                        </div>
                    </div>

                </div>
                <div className = "text-center mt-2">
                    <button className="btn btn-secondary">
                        <a class="text-decoration-none text-white" href="/students/">Go Back</a>
                    </button>
                 </div>
            </div>
        )
    }
}

export default ViewStudentsComponent
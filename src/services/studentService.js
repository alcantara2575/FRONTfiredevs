import axios from 'axios';

const STUDENTS_API_BASE_URL = "http://localhost:3030/students";

class StudentsService {

    getStudents(){
        return axios.get(STUDENTS_API_BASE_URL);
    }

    createStudents(students){
        return axios.post(STUDENTS_API_BASE_URL, students);
    }

    getStudentsById(studentsId){
        return axios.get(STUDENTS_API_BASE_URL + '/' + studentsId);
    }

    updateStudents(students, studentsId){
        return axios.put(STUDENTS_API_BASE_URL + '/' + studentsId, students);
    }

    deleteStudents(studentsId){
        return axios.delete(STUDENTS_API_BASE_URL + '/' + studentsId);
    }
}

export default new StudentsService()
import axios from 'axios';

const GROUPS_API_BASE_URL = "http://localhost:3030/groups";

class GroupsService {

    getGroups(){
        return axios.get(GROUPS_API_BASE_URL);
    }

    createGroups(groups){
        return axios.post(GROUPS_API_BASE_URL, groups);
    }

    getGroupsById(groupsID){
        return axios.get(GROUPS_API_BASE_URL + '/' + groupsID);
    }

    updateGroups(groups, groupsID){
        return axios.put(GROUPS_API_BASE_URL + '/' + groupsID, groups);
    }

    deleteGroups(groupsID){
        return axios.delete(GROUPS_API_BASE_URL + '/' + groupsID);
    }
}

export default new GroupsService()
import axios from "axios";
const searchURL = "https://randomuser.me/api/?results=500&nat=us,gb,dk,de,fr";

const APIsearch = {
    getPeopleData: function () {
        return axios.get(searchURL);
    }
};

export default APIsearch;
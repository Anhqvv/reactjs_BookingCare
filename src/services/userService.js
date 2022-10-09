import axios from "../axios";

const handleLoginApi = (email, password) => {

   return axios.post("/api/login", { email, password });
};

const getAllUsers = (id) => {
   console.log("get id from getAllUsers", id);
   return axios.get(`/api/get-all-users?id=${id}`);
};

const createNewUserApi = (data) => {
   console.log('[service] Check data:',data)
   return axios.post('/api/create-new-user',data)
}

export { handleLoginApi, getAllUsers, createNewUserApi };

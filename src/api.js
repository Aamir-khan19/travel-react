import axios from 'axios';
import conf from "../conf/conf";

class Api{
    async signupReq(body){
        try {
            const response = await axios.post(`${conf.backendBaseUrl}/api/signup`, body);

            return response.data;
        } catch (error) {
            throw error?.response;
        }
    }

    async loginReq(body){
        try {
            const response = await axios.post(`${conf.backendBaseUrl}/api/login`, body);

            return response.data;
        } catch (error) {
            throw error?.response;
        }
    }

  async  getReq(endpoint){
    try {
        const token = localStorage.getItem("ACCESS_TOKEN");

        const response = await axios.get(`${conf.backendBaseUrl}/api/${endpoint}`, {
            headers: {
                Authorization: "Bearer "+token
            }
        });

        return response.data;
    } catch (error) {
        throw error?.response;
    }
    }

    async postReq(endpoint, body){
        try {
            const token = localStorage.getItem("ACCESS_TOKEN");

            const response = await axios.post(`${conf.backendBaseUrl}/api/${endpoint}`, body, {
                headers: {
                    Authorization: "Bearer "+token
                }
            });

            console.log("esponse logout", response);
            return response.data;
        } catch (error) {
            throw error?.response;
        }
    }

    async deleteReq(endpoint, id){
        try {
            const token = localStorage.getItem("ACCESS_TOKEN");

            const response = await axios.delete(`${conf.backendBaseUrl}/api/${endpoint}/${id}`, {
                headers: {
                    Authorization: "Bearer "+token
                }
            });

            console.log("delete req", response.data);
            return response.data;
        } catch (error) {
            throw error?.response;
        }
    }


    async putReq(endpoint, body){
        try {
            const token = localStorage.getItem("ACCESS_TOKEN");

            const response = await axios.put(`${conf.backendBaseUrl}/api/${endpoint}`, body, {
                headers: {
                    Authorization: "Bearer "+token
                }
            });

            console.log("put request ", response);
            return response.data;
        } catch (error) {
            throw error?.response;
        }
    }

}

const api = new Api();

export default api;
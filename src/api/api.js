import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bce404a1-937a-4eca-9006-c821a635ab8c"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profikeAPI obj')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+ userId);
    },
    getStatus(userId){ 
        return  instance.get(`profile/status/`+ userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status} );
    }
} 

export const authAPi = {
    me () {
        return instance.get(`auth/me`)
    }
}
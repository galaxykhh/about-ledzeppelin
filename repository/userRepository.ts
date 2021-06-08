import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';

class UserRepository {
    private path='/api/user'

    public signIn(): Promise<AxiosResponse> {
        return axiosInstance.post(`${this.path}/signin`);
    };

    public signUp(): Promise<AxiosResponse> {
        return axiosInstance.post(`${this.path}/signup`);
    };
};

const userRepository = new UserRepository();
export default userRepository;
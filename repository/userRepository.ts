import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';
import { ISignIn } from '../pages/signin/index';
import { ISignUp } from '../pages/signup/index';

class UserRepository {
    private path='/api/user'

    public signIn(payload: ISignIn): Promise<AxiosResponse> {
        return axiosInstance.post(`${this.path}/signin`, payload);
    };

    public signUp(payload: ISignUp): Promise<AxiosResponse> {
        return axiosInstance.post(`${this.path}/signup`, payload);
    };

    public checkAccount(payload: string): Promise<AxiosResponse> {
        return axiosInstance.get(`${this.path}/checkaccount/${payload}`);
    };

    public checkNickname(payload: string): Promise<AxiosResponse> {
        return axiosInstance.get(`${this.path}/checknickname/${payload}`);
    };
};

const userRepository = new UserRepository();
export default userRepository;
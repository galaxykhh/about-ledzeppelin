import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';

class MembersRepository {
    private path='/api/members'

    public getMembersData(): Promise<AxiosResponse> {
        return axiosInstance.get(this.path);
    };

    public getSelectedMember(id: string): Promise<AxiosResponse> {
        return axiosInstance.get(`${this.path}/${id}`);
    };
};

const membersRepository = new MembersRepository();
export default membersRepository;
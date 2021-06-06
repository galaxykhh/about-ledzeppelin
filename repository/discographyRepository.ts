import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';

class DiscographyRepository {
    private path='/api/album'

    public getDiscographyData(): Promise<AxiosResponse> {
        return axiosInstance.get(this.path);
    };

    public getSelectedAlbum(id: string): Promise<AxiosResponse> {
        return axiosInstance.get(`${this.path}/${id}`);
    };
};

const discographyRepository = new DiscographyRepository();
export default discographyRepository;
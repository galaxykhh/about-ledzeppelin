import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';

class DiscographyRepository {
    private path='/api/album'

    public getDiscography(): Promise<AxiosResponse> {
        return axiosInstance.get(this.path);
    };
};

const discographyRepository = new DiscographyRepository();
export default discographyRepository;
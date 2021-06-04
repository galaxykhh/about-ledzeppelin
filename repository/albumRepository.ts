import { axiosInstance } from "./axiosInstance";
import { AxiosResponse } from 'axios';

class AlbumRepository {
    private path='/api/album'

    public getDiscography(): Promise<AxiosResponse> {
        return axiosInstance.get(this.path);
    };
};

const albumRepository = new AlbumRepository();
export default albumRepository;
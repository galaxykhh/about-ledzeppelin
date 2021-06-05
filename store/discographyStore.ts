import { flow, action, makeObservable, observable } from "mobx";
import { IAlbum } from "../components/discography/index/Discography"
import discographyRepository from "../repository/discographyRepository";

class DiscographyStore {
    public discography: IAlbum[] = [];

    constructor() {
        makeObservable(this, {
            discography: observable,
            setDiscographyData: action,
            getDiscographyData: flow,
        });
    };

    public setDiscographyData(data: IAlbum[]) {
        this.discography = data;
    };

    public *getDiscographyData() {
        try {
            const { data } = yield discographyRepository.getDiscography();
            this.setDiscographyData(data);
            return this.discography;
        } catch(err) {
            console.log(err);
            alert('server under maintenance');
        };
    };
};

const discographyStore = new DiscographyStore();
export default discographyStore;
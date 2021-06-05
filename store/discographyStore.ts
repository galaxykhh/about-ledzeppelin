import { flow, makeObservable } from "mobx";
import discographyRepository from "../repository/discographyRepository";

class DiscographyStore {
    constructor() {
        makeObservable(this, {
            getDiscographyData: flow,
            getSelectedAlbum: flow,
        });
    };

    public *getDiscographyData() {
        try {
            const { data } = yield discographyRepository.getDiscography();
            return data;
        } catch(err) {
            console.log(err);
            alert('server under maintenance');
        };
    };

    public *getSelectedAlbum(id: string) {
        try {
            const { data } = yield discographyRepository.getSelectedAlbum(id);
            return data;
        } catch(err) {
            console.log(err);
            alert('server under maintenance');
        };
    };
};

const discographyStore = new DiscographyStore();
export default discographyStore;
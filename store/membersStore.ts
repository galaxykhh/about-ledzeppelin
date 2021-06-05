import { flow, makeObservable } from 'mobx'
import membersRepository from '../repository/membersRepository';

class MembersStore {
    constructor() {
        makeObservable(this, {
            getMembersData: flow,
            getSelectedMember: flow,
        });
    };

    public *getMembersData() {
        try {
            const { data } = yield membersRepository.getMembersData();
            return data;
        } catch(err) {
            console.log(err);
            alert('Server under maintenance');
        };
    };

    public *getSelectedMember(id: string) {
        try {
            const { data } = yield membersRepository.getSelectedMember(id);
            return data;
        } catch(err) {
            console.log(err);
            alert('Server under maintenance');
        };
    };
};

const membersStore = new MembersStore();
export default membersStore;
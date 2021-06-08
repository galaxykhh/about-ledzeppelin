import { action, computed, makeObservable, observable } from "mobx";

interface IUserData {
    account: string;
    nickName: string;
};

interface IUser {
    userData: IUserData | null;
};

class UserStore implements IUser {
    private _userData: IUserData | null = null;

    constructor() {
        makeObservable<UserStore, '_userData'>(this, {
            _userData: observable,
            userData: computed,
            setUserData: action,
        });
    };

    public get userData(): IUserData | null {
        return this._userData;
    };

    public setUserData(data: IUserData | null): void {
        this._userData = data;
    };
};

const userStore = new UserStore();
export default userStore;
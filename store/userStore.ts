import { action, computed, flow, makeObservable, observable } from "mobx";
import { ISignIn } from "../pages/signin";
import { ISignUp } from "../pages/signup";
import userRepository from "../repository/userRepository";

interface IUserData {
    account: string;
    nickname: string;
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
            signIn: flow,
            signUp: flow,
            checkAccount: flow,
            checkNickname: flow,
        });
    };

    public get userData(): IUserData | null {
        return this._userData;
    };

    public setUserData(data: IUserData | null): void {
        this._userData = data;
    };

    public *signUp(payload: ISignUp) {
        try {
            const { data: { message } } = yield userRepository.signUp(payload);
            if (message === 'signup success') {
                return true;
            }
            if (message === 'signup fail') {
                return false;
            }
        } catch(err) {
            console.log(err);
            return false;
        };
    };

    public *signIn(payload: ISignIn) {
        try {
            const { data: { message } } = yield userRepository.signIn(payload);
            if (message === 'signin success') {
                return true;
            }
            if (message === 'invalid') {
                return false;
            }
        } catch(err) {
            console.log(err);
        }
    };

    public *checkAccount(payload: string) {
        try {
            const { data: { message } } = yield userRepository.checkAccount(payload);
            if (message === 'available') {
                return true
            }
            if (message === 'already exist') {
                return false;
            }
        } catch(err) {
            console.log(err);
        };
    };

    public *checkNickname(payload: string) {
        try {
            const { data: { message } } = yield userRepository.checkNickname(payload);
            if (message === 'available') {
                return true;
            }
            if (message === 'already exist') {
                return false;
            }
        } catch(err) {
            console.log(err);
        };
    };
};

const userStore = new UserStore();
export default userStore;
import { useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { InputLayout, Input, Msg, ErrorMsg, SubmitButton, CheckButton } from '../../components/formComponents/formComponents';
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { flowResult } from "mobx";
import userStore from "../../store/userStore";

export interface ISignUp {
    account: string;
    password: string;
    passwordCheck: string;
    nickname: string;
};

const SignUpIndex = () => {
    const { register, handleSubmit, formState: { errors }, watch, setError, trigger } = useForm<ISignUp>();
    const [ isCheckedAccount, setIsCheckedAccount ] = useState<boolean>(false);
    const [ isCheckedNickname, setIsCheckedNickname ] = useState<boolean>(false);

    const setIsAvailableAccount = (): void => {
        setError('account', {
            type: 'available',
        });
    };

    const setIsNotCheckedAccount = (): void => {
        setError('account', {
            type: 'notChecked',
        });
    };

    const setIsNotAvailableAccount = (): void => {
        setError('account', {
            type: 'notAvailable',
        });
    };

    const setIsNotCheckedNickname = (): void => {
        setError('nickname', {
            type: 'notChecked',
        });
    };

    const setIsAvailableNickname = (): void => {
        setError('nickname', {
            type: 'available',
        });
    };

    const setIsNotAvailableNickname = (): void => {
        setError('nickname', {
            type: 'notAvailable',
        });
    };

    const onSubmit: SubmitHandler<ISignUp> = (payload) => {
        if (!isCheckedAccount) {
            setIsNotCheckedAccount();
            return;
        }
        if (!isCheckedNickname) {
            setIsNotCheckedNickname();
            return;
        }
        alert(JSON.stringify(payload));
    };


    const checkAccount = async (): Promise<void> => {
        await trigger('account');
        if (errors.account) {
            return;
        }
        const accountLength = watch('account').length;
        if (accountLength === 0) { // Todo : validate account (DB)
            return;
        }
        const payload = watch('account');
        const isSuccess = await flowResult(userStore.checkAccount(payload));
        if (isSuccess) {
            setIsAvailableAccount();
            setIsCheckedAccount(true);
            return;
        }
        setIsNotAvailableAccount();
    };

    const checkNickname = async (): Promise<void> => {
        await trigger('nickname');
        if (errors.nickname) {
            return;
        }
        const payload = watch('nickname');
        const isSuccess = await flowResult(userStore.checkNickname(payload));
        if (isSuccess) {
            setIsAvailableNickname();
            setIsCheckedNickname(true);
            return;
        }
        setIsNotAvailableNickname();
    }

    useEffect(() => {
        setIsCheckedAccount(false);
    }, [watch('account')]);

    useEffect(() => {
        setIsCheckedNickname(false);
    }, [watch('nickname')]);

    return (
        <Layout title='sign up page'>
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <Text>Join the About Led Zeppelin Community !</Text>
                <InputLayout>
                    <Input
                        placeholder='account'
                        type='text'
                        error={errors.account && errors.account.type !== 'available'}
                        {...register('account', {
                            required: 'Please enter your account'
                        })}
                    />
                    {errors.account && <ErrorMsg>{errors.account.message}</ErrorMsg>}
                    {errors.account && errors.account.type ==='notChecked' && <ErrorMsg>Please check your account</ErrorMsg>}
                    {errors.account && errors.account.type ==='notAvailable' && <ErrorMsg>This account is already in use</ErrorMsg>}
                    {isCheckedAccount && errors.account && errors.account.type === 'available' && <Msg>Available account</Msg>}
                    <CheckButton
                        type='button'
                        onClick={checkAccount}
                    >
                        Check
                    </CheckButton>
                </InputLayout>
                <InputLayout>
                    <Input
                        error={errors.password}
                        placeholder='password'
                        type='password'
                        {...register('password', {
                            required: 'Please enter your password'
                        })}
                    />
                    {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
                </InputLayout>
                <InputLayout>
                    <Input
                        error={errors.passwordCheck}
                        placeholder='password check'
                        type='password'
                        {...register('passwordCheck', {
                            required: 'Please check your password',
                            validate: password => password === watch('password'),
                        })}
                    />
                    {errors.passwordCheck && <ErrorMsg>{errors.passwordCheck.message}</ErrorMsg>}
                    {!errors.password && errors.passwordCheck && <ErrorMsg>Different password</ErrorMsg>}
                </InputLayout>
                <InputLayout>
                    <Input
                        error={errors.nickname && errors.nickname.type !== 'available'}
                        placeholder='nickname'
                        type='text'
                        {...register('nickname', {
                            required: 'Please set your nickname',
                            minLength: {
                                value: 5,
                                message: 'Please set it to at least 5 characters'
                            },
                            maxLength: {
                                value: 18,
                                message: 'Please set it to 18 characters or less',
                            },
                        })}
                    />
                    <CheckButton
                        onClick={checkNickname}
                        type='button'
                    >
                        Check
                    </CheckButton>
                    {errors.nickname && <ErrorMsg>{errors.nickname.message}</ErrorMsg>}
                    {errors.nickname && errors.nickname.type ==='notChecked' && <ErrorMsg>Please check your nickname</ErrorMsg>}
                    {errors.nickname && errors.nickname.type ==='notAvailable' && <ErrorMsg>This nickname is already in use</ErrorMsg>}
                    {isCheckedNickname && errors.nickname && errors.nickname.type === 'available' && <Msg>Available nickname</Msg>}
                </InputLayout>
                <SubmitButton onClick={handleSubmit(onSubmit)} >sign up</SubmitButton>
            </FormContainer>
        </Layout>
    );
};

export default SignUpIndex;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 700px;
`;

const Text = styled.div`
    font-size: 25px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 1.8vh;
    };
`;
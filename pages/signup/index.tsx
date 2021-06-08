import { useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { InputLayout, Input, Msg, ErrorMsg, SubmitButton, AccountCheckButton } from '../../components/formComponents/formComponents';
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

interface ISignUp {
    account: string;
    password: string;
    passwordCheck: string;
};

const SignUpIndex = () => {
    const { register, handleSubmit, formState: { errors }, watch, setError, trigger } = useForm<ISignUp>();
    const [ isChecked, setIsChecked ] = useState<boolean>(false);

    const setIsAvailable = (): void => {
        setError('account', {
            type: 'available',
        });
    };

    const setIsNotChecked = (): void => {
        setError('account', {
            type: 'notChecked',
        });
    };

    const onSubmit: SubmitHandler<ISignUp> = (payload) => {
        if (!isChecked) {
            setIsNotChecked();
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
        if (accountLength !== 0) { // Todo : validate account (DB)
            setIsChecked(true);
            setIsAvailable();
        }
    };

    useEffect(() => {
        setIsChecked(false);
    }, [watch('account')]);

    return (
        <Layout title='sign up page'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Container>
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
                        {errors.account && errors.account.type ==='duplicated' && <ErrorMsg>This account is already in use</ErrorMsg>}
                        {isChecked && errors.account && errors.account.type === 'available' && <Msg>Available account</Msg>}
                        <AccountCheckButton
                            type='button'
                            onClick={checkAccount}
                        >
                            Check
                        </AccountCheckButton>
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
                    <SubmitButton onClick={handleSubmit(onSubmit)} >sign up</SubmitButton>
                </Container>
            </form>
        </Layout>
    );
};

export default SignUpIndex;

const Container = styled.div`
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
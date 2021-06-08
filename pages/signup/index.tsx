import { useState, MouseEvent } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { InputLayout, Input, ErrorMsg, SubmitButton, AccountCheckButton } from '../../components/formComponents/formComponents';
import { useForm, SubmitHandler } from "react-hook-form";

interface ISignUp {
    account: string;
    password: string;
    passwordCheck: string;
};

const SignUpIndex = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<ISignUp>();
    const [ isChecked, setIsChecked ] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ISignUp> = (payload) => {
        if (!isChecked) {
            alert('please check your account');
            return;
        }
        alert(JSON.stringify(payload));
    };

    const checkAccount = (): void => {
        setIsChecked(true);
    };

    return (
        <Layout title='sign up page'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Container>
                    <InputLayout>
                        <Input
                            placeholder='account'
                            type='text'
                            error={errors.account}
                            {...register('account', {
                                required: 'Please enter your account'
                            })}
                        />
                        {errors.account && <ErrorMsg>{errors.account.message}</ErrorMsg>}
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
                                required: true,
                                validate: password => password === watch('password'),
                            })}
                        />
                        {errors.passwordCheck && <ErrorMsg>비밀번호가 일치하지 않습니다</ErrorMsg>}
                    </InputLayout>
                    <SubmitButton onClick={handleSubmit(onSubmit)} >Sign up</SubmitButton>
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
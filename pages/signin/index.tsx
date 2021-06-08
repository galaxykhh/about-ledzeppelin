import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { InputLayout, Input, ErrorMsg, SubmitButton } from '../../components/formComponents/formComponents';

interface ISignIn {
    account: string;
    password: string;
};

const SignInIndex = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>();

    const onSubmit: SubmitHandler<ISignIn> = (payload) => {
        alert(JSON.stringify(payload));
    };

    return (
        <Layout title='sign in page'>
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
                        {errors.account && <ErrorMsg> {errors.account.message} </ErrorMsg>}
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
                        {errors.password && <ErrorMsg> {errors.password.message} </ErrorMsg>}
                    </InputLayout>
                    <SubmitButton onClick={handleSubmit(onSubmit)} >Sign in</SubmitButton>
                </Container>
            </form>
        </Layout>
    );
};

export default SignInIndex;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 500px;
`;
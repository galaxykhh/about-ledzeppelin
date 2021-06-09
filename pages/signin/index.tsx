import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { InputLayout, Input, ErrorMsg, SubmitButton } from '../../components/formComponents/formComponents';

export interface ISignIn {
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
            <FormContainer onSubmit={handleSubmit(onSubmit)} >
                <Text>Welcome !</Text>
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
                <SubmitButton onClick={handleSubmit(onSubmit)} >sign in</SubmitButton>
            </FormContainer>
        </Layout>
    );
};

export default SignInIndex;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
    height: 500px;
`;

const Text = styled.div`
    font-size: 25px;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 1.8vh;
    };
`;
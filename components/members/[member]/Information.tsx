import styled from "styled-components";

interface IInformation {
    name: string;
    birth: string;
    part: string;
};

const Information = (props: IInformation) => {
    return (
        <Layout>
            <Name>{props.name}</Name>
            <Birth>{props.birth}</Birth>
            <Part>{props.part}</Part>
        </Layout>
    );
};

export default Information;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 400px;
    height: 400px;
    @media only screen and (max-width: 900px) {
        width: 210px;
        height: 300px;
    };
`;

const Name = styled.div`
    font-size: 30px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    };
`;

const Birth = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    };
`;

const Part = styled(Birth)``;
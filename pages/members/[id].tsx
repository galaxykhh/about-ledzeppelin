import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import { IMember } from "../../components/members/index/Member";
import Layout from "../../components/Layout";
import MemberDetail from "../../components/members/[member]/MemberDetail";
import membersRepository from "../../repository/membersRepository";

interface IParams extends ParsedUrlQuery {
    id: string;
};

interface ISelectedMember {
    image: string;
    name: string;
    birth: string;
    part: string;
};

const SelectedMember = (props: ISelectedMember) => {
    return (
        <Layout title={`${props.name}'s Information`} >
            <MemberDetail
                image={props.image}
                name={props.name}
                birth={props.birth}
                part={props.part}
            />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await membersRepository.getMembersData();
    const paths = data.map((x: IMember) => ({
        params: { id: x.id }
    }))
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { id } = context.params as IParams;
    const { data } = await membersRepository.getSelectedMember(id);
    return {
        props: data
    };
};

export default SelectedMember;
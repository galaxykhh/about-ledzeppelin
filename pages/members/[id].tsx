import { flowResult } from "mobx";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import Layout from "../../components/Layout";
import membersStore from "../../store/membersStore";
import MemberDetail from "../../components/members/[member]/MemberDetail";

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

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { id } = context.params as IParams;
    const data = await flowResult(membersStore.getSelectedMember(id));
    return {
        props: data
    }
};

export default SelectedMember;
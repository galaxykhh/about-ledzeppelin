import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { IMember } from '../../components/members/index/Member';
import MemberList from "../../components/members/index/MemberList";
import membersRepository from "../../repository/membersRepository";

interface IMembersIndex {
    memberList: IMember[];
};

const MembersIndex = (props: IMembersIndex) => {
    return (
        <Layout title='Led Zeppelin Members'>
            <MemberList memberList={props.memberList} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await membersRepository.getMembersData();
    return {
        props: {
            memberList: data
        }
    };
};

export default MembersIndex;
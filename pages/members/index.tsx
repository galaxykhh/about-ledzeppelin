import Layout from "../../components/Layout";
import { GetStaticProps } from "next";
import { flowResult } from "mobx";
import membersStore from "../../store/membersStore";
import MemberList from "../../components/members/index/MemberList";
import { IMember } from '../../components/members/index/Member';

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
    const memberList = await flowResult(membersStore.getMembersData());
    return {
        props: {
            memberList: memberList
        }
    };
};

export default MembersIndex;
import Layout from '../components/Layout';
import ButtonList from '../components/index/ButtonList';
import { useRouter } from 'next/dist/client/router';

const buttons = [
    {
        id: 1,
        to: '/discography',
        children: 'Discography',
    },
    {
        id: 2,
        to: '/members',
        children: 'Members',
    },
    {
        id: 3,
        to: '/community',
        children: 'Community',
    },
    {
        id: 4,
        to: '/about',
        children: 'About this page',
    },
];

export type ButtonsType = typeof buttons;

const Index = () => {
    const { push } = useRouter();
    return (
        <Layout title='About Led Zeppelin' >
            <ButtonList
                pushTo={push}
                buttons={buttons}
            />
        </Layout>
    );
};

export default Index;
import Layout from '../components/Layout';
import ButtonList from '../components/index/ButtonList';

const buttons = [
    {
        id: 1,
        to: '/discography',
        children: 'Discography',
    },
    {
        id: 2,
        to: '/photo',
        children: 'Photo',
    },
    {
        id: 3,
        to: '/community',
        children: 'Community',
    },
    {
        id: 4,
        to: '/about',
        children: 'About',
    },
];

export type ButtonsType = typeof buttons;

const Index = () => {
    return (
        <Layout title='Led Zeppelin Gallery' >
            <ButtonList buttons={buttons} />
        </Layout>
    );
};

export default Index;
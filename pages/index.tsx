import React from 'react';
import Layout from '../components/Layout';
import IndexContainer from '../containers/index/IndexContainer';

const buttons = [
    {
        id: 1,
        to: '',
        children: 'Discography',
    },
    {
        id: 2,
        to: '',
        children: 'item2',
    },
    {
        id: 3,
        to: '',
        children: 'item3',
    },
    {
        id: 4,
        to: '',
        children: 'item4',
    },
];

export type ButtonsType = typeof buttons;

const Home: React.FC = () => {
    return (
        <Layout title='Led Zeppelin Gallery' >
            <IndexContainer buttons={buttons} />
        </Layout>
    );
};

export default Home;
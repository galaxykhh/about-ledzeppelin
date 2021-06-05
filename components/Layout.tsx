import { ReactNode } from 'react';
import Head from 'next/head';

interface ILayout {
    title: string;
    children: ReactNode
};

const Layout = (props: ILayout) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            {props.children}
        </>
    );
};

export default Layout;

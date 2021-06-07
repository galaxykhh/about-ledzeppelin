import Layout from "../../components/Layout";
import AboutDetail from "../../components/about/AboutDetail";

const iconList = [
    {
        alt: 'Next.js',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/414px-Nextjs-logo.svg.png',
    },
];

const AboutIndex = () => {
    return (
        <Layout title='About this page' >
            <AboutDetail iconList={iconList} />
        </Layout>
    );
};

export default AboutIndex;
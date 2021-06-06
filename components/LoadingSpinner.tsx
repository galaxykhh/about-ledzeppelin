import styled from "styled-components";
import Loader from "react-loader-spinner";
import { theme } from "../styles/theme";

const LoadingSpinner = () => {
    return (
        <Layout>
            <Loader
                type="Circles"
                color={theme.colors.white}
                height={60}
                width={60}
            />
        </Layout>
    );
};

export default LoadingSpinner;

const Layout = styled.div`
    width: 60px;
    height: 60px;
`;
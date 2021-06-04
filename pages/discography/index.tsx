import Layout from "../../components/Layout";
import AlbumList from "../../components/discography/index/Discography";
import { observer } from "mobx-react";
import discographyStore from "../../store/discographyStore";
import { useEffect } from "react";

const Discography = observer(() => {

    useEffect(() => {
        discographyStore.getDiscographyData();
    }, []);

    return (
        <Layout title='Discography' >
            <AlbumList
                discography={discographyStore.discography}
            />
        </Layout>
    );
});


export default Discography;
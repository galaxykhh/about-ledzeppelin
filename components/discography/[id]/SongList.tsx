import styled from 'styled-components';
import { ISong } from './Song';
import Song from './Song';

interface ISongList {
    songs: ISong[];
}

const SongList = (props: ISongList) => {
    let initialDelay = 0.05;

    const setDelay = (): number => {
        initialDelay += 0.05;
        return initialDelay
    };

    return (
        <Layout>
            {props.songs.map(item => (
                <Song
                    trackNumber={item.trackNumber}
                    title={item.title}
                    delay={setDelay()}
                    key={item.trackNumber}
                />
            ))}
        </Layout>
    );
};

export default SongList;

const Layout = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 600px;
    height: 300px;
    @media only screen and (max-width: 900px) {
        align-items: center;
    };
    @media only screen and (max-width: 600px) {
        width: 350px;
        overflow: auto;
        margin-left: 40px;
    };
`;
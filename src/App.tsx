import { useEffect, useState } from 'react';
import { ListItem } from './components';
import { LIST_NUMBER } from './constants';
import GlobalStyle from './theme/globalStyle';

const App = () => {
    const [currentScroll, setCurrentScroll] = useState(0);
    const [screenHeight, setScreenHeight] = useState(768);
    const [maxScroll, setMaxScroll] = useState(100);

    useEffect(() => {
        const getOffset = () => {
            let max = 0;

            return () => {
                const fromTop = window.scrollY;

                if (fromTop > max) {
                    max = fromTop;
                    setMaxScroll(max);
                }

                setCurrentScroll(fromTop);
            };
        };

        setScreenHeight(window.innerHeight);

        window.addEventListener('scroll', getOffset());

        return () => {
            window.removeEventListener('scroll', getOffset());
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <h1>Some long list in {LIST_NUMBER} lines</h1>
            <ol>
                {[...Array(LIST_NUMBER)].map((_item, index) => {
                    return (
                        <ListItem
                            key={index}
                            currentPosition={currentScroll}
                            screenHeight={screenHeight}
                            maxScroll={maxScroll}
                            index={index}
                        />
                    );
                })}
            </ol>
        </>
    );
};

export default App;

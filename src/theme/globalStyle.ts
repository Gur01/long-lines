import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
    }

    li {   
        padding: 10px;
        border: 1px solid grey;
    }
`;

export default GlobalStyle;

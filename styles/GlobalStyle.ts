import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1C1A22;
        color: #fff;
    }

    html {
        @media (max-width: 1088px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body, input, textarea, button {
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 56px;
        line-height: 125%
    }

    li {
            list-style-type: none;
    }

    a {
        text-decoration: none;

    }
`
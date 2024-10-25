import { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/fundoformulario.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        box-sizing:  border-box;
    }

    body {
        background-image: url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 0;
        padding: 0;

        font-family: 'Nunito', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #81259D;
    }

    input, button, textarea, h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito', sans-serif;
    }
`
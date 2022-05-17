import { createdGlobalStyle } from 'styled-components'

const globalStyle = createdGlobalStyle `

    * {
        outline:none;
        box-sizing: border-box;
      }

    body {
        line-height: normal;
    }

    html, body {
        width: 100%;    
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root {
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        backround-position: center center;
    }

    .mb-2{
        margin-bottom: 16px;
    }

    .pt-2 {
        padding-top: 16px;
    }

`

export default GlobalStyle
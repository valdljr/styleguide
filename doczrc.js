export default {
    title: 'Bling',
    dest :  '/prod' ,
    themeConfig: {
        colors: {
            primary: 'green',
        },
        mode: 'light',
        logo: {
            src: 'https://www.bling.com.br/site/comuns/images/logo.png',
            width: 150
        }
    },
    htmlContext: {
        head: {
            links: [{
                rel: 'stylesheet',
                href: 'https://www.bling.com.br/styles/style-1.7-1540380778.css',
            }]
        }
    }
}
import App, {Container} from 'next/app'
import Header from '../components/header'
import '../sass/main.scss'

class MyApp extends App {
    static async getInitialProps({Component}){
        let pageProps
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps()
        }
        return {
            pageProps
        }
    }
     render(){
         const { Component, pageProps } = this.props
         return (
             <Container>
                <Header>
                    <Component {...pageProps} />
                </Header>
             </Container>
         )
     }
}

export default MyApp
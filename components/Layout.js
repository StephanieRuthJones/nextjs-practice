import Head from 'next/head'
import Navbar from './Navbar'


const Layout = props => {
    return (
        <div>
            <Head>
                <title>BitzPrice</title>
            </Head>
            <Navbar />
            {/* whatever page we're on, props.children is where it will output */}
            {props.children}
        </div>
    )
}

export default Layout
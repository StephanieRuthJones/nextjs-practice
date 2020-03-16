import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        <div>
            <h1>Welcome to My App</h1>
        </div>
    </Layout>

)

Index.getInitialPropss = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    const data = await res.json()

    return {
        bpi: data.bpi
    }
}

export default Index


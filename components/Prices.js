

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }
    render() {
        let list = ''
        if (this.state.currency === 'USD') {
            list = <li>
                Bitcoin rate for: {this.props.bpi.USD.description} :
                <span>{this.props.bpi.USD.code}</span>
                <strong>{this.props.bpi.USD.rate}</strong>
            </li>
        } else if (this.state.currency === 'GPB') {
            list = <li>
                Bitcoin rate for: {this.props.bpi.GPB.description} :
        <span>{this.props.bpi.GPB.code}</span>
                <strong>{this.props.bpi.GPB.rate}</strong>
            </li>
        } else if (this.state.currency === 'EUR') {
            list = <li>
                Bitcoin rate for: {this.props.bpi.EUR.description} :
    <span>{this.props.bpi.EUR.code}</span>
                <strong>{this.props.bpi.EUR.rate}</strong>
            </li>
        }
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <br />
                <select onChange={e => this.setState({ currency: e.target.value })} >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        )
    }
}

export default Prices
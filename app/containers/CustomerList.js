import React, {PropTypes} from 'react'
import store from '../store/Customers'

class CustomerList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customers: props.store.getCustomers(),
    }
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({
        customers: this.props.store.getCustomers()
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    const {customers} = this.state
    if (customers.length === 0) {
      return <NoCustomers />
    } else {
      return <ListOfCustomers customers={customers} />
    }
  }
}

CustomerList.defaultProps = {
  store,
}

CustomerList.propTypes = {
  store: PropTypes.shape({
    getCustomers: PropTypes.func,
  }).isRequired,
}

function ListOfCustomers({customers}) {
  return (
    <div>
      Here is your list of customers!
      <ul>
        {customers.map(c => <Customer {...c} />)}
      </ul>
    </div>
  )
}

function NoCustomers() {
  return (
    <div>
      You have no customers. Better get to work!
    </div>
  )
}

function Customer({name}) {
  return <li key={name}>{name}</li>
}

export default CustomerList


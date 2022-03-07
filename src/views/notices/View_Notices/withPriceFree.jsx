import { Component } from 'react'

export const withPriceFree = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} withPriceFree={true} />
    }
  }

  return HOC
}

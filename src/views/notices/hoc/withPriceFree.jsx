import { Component } from 'react'

export const withPriceFree = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} withPriceFree={true} />
    }
  }

  HOC.displayName = `WithPriceFree(${getDisplayName(WrappedComponent)})`
  return HOC
}

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

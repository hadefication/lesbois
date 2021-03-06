import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import composeStore from '../store'
import routes from '../routes'

const { store, actions, history } = composeStore(
    browserHistory,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)

class ClientProvider extends Component {
    /**
     * Works like an hoc adds
     * current props and inherited props from the mounted component plus actions
     * in every component that is in our routes
     * @param  {[type]} Component     [description]
     * @param  {[type]} existingProps [description]
     * @return {Component} exsting component with passed props
     */
    withActions(ExistingComponent, existingProps) {
      const { props } = this
      const allProps = {
          ...props,
          ...existingProps,
          actions
      }

      return <ExistingComponent {...allProps} />
    }
    render() {
        const { withActions } = this
        return(
            <Provider store={store}>
                <Router history={history}
                        createElement={withActions.bind(this)}
                        routes={routes} />
            </Provider>
        )
    }
}

export default ClientProvider

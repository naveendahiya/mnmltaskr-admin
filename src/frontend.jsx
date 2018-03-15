import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'

import ItemsContainer from './containers/ItemsContainer'

const mountPoint = document.getElementById('mountPoint')

const renderWithHMR = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer> 
    </Provider>,
    mountPoint
  )
}

renderWithHMR(ItemsContainer)

if (module.hot) {
  module.hot.accept('./containers/ItemsContainer', () => { renderWithHMR(ItemsContainer) })
}

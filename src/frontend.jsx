import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import Index from './components/Index'
import store from './store'

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

renderWithHMR(Index)

if (module.hot) {
  module.hot.accept('./components/Index', () => { renderWithHMR(Index) })
}
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store'
import Index from './components/Index'

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

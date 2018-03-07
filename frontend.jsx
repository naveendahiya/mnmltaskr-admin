import React from 'react'
import ReactDOM from 'react-dom'
import Index from './Index'
import { AppContainer } from 'react-hot-loader'

const mountPoint = document.getElementById('mountPoint')

const renderWithHMR = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mountPoint
  )
}

renderWithHMR(Index)

if (module.hot) {
  module.hot.accept('./Index', () => { renderWithHMR(Index) })
}

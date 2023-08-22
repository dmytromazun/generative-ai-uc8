import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className="App">App</div>
  </Provider>
)

export default App

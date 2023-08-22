import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import { Form } from './components/Form'
import { DisplayValues } from './components/DisplayValues'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <DisplayValues />
      <Form />
    </div>
  </Provider>
)

export default App

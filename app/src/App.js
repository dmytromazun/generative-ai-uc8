import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import { Form } from './components/Form'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Form />
    </div>
  </Provider>
)

export default App

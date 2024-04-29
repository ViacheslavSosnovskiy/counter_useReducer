import Context from "../Context"
import Alert from './Alert'
import Counter from './Counter'

const App = () => {
  return (
    <Context>
        <Alert />
        <Counter />
    </Context>
  )
}

export default App
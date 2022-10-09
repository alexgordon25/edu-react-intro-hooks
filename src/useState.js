import { useState } from 'react'

// Hooks rules:
// 1. Cannot be callout on loop, if, for, foreach, while, map, 
// but only in Component higher level
// 2 . It can only be called inside
//   - a react Component
//   - a custom hook (use[customhookname])

// class App extends Component {
//   state = { counter: 0 }
//   increase = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   render() {
//     return(
//       <div>
//         counter: {this.state.counter}
//         <button onClick={this.increase}>Increase</button>
//       </div>
//     )
//   }
// }

const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial)
  const increase = () => {
    setCounter(counter + 1)
  }
  return [counter, increase]
}

const App = () => {
  const [counter, increase] = useCounter(0)
  return (
    <div>
      Counter: {counter}
      <button onClick={increase}>Increase</button> 
    </div>
  )
}

export default App
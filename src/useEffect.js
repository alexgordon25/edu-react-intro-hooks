import { Component, useState, useEffect } from 'react'

const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial)
  const increase = () => {
    setCounter(counter + 1)
  }
  return [counter, increase]
}

// const Interval = ({ counter }) => {
//   useEffect(() => {
//     const i = setInterval(() => console.log(counter), 1000)
//     return () => clearInterval(i)
//   }, [counter])
//   return (
//     <p>Interval</p>
//   )
// }

class Interval extends Component {
  interval = ''
  componentDidMount() {
    this.interval = setInterval(() => console.log(this.props.contador), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <p>Interval</p>
    )
  }
}

const App = () => {
  const [counter, increase] = useCounter(0)
  useEffect(() => {
    document.title = counter
  }, [counter]);
  return (
    <div>
      Counter: {counter}
      <button onClick={increase}>Increase</button> 
      <Interval counter={counter} />
    </div>
  )
}

export default App
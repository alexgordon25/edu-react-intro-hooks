import { useRef } from 'react'

const App = () => {
  const ref = useRef()
  const inputRef = useRef()
  const click = () => {
    console.log(ref.current.clientHeight)
    ref.current.innerHTML = 'Chanchito feliz'
  }
  const focus = () => {
    inputRef.current.focus()
  }
  
  return (
    <div>
      <p onClick={click} ref={ref}>
        Click
      </p>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App
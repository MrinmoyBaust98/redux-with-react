import { useSelector } from "react-redux"
import { RootState } from "./redux/store"

function App() {

  const{count}=useSelector((state:RootState)=>state.counter)

  return (
    <>
      <div className="...">
        <button className="..."> Increment</button>
        <div>{count}</div>
        <button className="..."> Decrement</button>
      </div>
    </>
  )
}

export default App

import { useSelector,useDispatch } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"

function App() {

  const{count}=useSelector((state:RootState)=>state.counter)
  const dispatch=useDispatch()

  return (
    <>
      <div style={{padding:"5px"}} className="...">
        <button style={{border:'2px solid green',padding:"5px"}} className="..." onClick={()=>dispatch(increment())}> Increment</button>
        <button style={{border:'2px solid green',padding:"5px",marginLeft:"5px"}} className="..." onClick={()=>dispatch(incrementByAmount(5))}> IncrementByValue</button>
        <div  style={{padding:"5px"}}>{count}</div>
        <button style={{border:'2px solid red',padding:"5px"}} className="..."onClick={()=>dispatch(decrement())}> Decrement</button>
      </div>
    </>
  )
}

export default App

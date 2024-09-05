// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment } from './Redux/counter';

// export default function App() {
//   const count = useSelector(state => state.counter.value)
// const dispatch=useDispatch();

//   return (
//     <div>
// <h1>the count is :{count}  check</h1>




// <button  onClick={() => dispatch(increment())}  >
//  Increment </button>

//     </div>
//   )
// }

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Redux/counter'

export default function App() {
const count=useSelector(state=>state.counter.value)
 const  dispatch=useDispatch()
  return (
    <div>
<h1>count is {count}  </h1>
<button onClick={()=>dispatch(increment())} >increment</button>
    </div>
  )
}





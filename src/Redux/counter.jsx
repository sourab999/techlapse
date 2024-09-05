
// import { createSlice } from "@reduxjs/toolkit";
//  export const counterSlice = createSlice({

import { createSlice } from "@reduxjs/toolkit";

//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     increment: state => {
//     state.value=state.value+1
//     }
  
//   }
// })
// export const { increment } = counterSlice.actions

// export default counterSlice.reducer


export const counterSlice=createSlice({
name:"counter",
initialState:{value:0},
reducers:{ increment:state=>{
  state.value=state.value+1
}  }
})
export const {increment}=counterSlice.actions
export default counterSlice.reducer




import React, { useReducer } from 'react'
import {createContext} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) =>{
  switch(action.type){
   case 'SET_WORKOUTS' : 
   return {
    workouts: action.payload
   }
   case 'CREAT_WORKOUT' : 
   return {
    workouts: [action.payload, ...state.workouts]
   }

   default: 
   return state
  }
}

function WorkoutsContextProvider({children}) {
  const [state, dispatch] = useReducer(workoutsReducer, 
    {workouts: null} )
  return (
    <WorkoutsContext.Provider value={{state, dispatch}}>
        {children}
    </WorkoutsContext.Provider>
  )
}

export default WorkoutsContextProvider
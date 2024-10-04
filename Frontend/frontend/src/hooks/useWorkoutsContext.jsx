import { useContext } from "react"
import { WorkoutsContext } from "../context/WorkoutsContext"


export const useWorkoutsContext =()=> {
const context = useContext(WorkoutsContext)

if(!context){
    throw error('useWorkoutsContext must be used inside a workoutsContextprovider')
}
  return context
}


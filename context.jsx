 
 import React, { useReducer} from 'react';

 const ACTIONS = {
   INCREMENT: 'increment',
   DECREMENT: 'decrement'
 }
 
 const reducer = (state,action) =>{
   switch(action.type){
     case ACTIONS.INCREMENT:
       return {count: state.count+1}
     case ACTIONS.DECREMENT:
         return {count: state.count-1}
     default:
       return state
       
   }
 }
 
 export const Context = React.createContext();
 const Temp = ({children}) =>{

 const [state,dispatch] = useReducer(reducer,{count: 0})
 const value = {
   state: state,
   increment:  () =>{
    dispatch({type:ACTIONS.INCREMENT})
  },

   decrement: () => {
    dispatch({type: ACTIONS.DECREMENT})
  }
}

 return <Context.Provider value={value}>{children}</Context.Provider>
 }

 export  {Temp};
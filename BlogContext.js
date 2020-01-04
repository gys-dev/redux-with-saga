
import React, {Context, useState, useReducer} from 'react'
import {View} from 'react-native'



const BlogContext = React.createContext()

const dataChange = (state, action) => {
    switch(action.type){
        case 'inc': {
            return state + 1;
        }
        case 'dec': {
            return state - 1;
        }
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {
   const [data, setData] = useState([0]);
   const [state, dispatch] = useReducer(dataChange, 2)
   
   const setMemory = (newData) => {
       setData([...data, newData])
   }

   const setSomething = (ty) => {
        dispatch({type: ty})
   }
   
   return (
    <BlogContext.Provider
    value = {{data: state, setMemory: setSomething}}
    >
        {children}
    </BlogContext.Provider>
   )
}



export default BlogContext;
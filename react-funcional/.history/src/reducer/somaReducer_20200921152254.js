import {useReducer} from 'react'

const somaReducer = (state, action) => {
   switch(action.type){
        case 'SOMA':
            return{...state, resultado: action.payload}
        default:
            return state     

   }

}

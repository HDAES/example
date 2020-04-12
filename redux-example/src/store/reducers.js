import { type } from './action'

const initState = {
    name:'hello redux',
    age:18
}

export default ( state = initState,action) =>{
    switch(action.type){
        case type.NAME :
            return{
                ...state,
                name:action.name
            }
        default :
            return {
                ...state
            }
    }
}
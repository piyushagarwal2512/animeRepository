import actionTypes, { deleteFromContent } from "./actions"

let initialState={
       searchData:[]
}

 const reducer=(state=initialState,action)=>{


    switch(action.type)
    {
        case actionTypes.FETCH_DATA:         
        return {
            ...state,
           searchData:action.payload && action.payload.results?[...state.searchData,...action.payload.results]:[]
        }      
        default:
            return state
    }
}

export default reducer
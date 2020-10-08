import actionTypes, { deleteFromContent } from "./actions"

let initialState={
       searchData:[],
       lastPage:1
}

 const reducer=(state=initialState,action)=>{


    switch(action.type)
    {
        case actionTypes.FETCH_DATA:   
        let data=[];let page=state.lastPage;
         if(action.payload && !action.payload.results){
             data=[...state.searchData]
         }
         else if(action.payload && action.payload.results)
         {
             data=[...state.searchData,...action.payload.results]
             page=action.payload.last_page;
         }
        return {
            ...state,
           searchData:data,
           lastPage:page
        }      
        default:
            return state
    }
}

export default reducer

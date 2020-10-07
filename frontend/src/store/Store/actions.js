
import axios from "axios"
import{domain} from "../../apis"
 
 export const actionTypes={

        FETCH_DATA:"FETCH_DATA",
}

//get data
export function getData(searchData,page)
{

return (dispatch)=>{

        axios.get(`${domain}?q=${searchData}&limit=16&page=${page}`).then((data)=>{

        dispatch({type:actionTypes.FETCH_DATA,payload:data.data})
        }).catch((e)=>{
            dispatch({type:actionTypes.FETCH_DATA,payload:e})
        })
}

}

//clear dispatch
export function clearAction(actionType)
{
    return {
        type:actionType,
        payload:""
    }
}

export default actionTypes
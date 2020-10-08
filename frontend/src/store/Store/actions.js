
import axios from "axios"
import{domain} from "../../apis"
 
 export const actionTypes={

        FETCH_DATA:"FETCH_DATA",
}

//get data
export function getData(searchData,page,limit)
{

return (dispatch)=>{

        axios.get(`${domain}?q=${searchData}&limit=${limit}&page=${page}`).then((data)=>{

        dispatch({type:actionTypes.FETCH_DATA,payload:data.data})
        }).catch((e)=>{
            alert("No Data Found")
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

import React, { Component } from 'react'
import {TextField}from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { bindActionCreators } from "redux";
import {connect} from "react-redux"
import actionTypes, {clearAction} from "../store/Store/actions"
import {withRouter} from "react-router-dom"


class SearchComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             searchValue:""
        }
    }
 

    searchText=()=>{

        const {searchValue}=this.state

        if(searchValue){

            this.props.clearDispatchAction(actionTypes.FETCH_DATA)
                this.props.history.push(`/${searchValue}`)
        }
        else
        {
            alert("Please Enter a valid search")
        }
       
    }
    searchTextChange=(event)=>{
        this.setState({searchValue:event.target.value})
    }

    componentDidUpdate
    
    render() {
        const {searchValue}=this.state
        return (
            <div className="search-div">
                <TextField id="outlined-basic" label="Search" 
                placeholder={"Searching...."}
                variant="outlined" style={{width:"60%",backgroundColor:"white"}}
                value={searchValue}
                onChange={this.searchTextChange}
                InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton onClick={this.searchText}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )
                    }}
                />
            </div>
        )
    }
}

const mapActionToProps=(dispatch)=>{

    return bindActionCreators(
        {
          clearDispatchAction: clearAction
        },
        dispatch
      );
}

export default withRouter(connect(null,mapActionToProps)(SearchComponent))

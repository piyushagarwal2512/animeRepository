import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import {getData,clearAction,actionTypes} from "../store/Store/actions"
import { bindActionCreators } from "redux";
import {isEqual} from "lodash"
import {withRouter} from "react-router-dom"
import {domain}from "../apis"
import {Typography,Link} from "@material-ui/core"
import {Card} from "../Common/index"

 class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentPage:1,
            data:[]
        }
    }
    

    componentDidMount()
    {
        let searchText= this.props.match.params.searchText;
        this.props.fetchDataAction(searchText,this.state.currentPage)
    }

    componentDidUpdate(prevProps,prevState)
    {
        if(!isEqual(prevProps.data,this.props.data))
        {
            this.setState({data:this.props.data})
        }
        if(prevProps.match.params.searchText!==this.props.match.params.searchText)
        {
            this.props.clearDispatchAction(actionTypes.FETCH_DATA)
            this.props.fetchDataAction(this.props.match.params.searchText,1)
        }
        if(prevState.currentPage!==this.state.currentPage)
        {
            this.props.fetchDataAction(this.props.match.params.searchText,this.state.currentPage)
        }
    }
    componentWillUnmount()
    {

    }

    fetchMoreData=()=>{
        this.setState((prevState)=>{return {currentPage:prevState.currentPage+1}});
    }

    render() {

       const {data}=this.state
        return (
            <div className="main-component-div">
                <div>
                    <Typography style={{color:"white",paddingTop:"8%"}}>{`${domain}?q=${this.props.match.params.searchText}&limit=16`}</Typography>
                </div>
            <div className="main-card-div">
                    {
                        data.map((obj)=><Card key ={obj.mal_id} image={obj.image_url} title={obj.title}/>)
                    }
            </div>
            { data && data.length >0 &&
            <div style={{textAlignLast:"end",color:"white",margin:"0% 3% 0% 3%"}}>
                <Link onClick={this.fetchMoreData}>{"...Load More"}</Link>
            </div>
             }
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        data:state.searchData
    }
}

function mapActionToProps(dispatch){

    return bindActionCreators(
        {
          fetchDataAction:getData,
          clearDispatchAction: clearAction
        },
        dispatch
      );
}

export default withRouter(connect(mapStateToProps,mapActionToProps)(MainComponent))

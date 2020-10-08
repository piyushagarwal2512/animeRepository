import React, { Component } from 'react'
import connect from "react-redux/es/connect/connect";
import {getData,clearAction,actionTypes} from "../store/Store/actions"
import { bindActionCreators } from "redux";
import {isEqual} from "lodash"
import {withRouter} from "react-router-dom"
import {domain}from "../apis"
import {Typography,Link} from "@material-ui/core"
import {Card} from "../Common/index"
import Pagination from '../Common/Pagination';

 class MainComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            currentPage:1,
            data:[],
            limit:16
        }
    }
    

    componentDidMount()
    {
        let searchText= this.props.match.params.searchText;
        this.props.fetchDataAction(searchText,this.state.currentPage,this.state.limit)
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
            this.props.fetchDataAction(this.props.match.params.searchText,1,16)
            this.setState({currentPage:1,limit:16})
        }
        if(prevState.currentPage!==this.state.currentPage)
        {
            this.props.clearDispatchAction(actionTypes.FETCH_DATA)
            this.props.fetchDataAction(this.props.match.params.searchText,this.state.currentPage,16)
            this.setState({limit:16})
        }
        if(prevState.limit!==this.state.limit)
        {
            this.props.fetchDataAction(this.props.match.params.searchText,this.state.currentPage,this.state.limit)
        }
    }
    componentWillUnmount()
    {

    }
    pageChangeHandler=(event,page)=>{
         this.setState({currentPage:page})
    }

    fetchMoreData=()=>{
        this.setState((prevState)=>{return {limit:prevState.limit+4}});
    }

    render() {

       const {data}=this.state
        return (
            <div className="main-component-div">
                <div>
                    <Typography style={{color:"white",paddingTop:"8%"}}>{`${domain}?q=${this.props.match.params.searchText}&limit=${this.state.limit}&page=${this.state.currentPage}`}</Typography>
                </div>
            <div className="main-card-div">
                    {
                        data.map((obj)=><Card key ={obj.mal_id} image={obj.image_url} title={obj.title}/>)
                    }
                                
            </div>
            { data && data.length >0 &&
            <div style={{textAlignLast:"end",color:"white",margin:"0% 3% 7% 3%"}}>
                <Link onClick={this.fetchMoreData}>{"...Load More"}</Link>
            </div>           
             }
            <Pagination page={this.state.currentPage} pageChange={this.pageChangeHandler} noOfPages={this.props.pages}/>
            </div>
        )
    }
}

function mapStateToProps(state){

    return {
        data:state.searchData,
        pages:state.lastPage
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

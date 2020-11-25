import React, { Component } from 'react'

 class SearchContainer extends Component {
     state={
         isLoadin:true,
         resultText:[]
     }
     handleResult = () =>{
         this.setState({resultText:this.props.location.state.data})
     }
     componentDidMount(){
         this.handleResult();
     }
     componentDidUpdate(preQ){
         let previousQuery = preQ.location.state.data;
         let newQuery = this.props.location.state.data;
         if(previousQuery !== newQuery){
             this.handleResult();
         }
     }
    render() {
        let toRender = <div>
        {this.state.resultText.length > 0 ? (
                    <pre>
                        <small>{JSON.stringify(this.state.resultText, null, 2)}</small>
                    </pre>
                ) : (
                    <p>NO RESULTS FOUND</p>
                )}
        </div>
        return (
            <div style={{ margin: "20px 0px 0px 20px" }}>{toRender}</div>
          
        )
    }
}
export default SearchContainer;

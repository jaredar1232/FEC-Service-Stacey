import React from 'react';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        if(this.props.display === 'search'){
            return(
                <div>

                </div>
            )
        }
        else{
            return null;
        }
    }
}
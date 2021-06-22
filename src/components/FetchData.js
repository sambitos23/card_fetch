import React, { Component } from 'react';
import CardComp from './CardComp';
import { Grid } from '@material-ui/core';

export default class FetchData extends Component {
    constructor(props){
        super(props);

        this.state = {
            result: []
        }
    }

    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then((resJson) => {
            this.setState({
                result: resJson.data
            })
        })
    }
    render() {
        return (
            <div>
                <Grid container style={{padding: "5%"}}>
                    {this.state.result.map((single) => (                                
                        <Grid item xs={12} md={6} lg={4} style={{padding: "2%"}}>
                            <CardComp {...single} />
                        </Grid>
                    ))}
                </Grid> 
            </div>
        )
    }
}

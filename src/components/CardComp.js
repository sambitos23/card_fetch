import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default class CardComp extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardContent style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <div>
                            <Typography color="textSecondary" >
                            {this.props.email}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            {this.props.first_name} {this.props.last_name}
                            </Typography>
                        </div>
                        <div style={{width: "100px", height: "100px", borderRadius:"50%", overflow: "hidden", marginLeft: "3%"}}>
                            <img src={this.props.avatar} alt="picture" style={{width: "100px", height: "100px"}} />  
                        </div>                      
                    </CardContent>
                </Card>
            </div>
        )
    }
}

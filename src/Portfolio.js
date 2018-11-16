import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardText, Col } from 'reactstrap';

export class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/portfolio.csv').then ((data) => {
            this.setState({
                data: data
            })
        })
    }
    render() {
        return <div className="container">Projects
                 { this.state.data.map((d, i) => {
                    return <Col lg="8" key={ "photo" + i }>
                            <Card>
                                <img alt="portfolio_pictures" className="card-img-top" src={d.link}></img>
                            <CardBody>
                                <CardText>
                                { d.location }
                                </CardText>
                            </CardBody>
                            </Card>
                            <br/>
                            </Col>
                
                   }) }
               </div>
    }
}
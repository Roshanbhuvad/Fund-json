import React, {useState,
    Component
} from "react"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import CardColumns from "react-bootstrap/CardColumns"
import "./ownStyle.css"
import Jumbotron from "./images/image2.png";
import data from "./data/funds.json";
import { CardView } from 'react-card-with-image'
import CardInfo from "./CardInfo";

const newdata = data.map((data) => {
    return ( 
        
            <Card key={data.UID} style={{width: "25rem"}}>
            <Image style={{width:60, align:"left", height:"auto"}} src={Jumbotron}/>
            <Card.Body>
            <Card.Title> {data.name}</Card.Title>
            <Card.Text>{data.FundType}</Card.Text>
            <button className="btn-primary" onClick={CardInfo}>Show more details</button>
             <a className="btn-primary" href={data.FundUrl} target="_blank" rel="nooperner noreferrer">Invest Now</a></Card.Body></Card>           
    );
})

export default class Main extends Component {
    render() {
        return (
            <CardColumns className ="m-3 p-3 owncard"> {newdata}</CardColumns>
        )
    }
}
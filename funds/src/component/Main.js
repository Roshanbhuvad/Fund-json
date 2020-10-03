import React, {
    Component
} from "react"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import "./ownStyle.css"

import data from "./data/funds.json";

const newdata = data.map((data) => {
    return ( 
        <Card key ={data.UID}>
        <Card.Body>
        <Card.Title > {data.name}</Card.Title>
        <Card.Text>{data.FundType}</Card.Text>
        <a className = "btn-primary" href = {data.FundUrl} target = "_blank" rel = "nooperner noreferrer">Invest Now</a></Card.Body></Card>
    )
})

export default class Main extends Component {
    render() {
        return (
            <CardColumns className = "m-3 p-3 owncard"> {newdata}</CardColumns>
        )
    }
}
import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import data from "./data/funds.json";
class CardInfo extends Component {
  renderCard(card) {
    return (
      <Card>
        <Card.Text src={data.name} alt={data.name} />
      </Card>
    );
  }
 
  renderInfo(data) {
    return (
      <ul className="list-unstyled">
        <li>
          <h6>Name :</h6>
          <div>{data.name}</div>
        </li>
 
        <li>
          <h6>Type : </h6>
          <div>{data.FundType}</div>
        </li>
 
        <li>
          <h6>Scheme: </h6>
          <div>{data.oneyearReturn}</div>
        </li>
 
        <li>
          <h6>Scheme : </h6>
          <div>{data.threeyearReturn}</div>
        </li>
 
        <li>
          <h6>Minimum Investment : </h6>
          <div>{data.minLumpsumAmt}</div>
        </li>
      </ul>
    );
  }
  render() {
    const card = this.props.card;
    if (card != null)
      return (
        <div className=" cardInfo p-5 ">
          <div className="row">
            <div className="col-12 col-md-5 ">
              <p>hi</p>
              {this.renderCard(card)}
            </div>
            <div className="col-12 col-md-5 border border-primary">
              <h4>Card Information</h4>
              {this.renderInfo(card)}
            </div>
          </div>
        </div>
      );
    else return <div />;
  }
}
 
export default CardInfo;